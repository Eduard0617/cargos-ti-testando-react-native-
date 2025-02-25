import { SafeAreaView, View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';

export default function dica2() {
    return(
        <SafeAreaView>
            <ScrollView style={estilo.container}>
            <View>
                <Text style={estilo.dica}>Dica2</Text>
                <Text style={estilo.titulo}>Tenha Foco</Text>
                <Text style={estilo.conteudo}>Ter foco na área da programação é essencial para o 
                    desenvolvimento de habilidades sólidas e para o sucesso profissional. A 
                    programação exige atenção aos detalhes, lógica estruturada e capacidade de 
                    resolver problemas de maneira eficiente. Ao focar em aprender e aprimorar 
                    suas habilidades em linguagens de programação específicas, o profissional se 
                    torna mais competente e capaz de enfrentar desafios complexos, entregando 
                    soluções de qualidade. A prática constante e a busca por aprofundamento em 
                    novas técnicas são cruciais, pois o campo da programação está sempre evoluindo 
                    com novas ferramentas, frameworks e metodologias. Além disso, o foco ajuda a 
                    criar uma trajetória clara, permitindo que o programador escolha uma 
                    especialização e se torne um especialista em um nicho, como desenvolvimento 
                    web, aplicativos móveis, inteligência artificial ou segurança cibernética, 
                    aumentando suas chances de se destacar no mercado.
                </Text>

                <Image resizeMode='contain' style={estilo.img} source={require('../assets/dica2.jpg')}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    container: {
        ImageBackground: '#f6f6',
        margin: 15,
        marginTop: 30,
    },

    dica: {
        fontSize: 30,
    },

    titulo: {
        fontSize: 25,
        textDecorationLine: 'underline',
        fontWeight: '900',
    },

    conteudo: {
        marginTop: 20,
        fontSize:15,
    },

    img: {
        width: 350,
        height: 280
    },
});