import { ScrollView, Text, StyleSheet, Image } from 'react-native';
import { CartaoInfo } from './CartaoInfo';

export function TelaCerrado() {
  return (
    <ScrollView style={estilos.fundo} contentContainerStyle={estilos.conteudo}>
      <Text style={estilos.marca}>BIOMAS BRASILEIROS</Text>
      <Text style={estilos.titulo}>Cerrado</Text>
      <Text style={estilos.subtitulo}>A savana brasileira que alimenta rios</Text>
      <Image
        source={require('../assets/cerrado.webp')}
        style={estilos.imagem}
        resizeMode="cover"
        accessibilityLabel="Paisagem do Cerrado com árvore de galhos retorcidos"
      />
      <Text style={estilos.etiqueta}>02 / 03   -   SAVANA BRASILEIRA</Text>
      <CartaoInfo titulo="Raízes profundas" texto="Com estação seca bem marcada, muitas plantas do Cerrado têm raízes profundas, cascas grossas e folhas adaptadas ao calor e à falta de água." />
      <CartaoInfo titulo="Berço das águas" texto="Nas chapadas do Cerrado nascem rios que alimentam importantes bacias hidrográficas brasileiras. Proteger a vegetação ajuda a conservar nascentes e cursos d'água." />
      <CartaoInfo titulo="Paisagens variadas" texto="Campos limpos, campos sujos, veredas e cerradões formam um mosaico de ambientes, com espécies como o lobo-guará, o tamanduá-bandeira e o pequizeiro." />
      <Text style={estilos.fonte}>Fonte de referência: IBGE — Biomas e Sistema Costeiro-Marinho do Brasil.</Text>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#f4f3e9' }, conteudo: { padding: 20, paddingTop: 28, paddingBottom: 24 },
  marca: { color: '#648071', fontSize: 11, fontWeight: '800', letterSpacing: 1.6 }, titulo: { color: '#173e30', fontSize: 34, fontWeight: '900', marginTop: 7 },
  subtitulo: { color: '#617267', fontSize: 15, marginTop: 4, marginBottom: 16 }, imagem: { width: '100%', height: 210, borderRadius: 20, backgroundColor: '#e8d9ab', borderWidth: 1, borderColor: '#e5d9bd' },
  etiqueta: { color: '#745b2e', backgroundColor: '#f0e6c9', overflow: 'hidden', alignSelf: 'flex-start', borderRadius: 20, paddingVertical: 7, paddingHorizontal: 12, marginTop: 12, fontSize: 11, fontWeight: '800', letterSpacing: 0.7 },
  fonte: { color: '#77837a', fontSize: 11, lineHeight: 16, marginTop: 17 },
});
