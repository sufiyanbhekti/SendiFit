import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import axios from 'axios';

const EditBlogForm = ({route}) => {
const {blogId} = route.params;
  const [blogData, setBlogData] = useState({
    no: "",
    nama: "",
    deskripsi:"",
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getBlogById();
  }, [blogId]);

  const getBlogById = async () => {
    try {
      const response = await axios.get(
        `https://656b3257dac3630cf727d4b6.mockapi.io/SendiFit/Layanan/${blogId}`,
      );
      setBlogData({
        no : response.data.no,
        nama : response.data.nama,
        deskripsi : response.data.deskripsi,
      })
    setImage(response.data.image)
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios
        .put(`https://656b3257dac3630cf727d4b6.mockapi.io/SendiFit/Layanan/${blogId}`, {
            no: blogData.no,
            nama: blogData.nama,
            deskripsi: blogData.deskripsi,
            image,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Konsul');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>Edit</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <Text style={styles.buttonLabel}>No Paket</Text>
        <View style={textInput.borderDashed}>
          <TextInput
             placeholder="ketik disni"
             placeholderTextColor={'rgba(128, 128, 128, 0.6)'}
            value={blogData.no}
            onChangeText={(text) => handleChange("no", text)}
            
            multiline
            style={textInput.title}
          />
        </View>
        <Text style={styles.buttonLabel}>Nama Paket</Text>
        <View style={[textInput.borderDashed]}>
          <TextInput
          placeholder="ketik disni"
          placeholderTextColor={'rgba(128, 128, 128, 0.6)'}
            value={blogData.nama}
            onChangeText={(text) => handleChange("nama", text)}
            multiline
            style={textInput.content}
          />
        </View>
        <Text style={styles.buttonLabel}>Deskripsi</Text>
        <View style={[textInput.borderDashed, { minHeight: 250 }]}>
          <TextInput
          placeholder="ketik disni"
          placeholderTextColor={'rgba(128, 128, 128, 0.6)'}
            value={blogData.deskripsi}
            onChangeText={(text) => handleChange("deskripsi", text)}
            multiline
            style={textInput.content}
          />
        </View>
        <Text style={styles.buttonLabel}>Image</Text>
        <View style={[textInput.borderDashed]}>
          <TextInput
          placeholder=""
          placeholderTextColor={'rgba(128, 128, 128, 0.6)'}
            value={image}
            onChangeText={(text) => setImage(text)}
            style={textInput.content}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonLabel}>Update</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.blue()} />
        </View>
      )}
    </View>
  );
};

export default EditBlogForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor:"red",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: colors.white(),
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.65)',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 14,
    color: 'black',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'rgba(128, 128, 128, 0.4)',
  },
  title: {
    fontSize: 16,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.black(),
    padding: 0,
  },
  content: {
    fontSize: 12,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.black(),
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.6),
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
  },
});