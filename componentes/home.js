import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Home() {
    return(
        <SafeAreaView style={estilo.conteiner}>
            <View style={estilo.decorando}>
                <Text style={estilo.titulo}>Mundo do Programdor</Text>
                <Text>Dicas para o Mercado de Trabalho</Text>
            </View>

            <View>
                <TouchableOpacity style={estilo.botao}>
                    <Text style={estilo.texto}>Dica 1 - Invista em formação acadêmica de qualidade</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilo.botao}>
                    <Text style={estilo.texto}>Dica 2 - Tenha foco</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#B6D6D9',
        justifyContent: 'center',
    },

    texto: {
        color: '#fff',
        fontWeight: 'bold',
    },

    botao: {
        backgroundColor: '#000',
        borderRadius: 7,
        padding: 10,
        margin: 10,
    },

    titulo: {
        fontSize: 35,
    },
    
    decorando: {
        borderWidth: 2,
        alignItems: 'center',
        padding: 10,
        marginBottom: 50,
        backgroundColor: '#fff',
    }
});