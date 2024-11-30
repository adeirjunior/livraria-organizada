import { isBookArray, isUser, isUserArray } from "./utils.ts";

const BACKEND_URL = "http://localhost:3000"

export async function fetchUsers() {
    const response = await fetch(`${BACKEND_URL}/user`);
    const data = await response.json();
    if (isUserArray(data)) {
        return data
    } else {
        throw new Error("Não esta sendo retornada uma array de usuários")
    }
}

export async function fetchUser(id: string) {
    const response = await fetch(`${BACKEND_URL}/user/${id}`);
    const data = await response.json();
    if (isUser(data)) {
        return data
    } else {
        throw new Error("Não esta sendo retornado um usuário")
    }
}

export async function fetchBooks() {
    const response = await fetch(`${BACKEND_URL}/book`);
    const data = await response.json();
    if (isBookArray(data)) {
        return data
    } else {
        throw new Error("Não esta sendo retornada uma array de livros")
    }
}