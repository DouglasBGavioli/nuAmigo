import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import { useState } from 'react';

const list = [
  {
    id: 1,
    label: 'Boleto luz',
    value: '390,00',
    date: '17/09/2024',
    type: 0
  },
  {
    id: 2,
    label: 'Pix uber',
    value: '190,00',
    date: '10/09/2024',
    type: 1
  },
  {
    id: 3,
    label: 'Salario',
    value: '3950,00',
    date: '27/09/2024',
    type: 1
  },
]

export default function Home() {
  const [showValues, setShowValues] = useState(true);

  return (
    <View style={styles.container}>
      <Header name={'Douglas Gavioli'} setShowValues={setShowValues} showValues={showValues} />

      <Balance showValues={showValues} saldo={'1.500,00'} gastos={'350,00'} />
      <Actions />

      <Text style={styles.title} >Últimas movimentações</Text>
      <FlatList style={styles.list} data={list} keyExtractor={(item) => String(item.id)} showsVerticalScrollIndicator={false} renderItem={({ item }) => <Movements data={item} showValues={showValues} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
