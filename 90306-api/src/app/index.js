import { useEffect, useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { atualizarJogo, criarJogo, excluirJogo, listarJogos } from '../services/jogos';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const [loja, setLoja] = useState('');
  const [jogos, setJogos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [carregando, setCarregando] = useState(false);

  async function carregarJogos() {
    try {
      const dados = await listarJogos();
      setJogos(dados);
    } catch {
      Alert.alert('Erro', 'Não foi possível conectar à API. Verifique se ela está rodando.');
    }
  }

  useEffect(() => {
    carregarJogos();
  }, []);

  async function salvar() {
    if (!nome.trim()) {
      Alert.alert('Atenção', 'O nome é obrigatório.');
      return;
    }

    setCarregando(true);
    try {
      if (editandoId !== null) {
        await atualizarJogo(editandoId, nome.trim(), urlImagem.trim(), loja.trim());
      } else {
        await criarJogo(nome.trim(), urlImagem.trim(), loja.trim());
      }
      limparFormulario();
      await carregarJogos();
    } catch {
      Alert.alert('Erro', 'Não foi possível salvar o jogo.');
    } finally {
      setCarregando(false);
    }
  }

  function editar(jogo) {
    setEditandoId(jogo.id);
    setNome(jogo.nome);
    setUrlImagem(jogo.urlImagem);
    setLoja(jogo.loja);
  }

  function limparFormulario() {
    setEditandoId(null);
    setNome('');
    setUrlImagem('');
    setLoja('');
  }

  function excluir(id, nomeJogo) {
    Alert.alert('Excluir', `Remover "${nomeJogo}"?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            await excluirJogo(id);
            if (editandoId === id) limparFormulario();
            await carregarJogos();
          } catch {
            Alert.alert('Erro', 'Não foi possível excluir o jogo.');
          }
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Jogos' }} />

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: The Last of Us"
        placeholderTextColor="#6c7086"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>URL da Imagem</Text>
      <TextInput
        style={styles.input}
        placeholder="https://..."
        placeholderTextColor="#6c7086"
        value={urlImagem}
        onChangeText={setUrlImagem}
        autoCapitalize="none"
        keyboardType="url"
      />

      <Text style={styles.label}>Loja</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Steam, PlayStation Store"
        placeholderTextColor="#6c7086"
        value={loja}
        onChangeText={setLoja}
      />

      <Pressable style={styles.botao} onPress={salvar} disabled={carregando}>
        <Text style={styles.botaoTexto}>
          {carregando ? 'Salvando...' : editandoId !== null ? 'Salvar alterações' : 'Salvar'}
        </Text>
      </Pressable>

      {editandoId !== null && (
        <Pressable style={styles.botaoCancelar} onPress={limparFormulario}>
          <Text style={styles.botaoCancelarTexto}>Cancelar edição</Text>
        </Pressable>
      )}

      {editandoId === null && (
        <Link href="/carrossel" asChild>
          <Pressable style={styles.botaoSecundario}>
            <Text style={styles.botaoSecundarioTexto}>Ver carrossel</Text>
          </Pressable>
        </Link>
      )}

      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.urlImagem ? (
              <Image source={{ uri: item.urlImagem }} style={styles.imagem} resizeMode="cover" />
            ) : (
              <View style={[styles.imagem, styles.imagemVazia]} />
            )}
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.loja}>{item.loja}</Text>
            </View>
            <View style={styles.acoes}>
              <Pressable onPress={() => editar(item)}>
                <Text style={styles.editar}>Editar</Text>
              </Pressable>
              <Pressable onPress={() => excluir(item.id, item.nome)}>
                <Text style={styles.excluirTexto}>Excluir</Text>
              </Pressable>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum jogo cadastrado ainda.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1e1e2e',
  },
  label: {
    fontSize: 14,
    color: '#6c7086',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#313244',
    color: '#cdd6f4',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#45475a',
  },
  botao: {
    backgroundColor: '#89b4fa',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  botaoTexto: {
    color: '#1e1e2e',
    fontSize: 16,
    fontWeight: '700',
  },
  botaoCancelar: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#f9e2af',
  },
  botaoCancelarTexto: {
    color: '#f9e2af',
    fontSize: 16,
    fontWeight: '700',
  },
  botaoSecundario: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#89b4fa',
  },
  botaoSecundarioTexto: {
    color: '#89b4fa',
    fontSize: 16,
    fontWeight: '700',
  },
  lista: {
    paddingTop: 16,
  },
  card: {
    backgroundColor: '#313244',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#45475a',
    gap: 12,
  },
  imagem: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  imagemVazia: {
    backgroundColor: '#45475a',
  },
  info: {
    flex: 1,
  },
  acoes: {
    alignItems: 'flex-end',
    gap: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#cdd6f4',
    marginBottom: 4,
  },
  loja: {
    fontSize: 14,
    color: '#a6adc8',
  },
  editar: {
    color: '#89b4fa',
    fontWeight: '700',
    fontSize: 14,
  },
  excluirTexto: {
    color: '#f38ba8',
    fontWeight: '700',
    fontSize: 14,
  },
  vazio: {
    color: '#6c7086',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
});
