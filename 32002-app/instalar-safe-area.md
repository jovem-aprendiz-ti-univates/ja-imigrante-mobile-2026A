# Como instalar e usar o `react-native-safe-area-context`

O pacote `react-native-safe-area-context` é a forma recomendada de lidar com as margens seguras (safe areas) em dispositivos móveis, como o notch do iPhone e os cantos arredondados, garantindo que o conteúdo não seja cortado.

https://docs.expo.dev/versions/latest/sdk/safe-area-context/

## Instalação

A melhor forma de instalar pacotes de código nativo é usando o comando `expo install`. Isso garante que as versões instaladas sejam compatíveis com a versão do Expo SDK que o projeto utiliza.

Abra o terminal na pasta do projeto e execute o seguinte comando:

```bash
npx expo install react-native-safe-area-context
```

## Como utilizar

Para usar a biblioteca corretamente, é preciso envelopar a raiz do aplicativo com o componente `<SafeAreaProvider>` e então utilizar o `<SafeAreaView>` fornecido por ela nas telas.

### Exemplo Básico:

```javascript
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
          <Text>Conteúdo seguro</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
```
