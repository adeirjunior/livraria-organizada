#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX para comunicar com o leitor RFID

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() {
  if (mySerial.available()) {
    String tag = mySerial.readString();
    // Enviar a requisição HTTP para registrar a entrada/saída do livro
    sendRequest(tag);
  }
}

void sendRequest(String tag) {
  String url = "http://seu-servidor/api/registros"; // URL da sua API
  String payload = "{\"livroId\": " + tag + ", \"tipo\": \"entrada\"}"; // Supondo que o tag seja o ID do livro
  
  Serial.println("Enviando requisição para registrar o livro...");
  // Código para enviar a requisição HTTP
}
