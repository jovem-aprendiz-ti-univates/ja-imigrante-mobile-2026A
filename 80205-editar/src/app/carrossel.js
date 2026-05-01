import { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { listarAlunos } from '../data/alunos';

const { width } = Dimensions.get('window');
const cardWidth = width - 64;

export default function CarrosselScreen() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    setAlunos(listarAlunos());
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Carrossel' }} />

      <Text style={styles.titulo}>Itens cadastrados</Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.lista}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.numero}>#{index + 1}</Text>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.curso}>{item.curso}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum item cadastrado ainda.</Text>
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
    minHeight: 220,
    backgroundColor: '#313244',
    borderRadius: 10,
    padding: 24,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#45475a',
    justifyContent: 'center',
  },
  numero: {
    color: '#89b4fa',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 16,
  },
  nome: {
    color: '#cdd6f4',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  curso: {
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
