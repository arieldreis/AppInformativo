import React from 'react';
import { ScrollView, Text, StyleSheet, Image, View } from 'react-native';
import { CartaoInfo } from './CartaoInfo';

export function TelaAmazonia() {
  return (
    <ScrollView style={estilos.fundo} contentContainerStyle={estilos.conteudo}>
      <Text style={estilos.aluno}>Ariel dos Reis Marinho</Text>
      <Text style={estilos.marca}>BIOMAS BRASILEIROS</Text>
      <Text style={estilos.titulo}>Amazônia</Text>
      <Text style={estilos.subtitulo}>Vida em uma floresta de águas e gigantes</Text>
      <Image
        source={require('../assets/amazonia.jpg')}
        style={estilos.imagem}
        resizeMode="cover"
        accessibilityLabel="Vista aérea dos rios e da floresta amazônica"
      />
      <View style={estilos.etiqueta}><Text style={estilos.etiquetaTexto}>01 / 03   -   FLORESTA TROPICAL</Text></View>
      <CartaoInfo titulo="Um mundo de água" texto="A Bacia Amazônica reúne milhares de rios. O rio Amazonas está entre os mais extensos e caudalosos do planeta, e suas cheias transformam a paisagem ao longo do ano." />
      <CartaoInfo titulo="Biodiversidade extraordinária" texto="A floresta abriga uma enorme variedade de plantas, aves, peixes, mamíferos, insetos e povos. Muitas espécies ainda são pouco conhecidas pela ciência." />
      <Text style={estilos.fonte}>Fonte de referência: IBGE — Biomas e Sistema Costeiro-Marinho do Brasil.</Text>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#f4f3e9' },
  conteudo: { padding: 20, paddingTop: 22, paddingBottom: 24 },
  aluno: { color: '#ffffff', backgroundColor: '#174e3c', overflow: 'hidden', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 11, fontSize: 18, fontWeight: '900', marginBottom: 20, letterSpacing: 0.3 },
  marca: { color: '#648071', fontSize: 11, fontWeight: '800', letterSpacing: 1.6 },
  titulo: { color: '#173e30', fontSize: 34, fontWeight: '900', marginTop: 7 },
  subtitulo: { color: '#617267', fontSize: 15, marginTop: 4, marginBottom: 16 },
  imagem: { width: '100%', height: 210, borderRadius: 20, backgroundColor: '#d8e7cc', borderWidth: 1, borderColor: '#d7e1d3' },
  etiqueta: { alignSelf: 'flex-start', backgroundColor: '#e1eadb', borderRadius: 20, paddingVertical: 7, paddingHorizontal: 12, marginTop: 12 },
  etiquetaTexto: { color: '#376047', fontSize: 11, fontWeight: '800', letterSpacing: 0.7 },
  fonte: { color: '#77837a', fontSize: 11, lineHeight: 16, marginTop: 17, marginBottom: 4 },
});
