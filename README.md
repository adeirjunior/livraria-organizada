# Livraria Organizada

## Sistema de Gerenciamento de Empréstimos de Livros com RFID e NFC

Este projeto é um sistema moderno para gerenciar empréstimos de livros em uma biblioteca, utilizando **Fresh.js**, **TypeScript**, **Tailwind CSS**, **PouchDB** e integração com **Arduino**. A interação com o sistema é feita através de cartões **NFC** para identificar usuários e etiquetas **RFID** para identificar livros.

## 🚀 Funcionalidades

- **Gerenciamento de livros:**
  - Cadastro, listagem, edição e exclusão.
  - Controle de disponibilidade.
- **Empréstimos e devoluções:**
  - Registro de entrada e saída com identificação do usuário via **NFC**.
  - Histórico detalhado das movimentações (livros, usuários e datas).
- **Login via cartão NFC:**
  - Cada usuário possui um cartão NFC para autenticação no sistema.
- **Offline First:**
  - Funcionalidade offline com sincronização automática via **PouchDB**.
- **Interface moderna:**
  - Visual amigável e responsivo com **Tailwind CSS**.

---

## 🛠️ Tecnologias Utilizadas

### **Plataforma**

- **Fresh.js**: Framework moderno para aplicações web usando **Deno**.
- **TypeScript**: Garantia de segurança e tipagem no código.
- **Tailwind CSS**: Para estilização rápida e responsiva.

### **Banco de Dados**

- **PouchDB**: Banco de dados local com suporte para sincronização remota.

### **Hardware**

- **Arduino**: Leitura de etiquetas **RFID** e cartões **NFC**.
- **Módulo NFC/RFID**: Para captura dos IDs dos livros e usuários.

---

## ⚙️ Fluxo do Sistema

1. **Login com Cartão NFC**:
   - O usuário autentica no sistema ao passar o cartão NFC.
   - O sistema verifica se o ID do cartão está cadastrado e registra a sessão do usuário.

2. **Registro de Empréstimos ou Devoluções**:
   - O livro é identificado ao escanear a etiqueta RFID.
   - O sistema registra automaticamente:
     - **Tipo de movimentação** (empréstimo ou devolução).
     - **Usuário autenticado**.
     - **Data e hora da movimentação**.

3. **Interface Responsiva**:
   - Acompanhamento em tempo real de livros disponíveis e histórico de movimentações.

---

## 🛠️ Instalação e Configuração

### Pré-requisitos

- **Deno** (v1.35+)
- **Arduino** com suporte a RFID e NFC
- **Módulo RFID/NFC** (ex.: RC522)
- **Git** para clonar o repositório

### Passos para Instalar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/sistema-biblioteca.git
   cd sistema-biblioteca
   ```

2. Instale as dependências:

   ```bash
   deno task update
   ```

3. Configure o banco de dados local:
   - O banco **PouchDB** será automaticamente inicializado ao iniciar o servidor.

4. Inicie o servidor:

   ```bash
   deno task start
   ```

   Acesse [http://localhost:8000](http://localhost:8000).

5. Configure o Arduino para enviar dados para a aplicação.

---

## 📦 Endpoints da API

### **Autenticação**

- **`POST /api/auth/login`**  
  Registra o login do usuário autenticado com o cartão NFC.  
  Corpo da requisição:

  ```json
  {
    "userId": "abc123"
  }
  ```

### **Livros**

- **`GET /api/livros`**  
  Retorna a lista de livros cadastrados.

- **`POST /api/livros`**  
  Adiciona um novo livro:  

  ```json
  {
    "titulo": "Dom Quixote",
    "autor": "Miguel de Cervantes",
    "ano": 1605
  }
  ```

### **Registros**

- **`POST /api/registros`**  
  Registra uma movimentação de livro:  

  ```json
  {
    "livroId": "livro123",
    "userId": "user123",
    "tipo": "emprestimo"
  }
  ```

---

## 🔌 Integração com RFID e NFC

1. **Configuração do Arduino**:
   - Utilize o módulo RC522 para leitura de RFID e NFC.
   - Faça upload do código localizado em `arduino/leitor_rfid.ino`.

2. **Fluxo de Dados**:
   - O Arduino lê os códigos das etiquetas RFID dos livros e os IDs NFC dos usuários.
   - Os dados são enviados via **serial** ou **WiFi** para o sistema.
   - Exemplo de dado enviado:

     ```json
     {
       "livroId": "rfid123",
       "userId": "nfc456",
       "tipo": "devolucao"
     }
     ```

3. **Conexão**:
   - Certifique-se de que o Arduino está configurado para se comunicar com a API `/api/registros`.

---

## ✨ Próximos Passos

- **Notificações**: Alertas automáticos para devoluções atrasadas.
- **Relatórios Avançados**: Geração de estatísticas sobre empréstimos.
- **Suporte Multidispositivo**: Sincronização com dispositivos móveis.

---

Com este sistema, o gerenciamento de uma biblioteca se torna ágil, moderno e automatizado. Feedbacks e contribuições são bem-vindos! 😊
