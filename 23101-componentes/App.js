import { View, Text, Image, Pressable, StyleSheet, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.viewPrincipal}>
      <Image
        style={styles.imagemMenor}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />
      <Image
        style={styles.imagemGrande}
        source={require('./batata.png')}
      />
      <Text>Batata</Text>
      <Text>Batata</Text>
      <Pressable style={styles.corFundo}>
        <Text>I'm pressable!</Text>
      </Pressable>

      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="text"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  corFundo: {
    backgroundColor: 'rgb(0, 115, 255)'
  },
  imagemGrande: {
    width: 200,
    height: 200
  },
  imagemMenor: {
    width: 37,
    height: 34
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
