import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';

const ItemSmall = ({item}) => {
  return (
    
    <View style={styles.cardItem}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      /> 
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap:30
          }}>
          <View style={{flex:1}}>
            <Text style={styles.cardCategory}>{item.category}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        </View>
        <View style={styles.cardInfo}>
          <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
          <Text style={styles.cardText}>{item.createdAt}</Text>
          <Message
            size={10}
            variant="Linear"
            color={colors.grey(0.6)}
          />
          <Text style={styles.cardText}>{item.totalComments}</Text>
        </View>
      </View>
    </View>
    
  );
};

export default ItemSmall;
const styles = StyleSheet.create({
    listCard: {
      paddingHorizontal: 24,
      paddingVertical: 10,
      gap: 10,
      borderWidth: 1,
      borderColor: color="#FF8A65",
      borderRadius: 30,
      marginHorizontal : 16,
  
    },
    cardItem: {
      backgroundColor: colors.darkModeBlack(0.3),
      flexDirection: 'row',
      borderRadius: 10,
    },
    cardCategory: {
      color: colors.black(),
      fontSize: 10,
      fontFamily: fontType['Pjs-SemiBold'],
      textAlign: 'justify',
    },
    title: {
        marginLeft: 16,
        fontFamily: fontType['Pjs-SemiBold'],
        fontSize: 18,
        color: colors.black(),
      },
    Title:{
      textAlign : 'justify',
      color: colors.black(),
    },
    TitleNews :{
      color: colors.black(),
    },
    cardTitle: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Bold'],
      color: colors.black(),
    },
    cardText: {
      fontSize: 10,
      fontFamily: fontType['Pjs-Medium'],
      color: colors.black(),
    },
    cardImage: {
      width: 94,
      height: 94,
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
      paddingVertical: 10,
    },
  });