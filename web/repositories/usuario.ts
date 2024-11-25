interface LivroData {
    _id: string;
    titulo: string;
    autor: string;
    disponivel: boolean;
  }

   export class Usuario {
    private livros: LivroData[] = [];

    find(id: string): LivroData | undefined {
      return this.livros.find(livro => livro._id === id);
    }

    findAll(): LivroData[] {
      return this.livros;
    }

    delete(id: string): boolean {
      const index = this.livros.findIndex(livro => livro._id === id);
      if (index !== -1) {
        this.livros.splice(index, 1);
        return true;
      }
      return false;
    }

    update(id: string, newData: Partial<LivroData>): LivroData | undefined {
      const livro = this.find(id);
      if (livro) {
        Object.assign(livro, newData);
        return livro;
      }
      return undefined;
    }

    create(livroData: LivroData): LivroData {
      this.livros.push(livroData);
      return livroData;
    }
  }
