import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput} from 'react-native';
import {SearchNormal,Element3, User ,Book} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import { useState } from 'react';

export default function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Element3 size="24" color="#FF8A65"/>
        <Text style={styles.title}>SendiFit</Text>
        
        <User color="#FF8A65"variant="Bold"/>
      </View>
      <View style={styles.Searchbarcontainer}>
      {/* Add the search bar */}
      <SearchNormal color='#FF8A65' variant="Linear" size={24} />
      <TextInput
        style={styles.searchBar}
        placeholder=""
        value={searchText}
        onChangeText={setSearchText}
      />
      </View>
      <ListBlog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8dc',
  },
  cardImage :{
    width :20,
    
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  title: {
    fontSize: 30,
    fontFamily: fontType['Pjs-ExtraBold'],
    color:  color="#FF8A65",
  },
  Searchbarcontainer:{
    flexDirection: 'row',
    alignItems : 'center',
    borderWidth: 4,
    borderColor: color="#FF8A65",
    borderRadius: 50,
    height: 38,
    paddingLeft: 10,
    marginHorizontal : 16
  },
  searchBar: {
    height: 40,
    paddingLeft: 1,
    margin: 10,
    color: colors.black(),
  },

  listCategory: {
    
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 52,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.black(),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.black(),
  },
})

const ListBlog = () => {
  return (
    <ScrollView>
      
      <View style={styles.listBlog}>
          <View style={{...itemHorizontal.cardItem, marginRight: 20}}>
          <Text style={itemHorizontal.Title}>
                    Sudahkah Cek Kesehatan Sendi Anda?
                    {'\n'}
                  </Text>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/236x/dd/b0/c0/ddb0c08e49618f88da12530ae2afe43a.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    CIRI CIRI SENDI SEHAT 
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 10,}}>
            <Text style={{...category.title, color: colors.white()}}>
            Kenali Macam-macam Penyakit Sendi 
            </Text>
          </View>
        </ScrollView>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={itemVertical.listCard}>
        <Text style={itemVertical.Title}>
                    A. Gejala Osteoarthritis 
                  </Text>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 10, width: '90%'}}>
                  <Text style={itemVertical.cardCategory}>Radang sendi lutut, disebut juga osteoarthritis,
                   merupakan rasa nyeri yang biasanya menimpa area tempurung lutut, 
                   sendi lutut, ligamen, dan tulang rawan.
                   {'\n'}
                   {'\n'}
                  Lihat Selengkapnya....</Text>
                </View>
                <Book size="32" color="#FF8A65"variant="Bold"/>
              </View>
            </View>
          </View>
        </View>
        <View style={itemVertical.listCard}>
        <Text style={itemVertical.Title}>
                    A. Gejala Osteoarthritis 
                  </Text>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 10, width: '90%'}}>
                  <Text style={itemVertical.cardCategory}>Radang sendi lutut, disebut juga osteoarthritis,
                   merupakan rasa nyeri yang biasanya menimpa area tempurung lutut, 
                   sendi lutut, ligamen, dan tulang rawan.
                   {'\n'}
                   {'\n'}
                  Lihat Selengkapnya....</Text>
                </View>
                <Book size="32" color="#FF8A65"variant="Bold"/>
              </View>
            </View>
          </View>
        </View>
        <View style={itemVertical.listCard}>
        <Text style={itemVertical.Title}>
                    A. Gejala Osteoarthritis 
                  </Text>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 10, width: '90%'}}>
                  <Text style={itemVertical.cardCategory}>Radang sendi lutut, disebut juga osteoarthritis,
                   merupakan rasa nyeri yang biasanya menimpa area tempurung lutut, 
                   sendi lutut, ligamen, dan tulang rawan.
                   {'\n'}
                   {'\n'}
                  Lihat Selengkapnya....</Text>
                </View>
                <Book size="32" color="#FF8A65"variant="Bold"/>
              </View>
            </View>
          </View>
        </View>
        <View style={itemVertical.listCard}>
        <Text style={itemVertical.Title}>
                    A. Gejala Osteoarthritis 
                  </Text>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 10, width: '90%'}}>
                  <Text style={itemVertical.cardCategory}>Radang sendi lutut, disebut juga osteoarthritis,
                   merupakan rasa nyeri yang biasanya menimpa area tempurung lutut, 
                   sendi lutut, ligamen, dan tulang rawan.
                   {'\n'}
                   {'\n'}
                  Lihat Selengkapnya....</Text>
                </View>
                <Book size="32" color="#FF8A65"variant="Bold"/>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
      <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
              </View>
              </View>
              </View>
              <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
              </View>
              </View>
              </View>
              <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
              </View>
              </View>
              </View>
              </View>
    </ScrollView>
  );
};

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
  Title:{
    textAlign : 'justify',
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
    color: colors.blue(0.6),
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
    width: 250,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 345,
    paddingLeft : 16,
  },
  cardImage: {
    width: '100%',
    height: 150,
    width : 200,
    borderRadius: 5,
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
    maxWidth: '60%',
  },
  Title : {
    fontSize: 16,
    textAlign : 'justify',
    color: colors.black(),
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
