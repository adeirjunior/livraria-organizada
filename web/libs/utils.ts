import { Book, User } from "./types.ts";

// deno-lint-ignore no-explicit-any
export function isUser(data: any): data is User {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.id === "string" &&
    typeof data.name === "string" &&
    typeof data.email === "string"
  );
}

// deno-lint-ignore no-explicit-any
export function isUserArray(data: any): data is User[] {
  return Array.isArray(data) && data.every(isUser);
}

// deno-lint-ignore no-explicit-any
export function isBook(data: any): data is Book {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.id === "string" &&
    typeof data.title === "string" &&
    typeof data.author === "string" &&
    typeof data.avaliable === "boolean"
  );
}

// deno-lint-ignore no-explicit-any
export function isBookArray(data: any): data is Book[] {
  return Array.isArray(data) && data.every(isBook);
}

export function getRandomString(s: number) {
  if (s % 2 == 1) {
    throw new Deno.errors.InvalidData("Only even sizes are supported");
  }
  const buf = new Uint8Array(s / 2);
  crypto.getRandomValues(buf);
  let ret = "";
  for (let i = 0; i < buf.length; ++i) {
    ret += ("0" + buf[i].toString(16)).slice(-2);
  }
  return ret;
}