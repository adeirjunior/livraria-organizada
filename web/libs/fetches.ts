import { getRandomString, isBook, isBookArray, isUser, isUserArray } from "./utils.ts";

const BACKEND_URL = "http://localhost:3000";

export async function fetchUsers() {
  const response = await fetch(`${BACKEND_URL}/user`);
  const data = await response.json();
  if (isUserArray(data)) {
    return data;
  } else {
    throw new Error("Não esta sendo retornada uma array de usuários");
  }
}

export async function fetchUser(id: string) {
  const response = await fetch(`${BACKEND_URL}/user/${id}`);
  const data = await response.json();
  if (isUser(data)) {
    return data;
  } else {
    throw new Error("Não esta sendo retornado um usuário");
  }
}

export async function deleteUser(id: string) {
  const response = await fetch(`${BACKEND_URL}/user/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Erro ao deletar o usuario: ${response.statusText}`);
  }

  const data = await response.json();

  if (isUser(data)) {
    return data;
  } else if (data?.message) {
    return { success: true, message: data.message };
  } else {
    throw new Error("Resposta inesperada da API.");
  }
}

export async function createUser(user: { name: string; email: string }) {
  const nfcCode = getRandomString(50);

  const response = await fetch(`${BACKEND_URL}/user`, {
    method: "POST",
    body: JSON.stringify({...user, nfcCode}),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (isUser(data)) {
    return data;
  } else {
    throw new Error("Não esta sendo retornado um usuário");
  }
}

export async function fetchBooks() {
  const response = await fetch(`${BACKEND_URL}/book`);
  const data = await response.json();
  if (isBookArray(data)) {
    return data;
  } else {
    throw new Error("Não esta sendo retornada uma array de livros");
  }
}

export async function fetchBook(id: string) {
  const response = await fetch(`${BACKEND_URL}/book/${id}`);
  const data = await response.json();
  if (isBook(data)) {
    return data;
  } else {
    throw new Error("Não esta sendo retornado um livro");
  }
}

export async function deleteBook(id: string) {
    const response = await fetch(`${BACKEND_URL}/book/${id}`, {
      method: "DELETE",
    });
  
    if (!response.ok) {
      throw new Error(`Erro ao deletar o livro: ${response.statusText}`);
    }
  
    const data = await response.json();
  
    if (isBook(data)) {
      return data;
    } else if (data?.message) {
      return { success: true, message: data.message };
    } else {
      throw new Error("Resposta inesperada da API.");
    }
  }

export async function createBook(
  book: { title: string; author: string; avaliable: null | "on" | boolean },
) {
  const { avaliable } = book;
  book.avaliable = avaliable === "on" ? true : false;
  const nfcCode = getRandomString(50)

  console.log(nfcCode)

  const response = await fetch(`${BACKEND_URL}/book`, {
    method: "POST",
    body: JSON.stringify({...book, nfcCode}),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (isBook(data)) {
    return data;
  } else {
    throw new Error("Não esta sendo retornado um livro");
  }
}

export async function fetchRegistries() {
  const response = await fetch(`${BACKEND_URL}/registry`);
  const data = await response.json();
  return data;
}

export async function fetchRegistry(id: string) {
  const response = await fetch(`${BACKEND_URL}/registry/${id}`);
  const data = await response.json();
  return data;
}

export async function deleteRegistry(id: string) {
  const response = await fetch(`${BACKEND_URL}/registry/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Erro ao deletar o registro: ${response.statusText}`);
  }

  const data = await response.json();

    return data;
}

export async function createRegistry(registry: { userId: string }) {
  const response = await fetch(`${BACKEND_URL}/registry`, {
    method: "POST",
    body: JSON.stringify(registry),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
