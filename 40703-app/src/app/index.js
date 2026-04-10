import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import { Link, Stack } from 'expo-router';


export default function App() {
  return (
    <View>
      <Link href="/batata">
        Ir para Batata
      </Link>
    </View>
  );
}

// ===========================================================================
// Estilos
// ===========================================================================

// Paleta de cores — mude aqui para alterar o tema do app inteiro
const CORES = {
  fundo: "#0f0f1a",
  superficie: "#1a1a2e",
  card: "#16213e",
  destaque: "#e94560",
  textoClaro: "#ffffff",
  textoSecundario: "#aaaacc",
  borda: "#2a2a4a",
};

const estilos = StyleSheet.create({

  // Tela inteira
  telaSegura: {
    flex: 1,
    backgroundColor: CORES.fundo,
  },

  // ---------- Barra Superior ----------
  barraSuperior: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: CORES.superficie,
    borderBottomWidth: 1,
    borderBottomColor: CORES.borda,
    gap: 12,
  },
  botaoHamburguer: {
    justifyContent: "center",
    gap: 5,
    padding: 4,
  },
  linhaHamburguer: {
    width: 22,
    height: 2,
    backgroundColor: CORES.textoClaro,
    borderRadius: 2,
  },
  campoBusca: {
    flex: 1,
    height: 40,
    backgroundColor: CORES.card,
    borderRadius: 20,
    paddingHorizontal: 16,
    color: CORES.textoClaro,
    fontSize: 14,
    borderWidth: 1,
    borderColor: CORES.borda,
  },
  avatarPerfil: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 2,
    borderColor: CORES.destaque,
  },

  // ---------- Título "Meus Jogos" ----------
  tituloSecao: {
    fontSize: 18,
    fontWeight: "700",
    color: CORES.textoClaro,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },

  // ---------- ScrollView dos Cards ----------
  scrollCards: {
    flex: 1,
  },
  scrollCardsConteudo: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },

  // ---------- Cards ----------
  card: {
    backgroundColor: CORES.card,
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: CORES.borda,
    elevation: 4,
  },
  imagemCard: {
    width: "100%",
    height: 160,
  },
  conteudoCard: {
    padding: 14,
    gap: 6,
  },
  tituloCard: {
    fontSize: 16,
    fontWeight: "700",
    color: CORES.textoClaro,
  },
  descricaoCard: {
    fontSize: 13,
    color: CORES.textoSecundario,
    lineHeight: 20,
  },

  // ---------- Jogadores Populares ----------
  secaoJogadores: {
    backgroundColor: CORES.superficie,
    borderTopWidth: 1,
    borderTopColor: CORES.borda,
    paddingBottom: 16,
  },
  tituloJogadores: {
    fontSize: 18,
    fontWeight: "700",
    color: CORES.textoClaro,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  scrollJogadoresConteudo: {
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemJogador: {
    alignItems: "center",
  },
  avatarJogador: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: CORES.destaque,
  },
  nomeJogador: {
    marginTop: 6,
    fontSize: 12,
    color: CORES.textoSecundario,
    fontWeight: "600",
  },
});
