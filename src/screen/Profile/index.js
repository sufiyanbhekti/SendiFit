import { useNavigation } from "@react-navigation/native";
import {ScrollView, StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import {HeartCircle,Home,Logout} from 'iconsax-react-native';
import React,{useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, Doclist} from '../../../data';
import { fontType, colors } from '../../theme';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = Doclist.slice(2,3);
const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const user = auth().currentUser;
    const fetchProfileData = () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userId = user.uid;
          const userRef = firestore().collection('users').doc(userId);
          const unsubscribeProfile = userRef.onSnapshot(doc => {
            if (doc.exists) {
              const userData = doc.data();
              setProfileData(userData);
            } else {
              console.error('Dokumen pengguna tidak ditemukan.');
            }
          });
          return () => {
            unsubscribeProfile();
          };
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, []);
  const handleLogout = async () => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('userData');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };
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
          paddingHorizontal: 6,
          gap: 10,
          paddingVertical: 20,
          backgroundColor:'rgba(227, 26, 129, 0.09)',
          borderRadius:20,
        }}>
          
          <View style={profile.Profil}>
          <FastImage
            style={profile.pic}
            source={{
              uri: ProfileData.profilePict,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={profile.des}>
          <Text style={profile.textContainer}>Nama : {profileData?.fullName}</Text>
          <View style={{gap: 5,marginRight:24}}>
            <Text style={profile.textContainer}>
              UMUR : {ProfileData.umur}
            </Text>
          </View>
          </View>
          </View>
            <TouchableOpacity
              style={styles.floatButton2}>
              <Text style={styles.Text}>Edit Profile</Text>
            </TouchableOpacity>
    
           <View style={styles.containerbawah}>
            
          <View style={{flexDirection: 'row', gap: 20,padding:4}}>
            <View style={styles.listdes}>
              <Text style={profile.tag}>JenisKelamin</Text>
              <Text style={profile.sum}>{ProfileData.JenisKelamin}</Text>              
            </View>
            <View style={styles.listdes}>
            <Text style={profile.tag}>Paket Layanan</Text>
              <Text style={profile.sum}>
                {ProfileData.paket}
              </Text>
            </View>
            <View style={styles.listdes}>
            <Text style={profile.tag}>Riwayat Penyakit</Text>
              <Text style={profile.sum}>
                {ProfileData.penyakit}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={handleLogout}>
          <Logout color={colors.white()} variant="Linear" size={20} />
          <Text style={styles.Text}>Logout</Text>
        </TouchableOpacity>
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
    borderBottomRightRadius:20,
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
    gap: 15, 
    alignItems: 'center',
    marginTop :75,
  },
  listdes:{
    alignItems: 'center',
     gap: 5, 
     backgroundColor: 'rgba(255, 0, 0, 0.1)',
     borderRadius:15
  },
  floatButton2:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 0, 0, 0.70)',
    padding: 15,
    position: 'absolute',
    borderRadius: 10,
    bottom: 150,
    right: 129,
    marginBottom:-60
  },
  floatingButton: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 0, 0, 0.71)',
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
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
    paddingLeft:2,
    paddingRight:2
  },
  Profil:{
    flexDirection : 'row',
    justifyContent: 'flex-start',
    alignItems : 'center',
    shadowColor: 'red',
    borderRadius:90,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  des:{
    justifyContent: 'flex-end',
    marginLeft: 20,
    borderRadius:15,
    padding :2,
  },
  Text: {
    flexDirection: 'Row',
  },
  TextProfile: {
    fontSize: 18,
    color:"black"
    
  },
});