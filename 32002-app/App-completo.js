import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={estilos.areaSegura}>
                <StatusBar barStyle="dark-content" backgroundColor="#F4F6F9" />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={estilos.conteudoRolagem}>

                    {/* Seção de Cabeçalho */}
                    <View style={estilos.cabecalho}>
                        <View>
                            <Text style={estilos.saudacao}>Olá, Natasha!</Text>
                            <Text style={estilos.subtitulo}>Encontre lugares incríveis hoje (ou não)</Text>
                        </View>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?img=47' }}
                            style={estilos.imagemPerfil}
                        />
                    </View>

                    {/* Barra de Pesquisa */}
                    <View style={estilos.barraPesquisa}>
                        <Text style={estilos.textoPesquisa}>Pesquisar destinos...</Text>
                    </View>

                    {/* Seção de Categorias */}
                    <View style={estilos.cabecalhoSecao}>
                        <Text style={estilos.tituloSecao}>Categorias</Text>
                        <TouchableOpacity>
                            <Text style={estilos.textoVerTodas}>Ver todas</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={estilos.recipienteCategorias}>
                        {['Montanhas', 'Praias', 'Cidades', 'Florestas'].map((categoria, indice) => (
                            <TouchableOpacity key={indice} style={[estilos.cartaoCategoria, indice === 0 && estilos.cartaoCategoriaAtivo]}>
                                <Text style={[estilos.textoCategoria, indice === 0 && estilos.textoCategoriaAtivo]}>{categoria}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* Destinos Recomendados */}
                    <Text style={estilos.tituloSecaoRecomendados}>Recomendados</Text>

                    <View style={estilos.cartao}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=600&auto=format&fit=crop' }}
                            style={estilos.imagemCartao}
                        />
                        <View style={estilos.conteudoCartao}>
                            <View style={estilos.cabecalhoCartao}>
                                <Text style={estilos.tituloCartao}>Montanhas Rochosas</Text>
                                <View style={estilos.emblemaAvaliacao}>
                                    <Text style={estilos.textoAvaliacao}>★ 4.9</Text>
                                </View>
                            </View>
                            <Text style={estilos.localizacaoCartao}>Alberta, Canadá</Text>
                            <View style={estilos.rodapeCartao}>
                                <Text style={estilos.precoCartao}><Text style={estilos.valorPrecoCartao}>$120</Text> / noite</Text>
                                <TouchableOpacity style={estilos.botaoReservar}>
                                    <Text style={estilos.textoBotaoReservar}>Reservar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={estilos.cartao}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=600&auto=format&fit=crop' }}
                            style={estilos.imagemCartao}
                        />
                        <View style={estilos.conteudoCartao}>
                            <View style={estilos.cabecalhoCartao}>
                                <Text style={estilos.tituloCartao}>Praia do Rosa</Text>
                                <View style={estilos.emblemaAvaliacao}>
                                    <Text style={estilos.textoAvaliacao}>★ 4.7</Text>
                                </View>
                            </View>
                            <Text style={estilos.localizacaoCartao}>Santa Catarina, Brasil</Text>
                            <View style={estilos.rodapeCartao}>
                                <Text style={estilos.precoCartao}><Text style={estilos.valorPrecoCartao}>$85</Text> / noite</Text>
                                <TouchableOpacity style={estilos.botaoReservar}>
                                    <Text style={estilos.textoBotaoReservar}>Reservar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const estilos = StyleSheet.create({
    areaSegura: {
        flex: 1,
        backgroundColor: '#F4F6F9', // Cor de fundo suave
    },
    conteudoRolagem: {
        padding: 20,
        paddingBottom: 40,
    },
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        marginTop: Platform.OS === 'android' ? 20 : 0,
    },
    saudacao: {
        fontSize: 28,
        fontWeight: '800',
        color: '#1A202C',
        letterSpacing: -0.5,
    },
    subtitulo: {
        fontSize: 14,
        color: '#718096',
        marginTop: 4,
        fontWeight: '500',
    },
    imagemPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    barraPesquisa: {
        backgroundColor: '#FFFFFF',
        height: 54,
        borderRadius: 16,
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginBottom: 24,
        // Sombra suave para a barra de pesquisa
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    textoPesquisa: {
        color: '#A0AEC0',
        fontSize: 15,
    },
    cabecalhoSecao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    tituloSecao: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1A202C',
    },
    textoVerTodas: {
        color: '#3182CE',
        fontSize: 14,
        fontWeight: '600',
    },
    recipienteCategorias: {
        marginBottom: 8,
    },
    cartaoCategoria: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        height: 40,
        justifyContent: 'center',
    },
    cartaoCategoriaAtivo: {
        backgroundColor: '#3182CE',
        borderColor: '#3182CE',
    },
    textoCategoria: {
        color: '#4A5568',
        fontWeight: '600',
        fontSize: 14,
    },
    textoCategoriaAtivo: {
        color: '#FFFFFF',
    },
    cartao: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        marginBottom: 20,
        overflow: 'hidden',
        // Sombra para os cartões
        shadowColor: '#1A202C',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.08,
        shadowRadius: 15,
        elevation: 5,
    },
    imagemCartao: {
        width: '100%',
        height: 200,
    },
    conteudoCartao: {
        padding: 20,
    },
    cabecalhoCartao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    tituloCartao: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2D3748',
        flex: 1,
    },
    emblemaAvaliacao: {
        backgroundColor: '#FEF3C7',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    textoAvaliacao: {
        color: '#D97706',
        fontWeight: 'bold',
        fontSize: 12,
    },
    localizacaoCartao: {
        color: '#718096',
        fontSize: 14,
        marginBottom: 16,
    },
    rodapeCartao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#edf2f7',
        paddingTop: 16,
    },
    precoCartao: {
        color: '#718096',
        fontSize: 14,
    },
    valorPrecoCartao: {
        color: '#2D3748',
        fontSize: 20,
        fontWeight: '800',
    },
    botaoReservar: {
        backgroundColor: '#1A202C',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
    },
    textoBotaoReservar: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
    },
    tituloSecaoRecomendados: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1A202C',
        marginTop: 24,
        marginBottom: 12,
    }
});
