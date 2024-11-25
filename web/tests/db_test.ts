import { livroCollection } from "../db/schemas/livro.ts";
import { usuarioCollection } from "../db/schemas/usuario.ts";
import { registroCollection } from "../db/schemas/registro.ts";
import { assert } from "@std/assert";

Deno.test("Teste de banco de dados", async (t) => {
  await t.step("criar livro", async () => {
    const livroId = crypto.randomUUID();
    const livroData = {
      _id: livroId,
      titulo: "Bom Livro",
      autor: "Bom Autor",
    };

    await livroCollection.put(livroData);

    const livro = await livroCollection.findById(livroId);
    assert(livro, "Livro não foi criado.");
    assert(livro.titulo === "Bom Livro", "Título do livro está incorreto.");
    assert(livro.autor === "Bom Autor", "Autor do livro está incorreto.");
  });

  await t.step("criar usuario", async () => {
    const usuarioId = crypto.randomUUID();
    const usuarioData = {
      _id: usuarioId,
      email: "hello@adeir.me",
      nome: "Adeir do Bom Fim Junior",
    };

    await usuarioCollection.put(usuarioData);

    const usuario = await usuarioCollection.findById(usuarioId);
    assert(usuario, "Usuário não foi criado.");
    assert(usuario.email === "hello@adeir.me", "Email do usuário está incorreto.");
    assert(usuario.nome === "Adeir do Bom Fim Junior", "Nome do usuário está incorreto.");
    
  });

  await t.step("criar registro", async () => {
    const livroId = crypto.randomUUID();
    const registroId = crypto.randomUUID();

    await livroCollection.put({
      _id: livroId,
      titulo: "Bom Livro",
      autor: "Bom Autor",
    });

    const registroData = {
      _id: registroId,
      livroId: livroId,
      tipo: "entrada" as const,
    };

    await registroCollection.put(registroData);

    const registro = await registroCollection.findById(registroId);
    assert(registro, "Registro não foi criado.");
    assert(registro.livroId === livroId, "Livro ID no registro está incorreto.");
    assert(registro.tipo === "entrada", "Tipo de registro está incorreto.");
  });
});
