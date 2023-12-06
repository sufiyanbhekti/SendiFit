import {StyleSheet, Text, View, ScrollView,ActivityIndicator, FlatList,TextInput,TouchableOpacity,Image,Animated } from 'react-native';
import React, {useRef,useCallback,useEffect} from 'react';
import {Doclist} from '../../../data';
import FastImage from 'react-native-fast-image';
import {ItemSmall} from '../../components'; 
import {HeartSearch,Home,Setting2, Edit} from 'iconsax-react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import { fontType, colors } from '../../theme';
import { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const data = [
  {id: 1, label: '1.Konsultasi Kesehatan Sendi'},
  {id: 2, label: '2.Pemantauan Kesehatan Sendi'},
  {id: 3, label: '3.Program Latihan Khusus'},
  {id: 4, label: '4.Rehabilitasi Pascaoperasi'},
  {id: 5, label: '5.Terapi Fisik'},
];

const ItemRecent = ({item}) => {
  return (
    <View style={recent.button}>
      <Text style={recent.label}>{item.label}</Text>
    </View>
  );
};
const FlatListRecent = () => {
  const renderItem = ({item}) => {
    return <ItemRecent item={item} />;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
const Konsul = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .onSnapshot(querySnapshot => {
        const blogs = [];
        querySnapshot.forEach(documentSnapshot => {
          blogs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setBlogData(blogs);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('blog')
        .onSnapshot(querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setBlogData(blogs);
        });
      setRefreshing(false);
    }, 1500);
  }, []);
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
      <Animated.View style={[recent.container, {transform: [{translateY: recentY}]}]}>
        <Text style={recent.text}>Paket Layanan Kesehatan</Text>
        <FlatListRecent />
        
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 1}}>
          
          <View style={{paddingVertical: 150, gap: 10,paddingHorizontal :1}}>
          <Text style={recent.text}>Paket Yang Diambil :</Text>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            blogData.map((item, index) => <ItemSmall item={item} key={index} />)
          )}
        </View>
    </Animated.ScrollView>
      <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => navigation.navigate("AddBlog")}
      >
      <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};
export default Konsul;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
    marginTop:150
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 999,
    backgroundColor: colors.white(),
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
  justifyContent: 'flex-end',
  flexDirection: 'row',
  alignItems: 'center',
  height: 60,
  elevation: 8,
  paddingTop: 8,
  zIndex: 1000,
  position: 'absolute',
  paddingBottom: 4,
  backgroundColor:"red",
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20
  },
  Searchbarcontainer:{
    flexDirection: 'row',
    alignItems : 'center',
    borderWidth: 2,
    borderColor: color="white",
    borderRadius: 50,
    height: 30,
    paddingRight: 150,
    paddingLeft:10,
    marginRight:30,
  },
  searchBar: {
    height: 40,
    paddingLeft: 1,
    margin: 10,
    color: colors.white(),
  },
  floatingButton: {
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
const recent = StyleSheet.create({
  container:{
    position: 'absolute',
    backgroundColor: colors.white(),
    zIndex: 999,
    top: 60,
    left: 0,
    right: 0,
    elevation: 1000,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: colors.grey(1),
    borderWidth: 1,
    backgroundColor: colors.grey(0.03),
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: "black",
  },
  text: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
});