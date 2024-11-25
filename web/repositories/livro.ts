import { livroCollection, type Livro } from "../db/schemas/livro.ts";

   export class LivroRepository {

    async find(id: string): Promise<Livro> {
      return await livroCollection.findById(id)
    }

    async findAll(): Promise<Livro[]> {
      return await livroCollection.find()
    }

    async delete(id: string): Promise<void> {
      await livroCollection.removeById(id)
    }

    async update(id: string, newData: Partial<Livro>): Promise<Livro> {
      const existingLivro = await livroCollection.findById(id);
      if (!existingLivro) {
        throw new Error(`Livro com ID ${id} não encontrado.`);
      }
    
      const updatedLivro: Livro = {
        ...existingLivro,
        ...newData,
        _id: id,
      };
    
      return await livroCollection.update(updatedLivro);
    }
    

    async create(livroData: Livro): Promise<Livro> {
      return await livroCollection.put(livroData)
    }
  }
