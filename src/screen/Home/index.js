// KODINGAN HALAMAN AWAL REACT NATIVE SENDI FIT
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput,TouchableOpacity} from 'react-native';
import {HeartCircle ,Health,Call,HeartSearch, Personalcard, ArrowRight2, Shop,} from 'iconsax-react-native';
import { useState } from 'react';
import {BlogList,} from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ListHorizontal2 } from '../../components';
// header ndase
export default function Home() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.imageBanner}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <HeartCircle style={{marginRight: 1,marginTop:5}} size="28"  color='red'/>
            <Text style={styles.title}>SendiFit</Text>
          </View>
          <View style={styles.profileContainer}>
            <TouchableOpacity >
              <Image
                source={{
                  uri: 'https://i.pinimg.com/236x/c4/7e/7c/c47e7c626e543c7852c0d5739cd5a9a3.jpg',
                }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      <View style={styles.Searchbarcontainer}>
      {/* Add the search bar */}
      <HeartSearch color='white' variant="Linear" size={24} />
      <TextInput
        style={styles.searchBar}
        placeholder="CARI"
        value={searchText}
        onChangeText={setSearchText}
      />
      </View>
      </View>
      <ListBlog/>
      </View>
  );
}
// Style Ndase
const ListBlog = () => {
  const horizontalData = BlogList.slice(0, 3);
  const horizontalData2 = BlogList.slice(3, 6);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        <ListHorizontal data={horizontalData} />
        <View style={category.title}>
            <Text style={{...category.title, color: colors.black()}}>
            Macam-macam Penyakit Sendi  
            </Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.listCard}>
          {horizontalData2.map((item, index) => (
            <ListHorizontal2 item={item} data={horizontalData2} />
          ))}
        </View>
        </ScrollView>
        <View style={category.title}>
            <Text style={{...category.title, color: colors.black()}}>
            INFORMASI KESEHATAN  
            </Text>
          </View>
          <View style={itemVertical.listCard2}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://akcdn.detik.net.id/community/media/visual/2019/08/02/de1d85cf-090f-46a3-856f-74956027aa9b_169.jpeg?w=700&q=90',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <Text style={itemVertical.cardTitle}>
                  Sering Nyeri Sendi Habis Olahraga? Mungkin Ini Penyebabnya...
                  </Text>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                 <View>
                  <Text style={itemVertical.TitleNews}>Selengkapnya</Text>
                </View>
                <View>
                  <ArrowRight2 size="15" color="black"variant="Linear"/>
                </View>
                </View>
                </View>
              </View>
              </View>
              </View>
              <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/236x/7a/a5/8f/7aa58f5efe6d8d7012aa21c6cc5d02ad.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <Text style={itemVertical.cardTitle}>
                  12 Obat Nyeri Sendi yang Ampuh, Bisa Ditemukan di Apotek...
                  </Text>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                 <View>
                  <Text style={itemVertical.TitleNews}>Selengkapnya</Text>
                </View>
                <View>
                  <ArrowRight2 size="15" color="black"variant="Linear"/>
                </View>
                </View>
                </View>
              </View>
              </View>
              </View>
              <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://akcdn.detik.net.id/community/media/visual/2021/01/19/3-ramuan-alami-ini-ampuh-jadi-obat-untuk-lidah-mati-rasa-1_169.jpeg?w=700&q=90',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <Text style={itemVertical.cardTitle}>
                  7 Makanan yang Ampuh Atasi Nyeri Sendi Yang Mudah Ditemukan...
                  </Text>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                 <View>
                  <Text style={itemVertical.TitleNews}>Selengkapnya</Text>
                </View>
                <View>
                  <ArrowRight2 size="15" color="black"variant="Linear"/>
                </View>
                </View>
                </View>
              </View>
              </View>
              </View>
              </View>
      </View>
      
    </ScrollView>
  );
};
// STYLE HALAMAN 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardImage :{
    width :20, 
  },
  profileContainer: {
    marginLeft: 1,
    flexDirection: 'row',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    paddingHorizontal: 24,
    // justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4,
  },
  titleContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: color='#fff8dc',
    padding: 1,
    borderRadius: 20,
    marginRight: 140,
    marginBottom: 9,
  },
  title: {
    fontSize: 24,
    fontFamily: fontType['Pjs-ExtraBold'],
    color:   color='red',
    marginBottom:1,
  },
  Searchbarcontainer:{
    flexDirection: 'row',
    alignItems : 'center',
    borderWidth: 2,
    borderColor: color="white",
    borderRadius: 50,
    height: 30,
    paddingLeft: 10,
    marginHorizontal : 30,
  },
  searchBar: {
    height: 40,
    paddingLeft: 1,
    margin: 10,
    color: colors.white(),
  },
  imageBanner: {
    backgroundColor: 'rgba(255, 0, 0, 0.71)',
    width: 'auto',
    height: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },


  listCategory: {
    
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
// Style Printilan Ndase
const category = StyleSheet.create({
  item: {
    
  },
  logo:{
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    gap: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    marginLeft: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 18,
    color: colors.black(),
  },
  itemCat1: {
    backgroundColor: color='#FF8A65',
    padding: 5,
    alignItems: 'center',
    borderRadius: 20,
  },
  itemCat2: {
    backgroundColor: color='green',
    padding: 5,
    alignItems: 'center',
    borderRadius: 20,
  },
  itemCat3: {
    backgroundColor: color='blue',
    padding: 5,
    alignItems: 'center',
    borderRadius: 20,
  },
  itemCat4: {
    backgroundColor: color='white',
    padding: 5,
    alignItems: 'center',
    borderRadius: 20,
  },
})
const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: color="#FF8A65",
    borderRadius: 30,
    marginHorizontal : 16,

  },
  listCard2: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 10,
    marginHorizontal : 16,

  },
  cardItem: {
    backgroundColor: 'rgba(227, 26, 129, 0.09)',
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.black(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
    textAlign: 'justify',
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