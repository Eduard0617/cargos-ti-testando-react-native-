import {ImageBackground} from 'react-native';
import { SafeAreaView, View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';

export default function dica1() {
    return(
        <SafeAreaView style={estilo.container}>
            <ScrollView>
            <View>
                <Text style={estilo.dica}>Dica 01</Text>
                <Text style={estilo.titulo}>Invista em formação acadêmica de qualidade</Text>
                <Text style={estilo.conteudo}>Investir em uma formação de qualidade na área de 
                    TI é fundamental para quem deseja se destacar em um mercado em constante 
                    evolução. A tecnologia é um dos setores mais dinâmicos e inovadores, e 
                    estar bem preparado garante não só o domínio das ferramentas mais 
                    modernas, mas também a capacidade de adaptar-se rapidamente às mudanças. 
                    Uma boa formação proporciona conhecimentos sólidos, desenvolve habilidades 
                    práticas e amplia as possibilidades de crescimento profissional, seja em 
                    grandes empresas ou em startups. Além disso, profissionais capacitados 
                    são mais valorizados, o que resulta em melhores oportunidades de carreira 
                    e maiores remunerações. Em um mundo cada vez mais digital, investir na 
                    educação em TI é, sem dúvida, um passo crucial para o sucesso.
                </Text>

                <Image resizeMode='contain' style={estilo.img} source={require('../assets/dica1.png')}/>
                
                <Text style={estilo.dica1}>
                    Dicas para uma formação de qualidade em TI:
                </Text>
                <Text style={estilo.dicasTexto}>
                    Escolha de um curso reconhecido: Procure por instituições que ofereçam 
                    programas acreditados, com bons professores e conteúdos atualizados.
                </Text>
                <Text style={estilo.dicasTexto}>
                    Prática constante: A TI é uma área de "aprender fazendo". Busque estágios, 
                    projetos pessoais ou contribua para projetos open-source.
                </Text>
                <Text style={estilo.dicasTexto}>
                    Especialização contínua: A tecnologia muda rapidamente. Invista em cursos 
                    e certificações adicionais para se manter atualizado.
                </Text>
                <Text style={estilo.dicasTexto}>
                    Networking: Participe de eventos e comunidades online de TI para trocar 
                    experiências e expandir suas oportunidades profissionais.
                </Text>
                <Text style={estilo.dicasTexto}>
                    Soft skills: Não se esqueça de desenvolver habilidades como comunicação, 
                    trabalho em equipe e pensamento crítico, que são essenciais no mercado de TI.
                </Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
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

    dica1: {
        fontWeight: 'bold',
        fontSize: 17,
    },

    dicasTexto: {
        padding: 5
    }
})