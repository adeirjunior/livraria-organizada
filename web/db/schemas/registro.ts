import { baseSchema, pouchDB } from "../db.ts";
import { z } from "zod";
import {Collection} from '@strangebytes/pouchdb-orm'

export const registroSchema = baseSchema.extend({
    livroId: z.string(),
    tipo: z.enum(["entrada", "saida"]),
    data: z.date().default(() => new Date()),
});

export type Registro = z.infer<typeof registroSchema>;

export const registroCollection = new Collection(pouchDB, 'livraria-organizada', registroSchema)