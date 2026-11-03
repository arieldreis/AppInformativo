import { ScrollView, Text, StyleSheet, Image } from 'react-native';
import { CartaoInfo } from './CartaoInfo';

export function TelaMataAtlantica() {
  return (
    <ScrollView style={estilos.fundo} contentContainerStyle={estilos.conteudo}>
      <Text style={estilos.marca}>BIOMAS BRASILEIROS</Text>
      <Text style={estilos.titulo}>Mata Atlântica</Text>
      <Text style={estilos.subtitulo}>Uma floresta costeira cheia de vida</Text>
      <Image
        source={require('../assets/mataAtalntica.jpg')}
        style={estilos.imagem}
        resizeMode="cover"
        accessibilityLabel="Floresta da Mata Atlântica vista de cima"
      />
      <Text style={estilos.etiqueta}>03 / 03   -   FLORESTA TROPICAL</Text>
      <CartaoInfo titulo="Perto de muita gente" texto="A Mata Atlântica acompanha grande parte do litoral brasileiro e convive com áreas urbanas e agrícolas. Seus fragmentos florestais são essenciais para milhões de pessoas." />
      <CartaoInfo titulo="Muitas espécies endêmicas" texto="O isolamento de diferentes trechos favoreceu espécies que só existem nessa região. Mico-leão-dourado, muriqui e várias bromélias são exemplos conhecidos." />
      <CartaoInfo titulo="Conservar e reconectar" texto="Restaurar áreas degradadas, proteger nascentes e ligar fragmentos com corredores de vegetação são ações que ajudam a floresta e os animais a persistirem." />
      <Text style={estilos.fonte}>Fonte de referência: IBGE — Biomas e Sistema Costeiro-Marinho do Brasil.</Text>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#f4f3e9' }, conteudo: { padding: 20, paddingTop: 28, paddingBottom: 24 },
  marca: { color: '#648071', fontSize: 11, fontWeight: '800', letterSpacing: 1.6 }, titulo: { color: '#173e30', fontSize: 34, fontWeight: '900', marginTop: 7 },
  subtitulo: { color: '#617267', fontSize: 15, marginTop: 4, marginBottom: 16 }, imagem: { width: '100%', height: 210, borderRadius: 20, backgroundColor: '#cfe0d3', borderWidth: 1, borderColor: '#d5e2d7' },
  etiqueta: { color: '#376047', backgroundColor: '#e1eadb', overflow: 'hidden', alignSelf: 'flex-start', borderRadius: 20, paddingVertical: 7, paddingHorizontal: 12, marginTop: 12, fontSize: 11, fontWeight: '800', letterSpacing: 0.7 },
  fonte: { color: '#77837a', fontSize: 11, lineHeight: 16, marginTop: 17 },
});
