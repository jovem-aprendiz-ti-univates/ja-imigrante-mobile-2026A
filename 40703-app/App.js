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
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f1a" />

      <SafeAreaView style={estilos.telaSegura}>

        {/* ============================================================
            PARTE 1 — Barra superior fixa
        ============================================================ */}
        <View style={estilos.barraSuperior}>
          {/* Botão hambúrguer: três linhas empilhadas */}
          <Pressable style={estilos.botaoHamburguer}>
            <View style={estilos.linhaHamburguer} />
            <View style={estilos.linhaHamburguer} />
            <View style={estilos.linhaHamburguer} />
          </Pressable>

          {/* Campo de busca — visual apenas */}
          <TextInput
            style={estilos.campoBusca}
            placeholder="Buscar jogo..."
            placeholderTextColor="#aaa"
            editable={false}
          />

          {/* Foto de perfil */}
          <Image
            style={estilos.avatarPerfil}
            source={{ uri: "https://i.pravatar.cc/80?img=68" }}
          />
        </View>


        {/* ============================================================
            PARTE 2 — Cards de jogos com scroll vertical
        ============================================================ */}
        <Text style={estilos.tituloSecao}>Meus Jogos</Text>

        <ScrollView
          style={estilos.scrollCards}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.scrollCardsConteudo}
        >
          {/* Card 1 */}
          <View style={estilos.card}>
            <Image
              style={estilos.imagemCard}
              source={{ uri: "https://picsum.photos/seed/witcher/600/300" }}
            />
            <View style={estilos.conteudoCard}>
              <Text style={estilos.tituloCard}>The Witcher 3</Text>
              <Text style={estilos.descricaoCard}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
          </View>

          {/* Card 2 */}
          <View style={estilos.card}>
            <Image
              style={estilos.imagemCard}
              source={{ uri: "https://picsum.photos/seed/elden/600/300" }}
            />
            <View style={estilos.conteudoCard}>
              <Text style={estilos.tituloCard}>Elden Ring</Text>
              <Text style={estilos.descricaoCard}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </View>
          </View>

          {/* Card 3 */}
          <View style={estilos.card}>
            <Image
              style={estilos.imagemCard}
              source={{ uri: "https://picsum.photos/seed/rdr2/600/300" }}
            />
            <View style={estilos.conteudoCard}>
              <Text style={estilos.tituloCard}>Red Dead Redemption 2</Text>
              <Text style={estilos.descricaoCard}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </Text>
            </View>
          </View>

          {/* Card 4 */}
          <View style={estilos.card}>
            <Image
              style={estilos.imagemCard}
              source={{ uri: "https://picsum.photos/seed/cyber/600/300" }}
            />
            <View style={estilos.conteudoCard}>
              <Text style={estilos.tituloCard}>Cyberpunk 2077</Text>
              <Text style={estilos.descricaoCard}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
          </View>

          {/* Card 5 */}
          <View style={estilos.card}>
            <Image
              style={estilos.imagemCard}
              source={{ uri: "https://picsum.photos/seed/gow/600/300" }}
            />
            <View style={estilos.conteudoCard}>
              <Text style={estilos.tituloCard}>God of War</Text>
              <Text style={estilos.descricaoCard}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam.
              </Text>
            </View>
          </View>
        </ScrollView>


        {/* ============================================================
            PARTE 3 — Jogadores populares com scroll horizontal
        ============================================================ */}
        <View style={estilos.secaoJogadores}>
          <Text style={estilos.tituloJogadores}>Jogadores Populares</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={estilos.scrollJogadoresConteudo}
          >
            {/* Jogador 1 */}
            <View style={estilos.itemJogador}>
              <Image
                style={estilos.avatarJogador}
                source={{ uri: "https://i.pravatar.cc/80?img=11" }}
              />
              <Text style={estilos.nomeJogador}>Lucas</Text>
            </View>

            {/* Jogador 2 */}
            <View style={estilos.itemJogador}>
              <Image
                style={estilos.avatarJogador}
                source={{ uri: "https://i.pravatar.cc/80?img=25" }}
              />
              <Text style={estilos.nomeJogador}>Mariana</Text>
            </View>

            {/* Jogador 3 */}
            <View style={estilos.itemJogador}>
              <Image
                style={estilos.avatarJogador}
                source={{ uri: "https://i.pravatar.cc/80?img=33" }}
              />
              <Text style={estilos.nomeJogador}>Pedro</Text>
            </View>

            {/* Jogador 4 */}
            <View style={estilos.itemJogador}>
              <Image
                style={estilos.avatarJogador}
                source={{ uri: "https://i.pravatar.cc/80?img=47" }}
              />
              <Text style={estilos.nomeJogador}>Ana</Text>
            </View>

            {/* Jogador 5 */}
            <View style={estilos.itemJogador}>
              <Image
                style={estilos.avatarJogador}
                source={{ uri: "https://i.pravatar.cc/80?img=52" }}
              />
              <Text style={estilos.nomeJogador}>Rafael</Text>
            </View>

            {/* Jogador 6 */}
            <View style={estilos.itemJogador}>
              <Image
                style={estilos.avatarJogador}
                source={{ uri: "https://i.pravatar.cc/80?img=60" }}
              />
              <Text style={estilos.nomeJogador}>Camila</Text>
            </View>
          </ScrollView>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
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
