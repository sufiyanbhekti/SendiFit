import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Personalcard} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';

const ItemHorizontal = ({item, variant, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={itemHorizontal.cardItem} onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
      <FastImage
        style={itemHorizontal.cardImage}
        source={{
            uri: item.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
        <View style={itemHorizontal.cardContent}>
          <View style={itemHorizontal.cardInfo}>
            <Text style={itemHorizontal.cardTitle}>{item.title}</Text>
            <Text style={itemHorizontal.cardText}>{item.isi}</Text>
          </View>
          <View>
            <View style={itemHorizontal.itemCat2}>
              <TouchableOpacity onPress={onPress}>
                <Personalcard color={colors.white()} variant={variant} size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
};
const ListHorizontal = ({data}) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  const renderItem = ({item}) => {
    variant = bookmark.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <ItemHorizontal
        item={item}
        variant={variant}
        onPress={() => toggleBookmark(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 15}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default ListHorizontal;
const itemHorizontal = StyleSheet.create({
    cardItem: {
      width: 300,
    },
    cardImage: {
      width: '100%',
      height: 260,
      width : 300,
      borderRadius: 20,
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
    },
    cardInfo: {
      justifyContent: 'flex-end',
      height: '100%',
      gap: 10,
      paddingLeft: 35,
      paddingBottom: 70,
      // maxWidth: '60%',
    },
    Title : {
      fontSize: 16,
      color: colors.white(),
      borderRadius: 25,
    },
    cardTitle: {
      // paddingBottom: 100,
      // paddingLeft: 100,
      fontFamily: fontType['Pjs-Bold'],
      fontSize: 14,
      textAlign: 'center',
      color: colors.black(),
    },
    cardText: {
      fontSize: 10,
      color: colors.black(),
      fontFamily: fontType['Pjs-Medium'],
    },
    itemCat2: {
        backgroundColor: color='rgba(106, 185, 246, 0.8)',
        padding: 5,
        alignItems: 'center',
        borderRadius: 10,
      },
  });