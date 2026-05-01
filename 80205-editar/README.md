# Documentação técnica

## Resumo das alterações

Foram adicionadas duas funcionalidades ao app:

- edição de alunos já cadastrados;
- uma segunda tela com os alunos exibidos em formato de carrossel horizontal.

Também foi feito um pequeno ajuste estrutural para reaproveitar código: as operações de banco relacionadas a alunos foram centralizadas em `src/data/alunos.js`. Com isso, as telas não precisam conhecer SQL diretamente.

## Estrutura envolvida

Arquivos principais:

- `src/data/db.js`: abre o banco SQLite e cria a tabela `alunos`.
- `src/data/alunos.js`: concentra as operações de listagem, criação, atualização e exclusão de alunos.
- `src/app/index.js`: tela principal com formulário, listagem, edição e exclusão.
- `src/app/carrossel.js`: tela de carrossel dos alunos cadastrados.

## Banco de dados

A tabela usada continua sendo `alunos`, criada em `src/data/db.js`:

```sql
CREATE TABLE IF NOT EXISTS alunos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(255) NOT NULL,
  curso TEXT NOT NULL
);
```

Não houve alteração no schema. A edição usa a chave primária `id` para localizar o registro que deve ser atualizado.

## Reaproveitamento de código

Antes, a tela principal e a tela de carrossel tinham lógica própria para inicializar o banco e buscar alunos. Essa lógica foi movida para `src/data/alunos.js`.

O novo módulo exporta quatro funções:

```js
export function listarAlunos() {
  return db.getAllSync('SELECT * FROM alunos ORDER BY id DESC');
}

export function criarAluno(nome, curso) {
  db.runSync('INSERT INTO alunos (nome, curso) VALUES (?, ?)', [nome, curso]);
}

export function atualizarAluno(id, nome, curso) {
  db.runSync('UPDATE alunos SET nome = ?, curso = ? WHERE id = ?', [nome, curso, id]);
}

export function excluirAluno(id) {
  db.runSync('DELETE FROM alunos WHERE id = ?', [id]);
}
```

Vantagem prática: se a consulta ou a tabela mudar depois, a alteração fica concentrada nesse arquivo, em vez de ser repetida em cada tela.

## Edição de alunos

A edição foi implementada em `src/app/index.js`.

A tela usa o estado `editandoId` para saber se o formulário está criando um aluno novo ou editando um aluno existente:

```js
const [editandoId, setEditandoId] = useState(null);
```

O comportamento é:

- `editandoId === null`: o botão salva um novo aluno com `criarAluno`.
- `editandoId !== null`: o botão atualiza o aluno selecionado com `atualizarAluno`.

Quando o usuário toca em `Editar`, os dados do aluno são copiados para o formulário:

```js
function editar(aluno) {
  setEditandoId(aluno.id);
  setNome(aluno.nome);
  setCurso(aluno.curso);
}
```

Ao salvar, a função decide qual operação executar:

```js
if (editandoId !== null) {
  atualizarAluno(editandoId, nome.trim(), curso.trim());
} else {
  criarAluno(nome.trim(), curso.trim());
}
```

Depois disso, o formulário é limpo e a lista é recarregada.

## Cancelamento da edição

Foi criada a função `limparFormulario` para voltar ao modo de cadastro:

```js
function limparFormulario() {
  setEditandoId(null);
  setNome('');
  setCurso('');
}
```

Ela é chamada depois de salvar, ao tocar em `Cancelar edição` e quando o aluno que estava sendo editado é excluído.

## Tela de carrossel

A tela `src/app/carrossel.js` foi criada como uma nova rota do `expo-router`.

Como o arquivo está dentro de `src/app`, a rota gerada é:

```txt
/carrossel
```

A tela principal navega para ela usando `Link`:

```js
<Link href="/carrossel" asChild>
  <Pressable style={styles.botaoSecundario}>
    <Text style={styles.botaoSecundarioTexto}>Ver carrossel</Text>
  </Pressable>
</Link>
```

## Funcionamento do carrossel

O carrossel busca os alunos com a função compartilhada `listarAlunos`:

```js
useEffect(() => {
  setAlunos(listarAlunos());
}, []);
```

A listagem horizontal foi feita com `FlatList`:

```js
<FlatList
  data={alunos}
  keyExtractor={(item) => item.id.toString()}
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
/>
```

Pontos principais:

- `horizontal` exibe os cards lado a lado.
- `pagingEnabled` faz a rolagem avançar por página.
- `showsHorizontalScrollIndicator={false}` remove a barra horizontal.

Cada card mostra a posição do item, o nome e o curso do aluno.

## Observação sobre validação

Não foi possível executar o app neste ambiente porque os comandos `node` e `npm` não estão disponíveis no PATH.

A revisão feita foi estática, conferindo imports, JSX, rotas do `expo-router` e o uso das funções SQLite.
