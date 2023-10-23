import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ArrowRight2} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';

const ListHorizontal2 = ({item}) => {
  return (
    
    <View style={styles.listCard}>
    <Text style={styles.cardTitle}>{item.title}</Text>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
        }}
      /> 
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap:1
          }}>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardText}>{item.isi}</Text>
          <ArrowRight2 size="24" color="#FF8A65"variant="Linear"/>
          <Text style={styles.cardText}>{item.totalComments}</Text>
        </View>
      </View>
    </View>
    
  );
};

export default ListHorizontal2;
const styles = StyleSheet.create({
    listCard: {
      paddingHorizontal: 24,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: color="#FF8A65",
      borderRadius: 20,
      marginHorizontal : 80,
      marginLeft:20,
    },
    cardTitle: {
      fontSize: 20,
      fontFamily: fontType['Pjs-Bold'],
      color: colors.black(),
      paddingVertical: 5,
    },
    cardText: {
      fontSize: 20,
      fontFamily: fontType['Pjs-Medium'],
      color: colors.black(),
    },
    cardImage: {
      width: 150,
      height: 100,
      borderRadius: 10,
      resizeMode: 'cover',
      
    },
    cardInfo: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
    },
    cardContent: {
    gap: 10,
    width: 'auto',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 1,
  },
  });