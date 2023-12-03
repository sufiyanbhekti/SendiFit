import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21, ArrowRight2,NoteText} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';

const ItemSmall = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
    <View style={{gap: 5, flex:1}}> 
          <Text style={styles.cardTitle}>{item.no}</Text>
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
        <View style={{gap: 5, flex:1}}>
          <Text style={styles.cardCategory}>{item.nama}</Text>
        </View>
        <NoteText
          color={colors.grey(0.6)}
          variant="Linear"
          size={20}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardText}>{item.deskripsi}</Text>
        <ArrowRight2
          size={10}
          variant="Linear"
          color={colors.grey(0.6)}
        />
      </View>
    </View>
    </View>
  </TouchableOpacity>
  
);
};

export default ItemSmall;
const styles = StyleSheet.create({
listCard: {
  paddingHorizontal: 24,
  paddingVertical: 10,
  gap: 15,
},
cardItem: {
  backgroundColor: 'rgba(227, 26, 129, 0.09)',
  flexDirection: 'row',
  borderRadius: 10,
},
cardCategory: {
  color: colors.blue(),
  fontSize: 15,
  width:180,
  fontFamily: fontType['Pjs-SemiBold'],
},
cardTitle: {
  fontSize: 16,
  fontFamily: fontType['Pjs-Bold'],
  color: colors.black(),
  textAlign:'center',
  marginLeft:13,
  
},
cardText: {
  fontSize: 10,
  width:270,
  fontFamily: fontType['Pjs-Medium'],
  color: colors.grey(0.6),
},
cardImage: {
  width: 357,
  height: 150,
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
  justifyContent: 'space-between',
  paddingRight: 10,
  paddingLeft: 15,
  flex: 1,
  paddingVertical: 10,
},
});