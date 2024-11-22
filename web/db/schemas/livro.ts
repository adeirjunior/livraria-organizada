import { baseSchema, pouchDB } from "../db.ts";
import { z } from 'zod';
import { registroSchema } from "./registro.ts";
import {Collection} from '@strangebytes/pouchdb-orm'

export const livroSchema = baseSchema.extend({
  titulo: z.string(),
  autor: z.string(),
  disponivel: z.boolean().default(true),
  registros: z.array(registroSchema).optional()
});

export const livroCollection = new Collection(pouchDB, 'livraria-organizada', livroSchema)