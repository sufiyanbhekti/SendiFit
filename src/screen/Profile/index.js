import {ScrollView, StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import {HeartCircle,Home,Logout} from 'iconsax-react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, Doclist} from '../../../data';
import {ItemSmall} from '../../components';
import { fontType, colors } from '../../theme';

const formatNumber = number => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return number.toString();
};
const data = Doclist.slice(2,3);
const Profile = () => {
  return (
    <View style={styles.container}>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }}>
        <View style={{gap: 15, alignItems: 'center'}}>
          <FastImage
            style={profile.pic}
            source={{
              uri: ProfileData.profilePict,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={profile.textContainer}>Nama : {ProfileData.name}</Text>
          <View style={{gap: 5,marginRight:24}}>
            <Text style={profile.textContainer}>
              UMUR : {ProfileData.umur}
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 20,backgroundColor:"#fff8dc",padding:4}}>
            <View style={{alignItems: 'center', gap: 5}}>
              <Text style={profile.tag}>JenisKelamin</Text>
              <Text style={profile.sum}>{ProfileData.JenisKelamin}</Text>              
            </View>
            <View style={{alignItems: 'center', gap: 5}}>
            <Text style={profile.tag}>Paket Layanan</Text>
              <Text style={profile.sum}>
                {ProfileData.paket}
              </Text>
            </View>
            <View style={{alignItems: 'center', gap: 5}}>
            <Text style={profile.tag}>Riwayat Penyakit</Text>
              <Text style={profile.sum}>
                {ProfileData.penyakit}
              </Text>
            </View>
          </View>
        </View>
        <View style={profile.Text}>
            <Text style={profile.TextProfile}>Paket Yang Anda Ambil :</Text>
          </View>
          <View style={styles.Riwayat}></View>
          <View style={{paddingVertical: 10, gap:10}}>
          {data.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.containerbawah}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', 
              gap: 10,paddingRight:21,
              alignItems: 'center',
              backgroundColor:"#fff8dc",
              borderRadius:10
              }}>
              <Logout color={'red'} variant={'Bulk'} size={25} />
              <Text style={profile.textContainer}>Logout</Text>
            </View>
          </TouchableOpacity>
          </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor:"red",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
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
  containerbawah:{
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor:"orange",
    marginLeft:180,
    borderTopLeftRadius:200,
    borderWidth:2,
    borderColor:"red"
  }
  
});

const profile = StyleSheet.create({
  pic: {width: 100, height: 100, borderRadius: 15},
  textContainer: {
    color: colors.black(),
    textTransform:'capitalize',
    fontSize: 20,
  },
  info: {
    fontSize: 18,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
  },
  sum: {
    fontSize: 12,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
    borderBottomWidth:2,
    
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: "black",
    borderColor:"orange",
    borderRadius:10,
    borderWidth: 2,
    alignItems:'center',
    paddingLeft:5,
    paddingRight:2
  },
  Text: {
  
  },
  TextProfile: {
    fontSize: 18,
    color:"black"
    
  },

});