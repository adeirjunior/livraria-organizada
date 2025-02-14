import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SerialPort, ReadlineParser } from 'serialport';

@WebSocketGateway({ cors: true })
export class AppGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;
  private port: SerialPort;

  constructor() {
    this.connectToArduino();
  }

  afterInit() {
    console.log('WebSocket iniciado!');
  }

  private async connectToArduino() {
    try {
      const portPath = 'COM7';

      this.port = new SerialPort({ path: portPath, baudRate: 115200 });
      const parser = this.port.pipe(new ReadlineParser({ delimiter: '\n' }));

      this.port.on('open', () =>
        console.log(`🟢 Conectado ao Arduino em ${portPath}`),
      );
      parser.on('data', (data) => {
        console.log(`Recebido do Arduino: ${data.trim()}`);
        this.server.emit('arduino-data', data.trim()); // Envia para os clientes WebSocket
      });

      this.port.on('error', (err) =>
        console.error(`Erro na Serial: ${err.message}`),
      );
    } catch (error) {
      console.error('Erro ao conectar ao Arduino:', error);
    }
  }
}
