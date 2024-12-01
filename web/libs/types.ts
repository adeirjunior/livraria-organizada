export interface Nav {
  name: string;
  url: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  avaliable: boolean;
}

export interface TableData {
  content: Book[] | User[] | Registry[];
  cols: string[];
}

export interface Registry {
  id: string;
  userId: string;
  books: Book[]
}