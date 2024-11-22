import PouchDB from 'pouchdb'
import {z} from 'zod';

export const pouchDB = new PouchDB('livraria-organizada')

export const baseSchema = z.object({
    _id: z.string(),
    _rev: z.string().optional()
})