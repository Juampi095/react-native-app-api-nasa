import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/header';
import {RootStackParams} from '../../types';

const Detail = () => {
  const {
    params: {title, url, explanation, date},
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)',
  },
  content: {
    backgroundColor: '#2c449d',
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '50%',
    borderColor: '#fff',
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Detail;
