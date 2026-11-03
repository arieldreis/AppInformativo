import { View, Text, StyleSheet } from 'react-native';

export function CartaoInfo({ titulo, texto }) {
  return (
    <View style={estilos.cartao}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.texto}>{texto}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: { backgroundColor: '#ffffff', borderRadius: 18, padding: 18, marginTop: 13, borderWidth: 1, borderColor: '#e7ebdf' },
  titulo: { color: '#205842', fontSize: 16, fontWeight: '800', marginBottom: 7 },
  texto: { color: '#49584e', fontSize: 14, lineHeight: 21 },
});
