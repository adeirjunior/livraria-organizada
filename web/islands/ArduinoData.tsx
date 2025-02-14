import { useEffect, useState } from "preact/hooks";

export default function ArduinoData() {
  const [data, setData] = useState("Aguardando dados...");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onmessage = (event) => {
      console.log("Recebido do WebSocket:", event.data);
      setData(event.data);
    };

    socket.onopen = () => console.log("✅ Conectado ao WebSocket!");
    socket.onclose = () => console.log("❌ Conexão encerrada!");
    socket.onerror = (error) => console.error("Erro no WebSocket:", error);

    return () => socket.close(); // Fecha a conexão ao sair
  }, []);

  return (
    <div>
      <h1>Leitura NFC</h1>
      <p>{data}</p>
    </div>
  );
}
