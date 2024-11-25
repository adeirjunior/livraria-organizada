import { baseSchema, pouchDB } from "../db.ts";
import { z } from "zod";
import { Collection } from "@strangebytes/pouchdb-orm";

export const usuarioSchema = baseSchema.extend({
    nome: z.string(),
    email: z.string().email(),
});

export type Usuario = z.infer<typeof usuarioSchema>;

export const usuarioCollection = new Collection(
    pouchDB,
    "livraria-organizada",
    usuarioSchema,
);
