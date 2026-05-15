const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'API de Jogos',
    version: '1.0.0',
    description: 'API para cadastro de jogos com nome, imagem e loja.',
  },
  servers: [{ url: 'http://localhost:3000' }],
  tags: [{ name: 'Jogos', description: 'Operações de cadastro de jogos' }],
  paths: {
    '/jogos': {
      get: {
        tags: ['Jogos'],
        summary: 'Lista todos os jogos',
        responses: {
          200: {
            description: 'Lista de jogos',
            content: {
              'application/json': {
                schema: { type: 'array', items: { $ref: '#/components/schemas/Jogo' } },
                example: [
                  { id: 1, nome: 'The Last of Us', urlImagem: 'https://exemplo.com/tlou.jpg', loja: 'PlayStation Store' },
                  { id: 2, nome: 'Minecraft', urlImagem: 'https://exemplo.com/mc.jpg', loja: 'PC' },
                ],
              },
            },
          },
        },
      },
      post: {
        tags: ['Jogos'],
        summary: 'Cadastra um novo jogo',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/JogoInput' },
              example: { nome: 'Elden Ring', urlImagem: 'https://exemplo.com/elden.jpg', loja: 'Steam' },
            },
          },
        },
        responses: {
          201: {
            description: 'Jogo criado com sucesso',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Jogo' },
              },
            },
          },
          400: {
            description: 'Campo nome ausente',
            content: {
              'application/json': {
                example: { erro: 'O campo nome é obrigatório.' },
              },
            },
          },
        },
      },
    },
    '/jogos/{id}': {
      put: {
        tags: ['Jogos'],
        summary: 'Atualiza um jogo existente',
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' }, example: 1 },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/JogoInput' },
              example: { nome: 'Elden Ring Editado', urlImagem: 'https://exemplo.com/elden2.jpg', loja: 'Steam' },
            },
          },
        },
        responses: {
          200: {
            description: 'Jogo atualizado',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/Jogo' } },
            },
          },
          400: {
            description: 'Campo nome ausente',
            content: {
              'application/json': { example: { erro: 'O campo nome é obrigatório.' } },
            },
          },
        },
      },
      delete: {
        tags: ['Jogos'],
        summary: 'Remove um jogo',
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' }, example: 1 },
        ],
        responses: {
          204: { description: 'Jogo removido com sucesso (sem conteúdo)' },
        },
      },
    },
  },
  components: {
    schemas: {
      Jogo: {
        type: 'object',
        properties: {
          id:        { type: 'integer', example: 1 },
          nome:      { type: 'string',  example: 'The Last of Us' },
          urlImagem: { type: 'string',  example: 'https://exemplo.com/tlou.jpg' },
          loja:      { type: 'string',  example: 'PlayStation Store' },
        },
      },
      JogoInput: {
        type: 'object',
        required: ['nome'],
        properties: {
          nome:      { type: 'string',  example: 'The Last of Us' },
          urlImagem: { type: 'string',  example: 'https://exemplo.com/tlou.jpg' },
          loja:      { type: 'string',  example: 'PlayStation Store' },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
