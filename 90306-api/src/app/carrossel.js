import { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { listarJogos } from '../services/jogos';

const { width } = Dimensions.get('window');
const cardWidth = width - 128;

export default function CarrosselScreen() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    listarJogos().then(setJogos).catch(() => {});
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Carrossel' }} />

      <Text style={styles.titulo}>Jogos cadastrados</Text>

      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.lista}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            {item.urlImagem ? (
              <Image source={{ uri: item.urlImagem }} style={styles.imagem} resizeMode="cover" />
            ) : (
              <View style={[styles.imagem, styles.imagemVazia]} />
            )}
            <Text style={styles.numero}>#{index + 1}</Text>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.loja}>{item.loja}</Text>
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
    paddingVertical: 24,
    backgroundColor: '#1e1e2e',
  },
  titulo: {
    color: '#cdd6f4',
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  lista: {
    paddingHorizontal: 24,
  },
  card: {
    width: cardWidth,
    minHeight: 280,
    backgroundColor: '#313244',
    borderRadius: 10,
    padding: 24,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#45475a',
    justifyContent: 'center',
    gap: 12,
  },
  imagem: {
    width: '100%',
    height: 140,
    borderRadius: 8,
  },
  imagemVazia: {
    backgroundColor: '#45475a',
  },
  numero: {
    color: '#89b4fa',
    fontSize: 14,
    fontWeight: '700',
  },
  nome: {
    color: '#cdd6f4',
    fontSize: 22,
    fontWeight: '700',
  },
  loja: {
    color: '#a6adc8',
    fontSize: 16,
  },
  vazio: {
    color: '#6c7086',
    fontSize: 16,
    textAlign: 'center',
    width: cardWidth,
    marginTop: 80,
  },
});
