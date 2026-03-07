# Explicação do App.js — Aplicativo de Jogos

Este documento explica, parte por parte, tudo que foi feito no arquivo `App.js`.

---

## Visão geral da tela

A tela é dividida em **3 partes** que aparecem ao mesmo tempo:

```
┌─────────────────────────────────┐
│        SafeAreaView             │  flex: 1  (tela inteira)
│                                 │
│  ┌─────────────────────────┐    │
│  │     Barra Superior      │    │  sem flex  → altura fixa
│  └─────────────────────────┘    │
│                                 │
│  ┌─────────────────────────┐    │
│  │                         │    │
│  │    ScrollView Cards     │    │  flex: 1  → pega o espaço que sobrou
│  │      (rola vertical)    │    │
│  │                         │    │
│  └─────────────────────────┘    │
│                                 │
│  ┌─────────────────────────┐    │
│  │  Jogadores Populares    │    │  sem flex  → altura fixa
│  │    (rola horizontal)    │    │
│  └─────────────────────────┘    │
│                                 │
└─────────────────────────────────┘
```

**Por que funciona assim?**

- A `SafeAreaView` tem `flex: 1`, então ocupa a tela toda.
- A barra superior **não tem** `flex`, então ocupa só o tamanho do seu conteúdo.
- A seção de jogadores **não tem** `flex`, então também ocupa só o seu tamanho.
- A `ScrollView` dos cards tem `flex: 1`, então **pega todo o espaço que sobrou** entre as outras duas.

---

## Imports — O que estamos importando

```js
import {
  View,        // caixa retangular (tipo uma <div> da web)
  Text,        // texto na tela
  Image,       // exibir imagens
  Pressable,   // botão que pode ser pressionado
  StyleSheet,  // criar estilos organizados
  TextInput,   // campo de texto (input)
  ScrollView,  // área que permite rolagem
  StatusBar,   // barra de status do celular (hora, bateria, etc.)
} from "react-native";
```

- `View` é o componente mais básico. Tudo que é um "bloco" na tela é um `View`.
- `ScrollView` permite que o conteúdo role quando não cabe na tela.
- `Pressable` é como um botão, mas sem estilo visual — você monta o visual que quiser.

Também importamos:

```js
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
```

- `SafeAreaView` garante que o conteúdo não fique atrás do notch (franja) ou da barra de status do celular.

---

## PARTE 1 — Barra Superior

```
[ ☰ ]  [ 🔍 Buscar jogo...       ]  [ 👤 ]
```

### O que tem dentro:

1. **Botão hambúrguer** — três `View` com 2px de altura empilhadas, formando as 3 linhas do ícone ☰.
2. **Campo de busca** — um `TextInput` com `editable={false}` (desabilitado por enquanto).
3. **Foto de perfil** — um `Image` redondo com borda colorida.

### Como ficam lado a lado?

O estilo `barraSuperior` usa `flexDirection: "row"`. No React Native, o padrão é coluna (um embaixo do outro). Com `"row"`, os filhos ficam em **linha** (um do lado do outro).

O campo de busca tem `flex: 1`, então ele **estica** e pega todo o espaço entre o hambúrguer e a foto.

---

## PARTE 2 — Cards de Jogos (ScrollView vertical)

Cada card segue a mesma estrutura:

```
┌──────────────────────────┐
│                          │
│     Imagem do jogo       │  ← Image
│                          │
├──────────────────────────┤
│  Título do Jogo          │  ← Text (tituloCard)
│  Descrição lorem ipsum   │  ← Text (descricaoCard)
│  que pode ter duas...    │
└──────────────────────────┘
```

### Por que a imagem fica "colada" nas bordas do card?

O card tem `overflow: "hidden"` e `borderRadius: 16`. Isso faz com que tudo que ultrapasse os cantos arredondados seja **cortado**. A imagem preenche toda a largura (`width: "100%"`) e fica com cantos arredondados em cima automaticamente.

### Como funciona o scroll?

A `ScrollView` tem `flex: 1`, então ocupa o espaço entre o título "Meus Jogos" e a seção de jogadores. Se os 5 cards não cabem nesse espaço, o usuário rola para ver os que faltam. A barra superior e os jogadores **não se movem**.

---

## PARTE 3 — Jogadores Populares (ScrollView horizontal)

```
[ 👤 Lucas ]  [ 👤 Mariana ]  [ 👤 Pedro ]  [ 👤 Ana ] →→→
```

### Como funciona?

A `ScrollView` tem a propriedade `horizontal`, que troca a direção de rolagem para **lado a lado**. Quando os avatares não cabem na largura da tela, o usuário arrasta pro lado para ver os demais.

Cada jogador é um `View` com:
- Um `Image` redondo (avatar)
- Um `Text` com o nome

---

## Estilos — Como a parte visual funciona

### Paleta de cores

Todas as cores ficam no objeto `CORES`:

```js
const CORES = {
  fundo: "#0f0f1a",           // fundo escuro principal
  superficie: "#1a1a2e",      // fundo das seções (barra, jogadores)
  card: "#16213e",            // fundo dos cards
  destaque: "#e94560",        // vermelho/rosa (bordas, destaques)
  textoClaro: "#ffffff",      // texto branco
  textoSecundario: "#aaaacc", // texto cinza claro
  borda: "#2a2a4a",           // bordas sutis
};
```

Se quiser mudar o tema do app, basta alterar os valores aqui. Todos os estilos referenciam essas cores.

### Estilos mais importantes explicados

| Estilo | O que faz |
|---|---|
| `flex: 1` | O elemento **cresce** para preencher o espaço disponível |
| `flexDirection: "row"` | Os filhos ficam **lado a lado** (padrão é um embaixo do outro) |
| `gap: 12` | Espaço de 12px **entre** os filhos (sem precisar de margin) |
| `borderRadius: 20` | Arredonda os cantos (20 = bem arredondado, parece pílula) |
| `overflow: "hidden"` | Corta tudo que ultrapassar os limites do elemento |
| `elevation: 4` | Sombra no Android (quanto maior o número, mais sombra) |
| `alignItems: "center"` | Centraliza os filhos no eixo cruzado |

---
