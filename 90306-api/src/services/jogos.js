// Para dispositivo físico: troque por http://SEU_IP:3000
// Para emulador Android: use http://10.0.2.2:3000
// Para emulador iOS / web: use http://localhost:3000
const BASE_URL = 'http://localhost:3000';

export async function listarJogos() {
  const response = await fetch(`${BASE_URL}/jogos`);
  return response.json();
}

export async function criarJogo(nome, urlImagem, loja) {
  const response = await fetch(`${BASE_URL}/jogos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, urlImagem, loja }),
  });
  return response.json();
}

export async function atualizarJogo(id, nome, urlImagem, loja) {
  const response = await fetch(`${BASE_URL}/jogos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, urlImagem, loja }),
  });
  return response.json();
}

export async function excluirJogo(id) {
  await fetch(`${BASE_URL}/jogos/${id}`, { method: 'DELETE' });
}
