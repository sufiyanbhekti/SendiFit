// KODINGAN HALAMAN AWAL REACT NATIVE SENDI FIT
import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput,TouchableOpacity} from 'react-native';
import {HeartCircle ,Health,Call,HeartSearch, Personalcard, ArrowRight2, Shop,} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import { useState } from 'react';
import {BlogList, CategoryList} from './data';
import { ListHorizontal, ItemSmall ,ListHorizontal2} from './src/components';
// header ndase
export default function App() {
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
                  uri: 'https://i.pinimg.com/564x/04/87/4f/04874fbda0e761a7f7b4b70d78501887.jpg',
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
      <View style={{...category.logo, marginLeft: 10}}>
         <View>
         <TouchableOpacity >
         <View style={category.itemCat1}>
            <Health size={24} style={{color: 'white'}} />
          </View>
          </TouchableOpacity>
          <View style={{alignItems:'center', paddingTop:1}}>
            <Text style={{color: 'black'}}>Cek Up</Text>
          </View>
         </View>
          <View>
          <TouchableOpacity >
            <View style={category.itemCat2}>
            <Personalcard size="26" color="white"/>
            </View>
            </TouchableOpacity>
            <View style={{alignItems:'center', paddingTop:1,paddingHorizontal:2}}>
              <Text style={{color: 'black'}}>Konsul</Text>
            </View>
          </View>
          <View>
          <TouchableOpacity >
          <View style={category.itemCat3}>
            <Call size={24} style={{color: 'white'}} />
          </View>
          </TouchableOpacity>
          <View style={{alignItems:'center', paddingTop:1 }}>
              <Text style={{color: 'black'}}>Layanan</Text>
            </View>
          </View>
          <View>
            <View style={category.itemCat4}>
            <Shop size="25"color="red"/>
            </View>
            <View style={{alignItems:'center', paddingTop:1, paddingHorizontal:10}}>
              <Text style={{color: 'black'}}>Toko</Text>
            </View>
          </View>
        </View>
      </View>
      <ListBlog />
      </View>
  );
}
// Style Ndase
const ListBlog = () => {
  const horizontalData = BlogList.slice(0, 3);
  const horizontalData2 = BlogList.slice(3, 6);
  const verticalData = BlogList.slice(6);
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
// ISI HALAMAN AWAL
// const ListBlog = () => {
//   return (
//     <ScrollView>
//       {/* HALAMAN 1 */}
//       <View style={styles.listBlog}>  
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={{...itemHorizontal.cardItem, marginRight: 20}}>
//             <ImageBackground
//               style={itemHorizontal.cardImage}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 15}}
//               source={{
//                 uri: 'https://i.pinimg.com/236x/3f/ab/cb/3fabcb66f8371803cbbcf7c2e4109cf5.jpg',
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                 <Text style={itemHorizontal.cardTitle}>
//                     Konsultasikan Sendi Anda Segera!Jika Ada Keluhan Pada Sendi 
//                   </Text>
//                 <Text style={itemVertical.cardText}>Layanan Konsul Tersedia Tanggal, 25 juli 2023</Text>
//                 </View>
//                 <View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>
//           <View style={{...itemHorizontal.cardItem, marginRight: 20}}>
//             <ImageBackground
//               style={itemHorizontal.cardImage}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 15}}
//               source={{
//                 uri: 'https://i.pinimg.com/236x/4c/d0/4b/4cd04b93f97952b9cd87b71459560717.jpg',
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                 </View>
//                 <View>
//                 </View>
//               </View>
//             </ImageBackground>
//             </View>
//           <View style={{...itemHorizontal.cardItem, marginRight: 20}}>
//             <ImageBackground
//               style={itemHorizontal.cardImage}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 15}}
//               source={{
//                 uri: 'https://i.pinimg.com/236x/62/90/d4/6290d4e3b4288aab1e6f2f47a437bad8.jpg',
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                 </View>
//                 <View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>
//           </ScrollView>
//           <View style={styles.listCategory}>
//       </View>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {/* PENYAKIT 1 */}
//         <View style={itemVertical.listCard}>
//         <Text style={itemVertical.Title}>
//                     A. Piyan Loro Ati 
//                   </Text>
//           <View style={{...itemVertical.cardItem, backgroundColor: 'transparent',}}>
//             <Image
//               style={{...itemVertical.cardImage,}}
//               source={{
//                 uri: 'data:image/jpeg;base64,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',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
                
//               </View>
//             </View>
//           </View>
//           <View style={{flexDirection:'row', alignItems:'center'}}>
//           <View>
//             <Text style={itemVertical.Title}>Selengkapnya</Text>
//           </View>
//           <View>
//             <ArrowRight2 size="24" color="#FF8A65"variant="Linear"/>

//           </View>
//           </View>
//         </View>
//         {/* PENYAKIT 2 */}
//         <View style={itemVertical.listCard}>
//         <Text style={itemVertical.Title}>
//                     B. Rheumatoid Arthritis 
//                   </Text>
//           <View style={{...itemVertical.cardItem, backgroundColor: 'transparent',}}>
//             <Image
//               style={{...itemVertical.cardImage,}}
//               source={{
//                 uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYTFBQXFxYYGSEcGRkYGBgYHRgcGRgXISAfIh8ZHyoiHBwpHRkXIzQjJysuMTExISI2OzYyOiowMS4BCwsLDw4PHRERHDAnIiQwMDAwMDAwMDAwMS4wMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAMkA+wMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABQQGAgMHAf/EAEMQAAIBAgQEBAIIAgcHBQAAAAECAwARBAUSIQYTMUEiUWFxMoEHFCNCUpGhscHRFTNicqLh8CQ0U3OSstIWQ1Rjgv/EABgBAQADAQAAAAAAAAAAAAAAAAABAgQD/8QAIhEBAQACAwACAgMBAAAAAAAAAAECEQMhMRJBIjITYYFR/9oADAMBAAIRAxEAPwDs1FFUrBccO8fM0RuLwX5LtJpOInSMxsNO0qqwYLffuB3C60UifizDhdRLgDVrBQ3iCSMjFx2AdWG172JFwL1tn4kgRQ5ZrEuBZGYkxyrE1gBc+N1A86BxRSbCcSQyMVCyhgsjWaNhfksFdR2LAsu3e+17G2vC8URSSRoiuwcSEtYWjMJjDBrH/wCwG4uKB7RSIcTxMF0BvE0WnWrKGSZ9KuDY3U2NvXTe1wayyvP1nnMcanl8oSrIVIDhnYArfqpAuD7HoRQO6KTT8Swo0iMWDRgEjSSSC6pdQtyfEyi3XcHoaiY7ivQJLQSAxzQxnUvXnvCDbTfxAS7DuRQWSiksXEkTFVRJWZg50iNrrypCj6r7Ahxbrv1FxUaLixWjdxG3gjjfV4tB5yqRY6dVhqG+m/XagsdFQcuzNZtegNZGKEkWBKsVa3sykf5EEzaDRicSE61FGaA9KRZjjjLMwU+EHSPl1/W9Tkh0p61xud300Y8c12nrm61ujzFD3qqYht60rK1V/ksT/DKu6YlT3rZqFU2LGOvepKZyy9atOWfal4b9LVRSKHiFB8Rqdhc3jfoRXSZSudws9MKKxBvWVWVFFFFAUUUUBRRRQFFFFAUiHCsAEagyAIIhYMPH9XlSSMttuwZbXFrgkeVntFAkXhuMScxHdWLMW/q21h5Xk0nWhsAzvYixsx3rTieG4QdTyyBdZKrdNKtLPHIQPDc3lRbAk9SBVhpTn8LN9XZblUxCM4HdbOt/YMyt8qCKMkw88ZZXcpIJhcED+vcF9mXsyCwIta9717gsgjDCVJnYh31N9mQ2vQsiEKlguqFeliCDuKTy5DidMC8sXg0lWVowbriNTXZhqCtEFsFtuWDbWoXhqVUEXK+zWed3WPkfaiaV3icCQFSUUhSGAI6gnSLg6w/C8agAySvp5YTUV8CQPqRBZRcX6k3Y2FztWeR5LHAbpK8gRBEoZkYRpGTZLgAkjpdiTtvUXOsnkOHgjjDyyQ6dJlZGDMsZUGW9tY3uStmBsw3FQ8TkUmmSIYdCj4lpJGHJJkRxIy6eYLBlkKA6h8OrTvagYJwnEGLcyQjxWW6ADXMkp3CXJ1oNyTsSK3Y/Jo2kLO7gSSxPoBXSZIGR0NytwTylBF7EDzqntlOJ5kMbvbEclVEg+0kjl+qSR3LE/wC7hzrNh8ek3ubBwMidIbIsiNJPhzoZoiq8mdXeReSoFyoYktu2lb2NBYMHk8cbmRS1zzOpFvtZTI3b8RNvSokfC8SoYxJII2ijjK3TcQgBWvpuGsADvY+VPaKBdgMrWOWWbWzNJbVfQAApa2yKLkaiNTXNgBfapeJeyMfJSfyFbagcQyacNO3lE/8A2mlTPVR4XbU1z7+5NPMbLtaqtkE1rCmWMnY9Kybbddo2Nn3sDWcDVohwpY3NYSyFHqEmaLetWIgIuaxhxA2rPGZiApFR0dq7neIKjrS/J8zcOCCetaM8xutrDpRl8Ph1HpUzqK5Xdda4cx3MQb9qcVSvo8xBZnHZVv8Amf8AKrrWnC7xZeSay09oooq6gooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKDykHHeMWPBygnxSDQo7kt/IXNO5pQqlmICgXJOwAFc5z7MDiptQvoXZAew7n3PX8qpnlqOnHh8si/J8XYVYMLiFak65dbrU/KoBfrWdrMMQ2lb1Ami1i9SM9nHhQVs5YVAKhP0UtdaV42VmJpnj5lJsKiQovS29VSSf0czHfpWeYYgKBEvzprPEQCR0qt4n4ifWrS7Us0v30Zz2ldLfFHf20kf+X6V0GuVcA4i2Kh9Syn5o38bV1WtHH+rNyz8ntFFFdHIUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQeUvzXOY4B4ySx+FFF2b2Hl6mw9azzXGctNramOlAe7H+AFz8qSYfKwGaV3LyN1Y/sPIelUyy06ceHy7pFnGdTYo6dJRAdkBvc+bHufToP1rLA4DRu3U9qbTKiElQL0gzvN9Ow3Y1wt3Wqak1EbO8xCmw6+lM+Hmuhc1WocIxOt+9WYsI4Ao6moS1O131Hz2qXmM3hAvYnpS+IamUVnnslio8hUfSftow+E3JNQ5V0vTDAS3F6xnAY3qqS6fEEeHzpHj47GnWa4a3ipJiztUxXI64FcDEw3/AB/wNv1tXYa5B9G8OvFxeSlmPyQ2/UrXX608fjJy+vaKKK6OYooooCiiigKKKKAqLj8bHEnMkcIoIFz0uzBQPcsQB6mpVJeL8HJNhwkaszCaF7Kyo2mPERO1ixADaVa2/WgZ4XEpIodGDKejA3B/0dqzeQAEkgAdSdgKpSZNiwlijliG5OmVRyHaeR9cpDASOUaMswDXKuN9V22ZplOKlimhMTkaMUATKumQyyK0IHjv028QAXp0oLrRVQxGXYhpCyRyqS6GJjIoEMKxKHiZRIbsXEnYjxqb+DbHCcPzBolYPyiITKDMx1OsWKEt/Hdrs0F+zbdbGgtglGopcagASL7gEkA28iQfyNbapIybFhdw5XRCHXmamcRvidQF3AvpaAm5GsCxJrP+gMR9sVaW/wBWVcOZJd0lMmKLCyMQGCPEofxEC25saC50Un4cwjRq5IlQM1xHIVOiygHTpd7AkXtfrc233cUFY4txWiaG4uArEe5KikGa49omBL3U7n0H8qbcZDViEX8Md/8AqY/+NVPNk+9XDP1t4p+ETcdmm1hSrDR3fUReteTAy2XrY2/L/KrHNy4U3G9c/FukdDzWCgWA61qzjEnUF+VScml2eQiwpRA/NxBPYb/Op0SnGVIS/tS/imXx2FO8mT4mqqZziuZiCB0BqD7OMkXwGo2ZT6GFvOpHD7bMKXZ+2496hYxx6ao71V8WOtWjLcQGSxpHnuE0NcdDSRFOfolT/aSfKJv1ZK6ma5d9EG+Il9It/m4t+xrqJrTh4x8n7PaKKKu5iiiigKKKKAooooCl+c44xIpVQzu6ogJ0jU5tcmxsALnoSbWG5FMKhZpHE0TCfRyhu3MsFGkggknYWIBB7ECgrOXcU4jSyGIyypJMXC6z4FxU8aKhSMgnTEQC+noLnckScHnGI1yDSju80ojVpNMaRwEA7iLUGJK9dXUm4AtUjVgefBAkUTOytLHo5dkRm1F/iBIdxfwhrkXPS4M0xmAIkjkET8uVRInhvG85UamuRYESeI+RI36UGiHi15E5sUKmMvCi65CrFsQsDLcBDpVRNv1O2wrW3FExjkLRojBJGUrJq/qJuVJ8UduviXY36G1PIxhmXUvJKkrLcaCCU0hXuNttCgN20jyqPJNgQSjNhw26FS0d/tX1FSP7Ti9u5oIkHEUiB3nWNYlxEkXMVj4FTXpLgr3Kqux6sKbZbjuYqawEleMOYiwLKG/ex2JG16VCDCYvnRqVVjLeaMcvU5glKgsu5ClkHi2JFulOcbg0kADjcG6sCQynzVhuD7e1BKopX9aeHabxR9pgALf8xR8P98eHrcL3nmQadQ3Fri299qCmZ3iA+ImYHZAIx7rcn9WIpNm0fgX2r3DS6oy3d2JPuTetnELARBh2FZbd1vxmpIr3DOL0SOewIP703mmbEyBQNqV8LYPXrY9zpHy61Z8NhhECRsQL0vprpD4hxCwoIV8t6X5EmlSx6ml2YStLKWPnTnCYQlNulAygxoSJiPKqhhTqdm8zVgzCErC1h2qt5ebGx70L6sOUS9faoGdtc1JwOHksSg2qFi0NyG2NQsk5c9bM9Rmi128NeZBBzCQBe1T8RAUDRsPCwtQefQ3MqzYiMjxMisD6IzXH+Na6fXHeCMSuGzBOZsr3jDeWr4f1AHzrsVaMLuMXJNZPaKKKu5iiiigKKKKAooooCl2dYFpUUIV1JIkgD30sUYGxtuPQ72IBsbWpjRQIskyNonEjMpJEtwoIAMuIaWwv90atPr1rHF5G7vNumiSaGW5vqDQmG62tYgiK4N+p6U/ooKriOGZLTKjpaYSK1ww0B5mkBAHU+NgRt2PofH4RJRl1pcpi1vp74vELIp6/dC2PmfKrXRQV/AZFIsqM7JojmllUrfWxnMnha4sFAe+xNyF6ad7BRRQeGkuY4IxI5gYKGBBiN9N2FrpbdG72HhO+wJ1VuzrOkhUkWdx0QHffufIVBeYyx6i25HboL+QqmWcnTphx293xWPqIDLCp6dTS7izWg03uoG16fNDyGDE3v1PeqrxfjtRG/U3+QNcJGurHwvlnLw4Y9e3vTrF4L7Ox6kbmlOVzk4YEMLC1x7VJx2egqbW6UQp2PQLIotvqq35XFaAEdapWbT6nBv61YMjzkBdJOx/Soni1WGXLg8ZU9SKo/wBXCyEHqCRVxlzdQl9Q+dUHNcX9qWHnepRP7X3LXjEajvaqvxEoDm1R0x7Hoa8dDICepqE6a+HM35LN600xOZNL61W8TgyLkbVqwWYtGwJ6X3P8xUol16dZjgi67ix7Vd+BuK1mRYJmtOotvtzAB8Q82t1HzpDBGJo9S2O1Is4yuQDWqm47jrt32qcMvjVeTCZR2iiuf8AccGQjDYlvH0jkP3v7Lf2vI9/fr0CtEu2PLGy6r2iiipQKKKKAooooCiiigKKKKAooooPKrWY4meRii/ZRgkG3xG3qOg9BVlqDmeWrMpFyrW2deo/mPQ1XKWzpbCyXtXMVhYoY2ubuRsNr+5qFDmKxR2Lb1rxPBONZjaaErfqTICfcaT+9bYvo5ka3MxNh3CJ+xY/wrj8cv+NX8mEnqtZ1nru2lbkk2UDcknoAPOn3DHADP9tje42iv5jqxHT+6P8AKrTknCeGwx1Il3/G51N8uw+QFO66Y4a9cs+bfWLjOp4JXgcm6MVPrbofmLH51tEg3q98W8Hx4q8inRKFtq7NboG/mN/eueYfUjGOUWdTpN/MdjXPPHTtx5zKNOLt32rXhmv0NvKrC+WK6Ha9VjH5a0ZLISPSqRemgLEWasJMv1jsf3FaslzXV4HFj/r9KsuGy7XunXuKaNqS0jwPZunnVkyHERufImsuIMp8PiHTpVVhZoWuL2/b+dW9R4u2ZZSbXtVWzPLSpuBVs4fz9XUK/l/q1MMflaPuLCo8Qo3DGbGCUKx+zO3t/lVlx+cMZAF+H9KRZ1lK6yqH8+9aMpxzK3JkUlvu2BNwO3n2NL/SZ16z4hwAEnMj2vvt1BrqvB+cDE4WOW/jtpceTrsfz6j0IqjYLBLOCFO/kaWZbmc+XzmRAWQm0sf4wO48nHY/I1bDPV7c+XDc6dmoqFlOZR4iJJom1I4uPMeYI7EHYiptaGQUUUUBRRRQR8ZikjALmwZlQdd2dgqjbzJArSmZxGTlBvHcrax6qqMRe1vhkQ/OtPEWDkliURhS6yxyBWOkNypVfTextcKRe1IcfkGIlWZ9KK8wnGkSH7Pm4eONDqA3N4gTbpq2vbcLfqHmPKvb9qp+acLylZY4o4uU76go0DS31cJqGpCE+0uSVGo9b9QW3D2UtG80sqrzJGXS19TBBBh1K3tt9pG5sNjsfYGTYxBKsN/GyM4G/wAKFAxv0G8ifn6VvDjzFUmbhadmZgkavy5UaXWNWI5mIw8gDHQSAY43Q6gQt7AFakjhV7JyyYwzMkyMUtyJNOpVESqikmNbWG2uQ/eNwtUU6t0PcjcEbqbHr1961rjEPRg3jKeHxWYXuDboQQQb9LVVcw4an0BI447I8zx6SimMviOYlmKEqNFhZLb7E23EjD8NutwkccZGKkmEq6blZRNY2AvqXmKLHrbrQWrUPOg+dUzCcKSFodcUSRIU5sWrWspSHFKzkabOWaWL4hchbncAUzlyaT6pDCVWTlspeMt4ZUUnwXIsRYggEWJUA2BuAbSY5BIkNyXcFgArEBR3YgWUdgSRc7CpZqt8O8PtFKJXWPVy3UEAFkV55HWMG19CIyoOnTpTU5NCfjUyf81mlA9hISB8hQZSZvCp081S34FOt/8ApW7fpVd4kyZMX9pHFMJPx6AgYDsyyspPoQL/AC2q2RRKosqhR5AAD9KzqLNplsu45nlcpVyjqV0nSQzXO3mLC35n3rPPctHxLuDTvjrKD/vMY3UWkA7r2b5dD6e1VyLMZGGkaQvcsaz5zVbMMvlNqpmOEKNcdR+tPeGM83AJ3rzNIwR1Dewtaq/IhjcMvQ9f51G9rWadPxOIR1swvfpVMz/LAjahtftUrLc3IQkHbz71FlmeW7fqagkJ1kMbA/dJ39PUVYIsxcAgk9P27e9KMzwTBCT08qveW5AmNwkU+rTKyWdgLq7JdSWHndeo/WrSXJXLKY3tTmkZz717ioSzB1uHTxBhsQR3pjjsnkgfRItr/Cw3Vh6H+B3plgcoOnUN7iq9xbcsR8HKHjGKiABBCzxjbQ56OB2R/LoD87MM/wCWyalALkfwqsJi2wkxcLqQ3SWM9JIz1Hv3B/maa5ghQrIrl4pFBif8Snz8mF7EVa9zauPV1Wr6PM6OHxP1dz9jOfDfoknb5NbT76fWuqVyPiDJCi6l3B3B7g+h7G9dG4TzFp8LFK4s5WzerKSpPzIv866ceW+q4c2GruG9FFFdXEUUUUC3O8a8SKUClnkRBrvYcxwt7Dc2ve21+lx1pCnFU6xhnSIs+kJp1AKzYnkktrYahchgLr+G/wB6rJmmKSKMySW0qQd9I3uLbsQAb971CxmZ4RRKrNEeXGxkTwfAtiwOqy2uwvc2GoXteggwZxiBKOdy4kSKV5BbUWETqA40udIsd13I3G+xrVguI55GEJWNJTJpDuDp08hZR4FkJ1kNbTrGwLdrVOlxuBjFjyRyFZggVCYgqXYKB0bQbkDex8qzwv1GQCFEhIkUPy9CWK3OklbW6hrX8jQLc64skgMxVEkSOKUg2K/aQQc0rcsSynpcKALjcnatuKz6eKRlfkkR8kuAHUv9YmkQKl2PiAUWuDrO3hvs7bLISxcxRliLFtC3IClbXt00kj22rD+iIeecQUVpSqqGYA6Qmu2m4up8bXt6UCI8UTWjssV5tBj+L7IPOkdpN/E3jvtp3Vh2vWh+IZ9ckoMZEMT8xLtpfk4h0Ypv4WIU9b2Itv1qxY3IoJVZWiSzurvZVHMZGDDVt4tx3qUmDjC6QiBdOmwUAafw2t8PpQVTMuKJDI0IsEPijkXwm0OLgikU+Mk3MhF7KNj1G9bsTxXIszoqo6aZDG1ivignhidT4iW8chF9K7qbautWA5XCS5MMd3vrOhbvcAHVtvcAday/o2HUX5MepvibQtz06m1z0FBWcdxROh5QWIyiR0vokKyMvI0qqhroSJh4mNhp9dpCcSTESSmNVhvIqtsSrxy8tQyiS7lm2sAuk2BPemmcZDFiBpkB076gAni1AA3JUkGygXUg+tSjl0JLsYo9Ug0udC3ceTG3iHoaCv5NnMs2KiV/BaLEq6AjSXhxGFUNYM1jZm2ubXIvVqqLDl8S20xouk3XSqjSSLXFhsbbe1S6DEiue8W8PjDuJYzaJzYr+BtzYf2TvbyrodJ+LsNrwzj8NmHyYfwvVM5uL8eVmTn6xK5sAfmaRZgult+1XjKcrOnXVP4misW96ztq/wDEfCyyqJoFCy2BZRZRKLfo/ke/f0p8Y0+HsD0OxB7g/OuncOYnmYWCT8USH5lRf9apXEmX8vGSDtJaQf8A62P+JWPzrrnjPXDizu/jUKbD64Hpx9E2PvHLAbfZtqX2e9/8Q/Ws8TgdGHYd7Ui+j3E8vMSnaRGXfzFmH/aarhdZL8s3jXRs3y5J4zG/fcEdQR0I/wBdL1VskmeGVsNL1B+XoR/ZNXelHEOUCVdaj7RN0Pn5qfQ/vXTPHfcZ+PPXV8VDivLQG1269aW8L5tHGGweJ/qHN0bvE57+im59je+xNPjikaO0tyx637W2tVWzHKwSWXpXCXVarjuadEg4e8OgyB07Eje352PvTfA4VY0WNRZVFh/P3PWqHwBxWI2XBzNZSbQuex/4Z8h+H8vKuiVow1rcZM7lvWT2iiirqCiiigV8SwvJA8SIWaQaOqgLq+81yPCPS59KVz8JFkki5oEZE5jHLOpXxXM1Fm12cKZJLABeo32ubRRQV7FcLhwAZLDmSObL/wAXDvDb4tra9V/S1u9bMJkkqzQzNMl0QI/LjZDMArgBryMCoLBhtcEGxsxFT82zFYI+YwJ8SoALAs0jqii7EAXZgLkgVlh8crAavs3uAUZkLKzC4U6SRcjfYmgmUVBTNYS2gTRlrFtOoXsL3Nr9BY/lWzB4+KW5jkR9Js2hg1j5G3pQSqKgDOMOS4E0d0F38a+AAkXO+24tR/TOH0o3OitIbIda2c3tYb7m+1BPoqDl+YpMLqbHxeEkagFdkvYHoSpsajvxDAJuRrXUI3kc6ltGIjEDr38J+1H5GgbUUnk4jg5kMaOrtPq0aHS2mO2prlhexIFhc+mxtuGe4bQZOfFoDadXMW2q17Xv1sL28qBlRS1s+wwbQcRFquF08xb3JsBa/W+1a/8A1Fh+YIjKquxcKCy+LlFQ9iCRcFgLGx67bGgbVoxkOuN0/EpH5iiPEIxsrKTpDWBB8JvY+xsbH0r3EToilnZVUdSxAA+ZoK1kT3jZT1FUri3DHUxNXDB4hRiJdyEJ1KWVkuG8gwBIvfe1qW8RGJgQBqNZcppuxu/9OvoyxnMwEQ7oWQ/Ikj/CVrDj/BnTHMvVDpPs3T9f3qr8B5nJhsQYjG5gmO5CMRG9tm2GwOwPyParvxJioJIJIjNEGK7AyIDqG46nzFdp+WLNfwzaJSGiHfUtx+Vc6xpOHxUc1vhcNbz0kXH5Xq05Jm8Swgag7L5MGAHlsSB7VXOIsSJ2O24O1cb60ybdbw06yIroQVYAgjuDW6uV8GcSPhZVhlb7BjY3/wDbJ6MPJb9R8+xv1StGOXyjJnjcbpX+JOHBMC8dlk8uz+/kfWqNMsvMXDkaHJIOrtYfyrrNJeIshWcKy2WVDdGt/hPp+1Uzw33F+Pls6rmfEPD5jUkeLz9a6NwDjpJsFE0ty4utz1YKxAJ8zYC5qO+TPIuiRNx3v4fz7j5U9yzBLDGsa9B+pJJJ/MmmEsqeXLGyaTKKKK6uAooooCiiigg5thmkiZFEZLWFpkLowuLhlBF7rcehsbG1jX34KZlS85DpGQpC+FJVd2hkUMSbRCR1Ckm40gk2pzxJinji1I2i7orPp1ctGkUM9umwJ3Oy/EdgaSZTzJsXDJI7Okcc2glFCsVnVEk+HZmjPVbAi5FgxuGyXhF9cWmUcqEjlq2slVGGeEqAG09XaTUQSSbdAKZYHIQjl2ckcuFAFLJY4fm7kq24PM+E7bd6WZlhXGIxEwZiwMCICqmyNIhdVIXVpJ3O/UDyqNis4xiIH1E8xZGI5SjlCLEwp4NrFzFI5HMJBZQdlvQTMbwgXWMCUAxtKwsrC7SYqKdb6WBABjsbG5vcEWqVgsjeKQSxmMM4IlDcx/v6tSszFtVtjfZrKdrWKbBZ5ipCgE0QuAY2kKqJmOImUxtojYcxI0jDKhBVmN7gVLlzPEIsUrymzzupjCRq5VZWRAgZSX2sWFwxG62tYgy4dyD6s0hV9QlLM4NydZdiCpJOldLadPTwgi1zdZieDpH0AzKoiEnLKqysxfE4ecFyHB+KEKxUgtqJupq30UFcHDF9ywUtHMsmku5YziIatUjE3CxAb9fSsYOGpDPFiJZE1RMnhRCFKxwYiMbFjZi2ILX3sFVd+tWWigrL8JkoU5ouY50vo/8AkzrLfr93Tb167VJjyR1nEyup8cpZWU/BNybgWPxAwjrsbmntFBW+G8nkjilN+W7toi1KrGKCNmESEBrGyliN/vbjqKkQcOsDrfESvJ2crESP7utG0ey2p5RQVPi7JZTEJI5ZWdPi3UMV9Cig7Hfb1qmsHksQ8h9TLIf3auumqVxfw6U1TQDY/Go7H8Q9PPy61yzxvsd+LOfrVDznLYm+IBmPUkav3rpn0eZiJcKoNtcZ5bEADVYDS23mpHzBqv8A1RDEGRewuPO/8aZ/RzgDG056K2iw9Rr/AIEVXjv5adOWT47LuLsmaCUyoPsnO9vuMe3oD2/LypU0sa2JW5PT3rqksYZSrAFSLEHcEGqJxDwwYJFmjDPErXKi7NH/ABZe/mLfOpzw+4rx8v1VazfDMfGyEDuAO1Xz6Os4M+HKMbtCQl+7Lbwk+trj5UuxuG5setLHUPPYg96n/R9lBgSYkfG4sfMKv7XJ/Wow6yTzasWuiitBxCBtJZdQFytxe17Xt1tfvXdlb6KgY3NoopIYpHCvOxWMfiKqWPtsPzIHUipM+JRPjdVv01MB+9BuorXHKrDUCCPMEEfnXpcWvcW877UGdFYO4AuSAPM7VnQFFFFAUUUUBWjE4dXUqwuD5Eg7G/UEEG/lW+igjYLCJEuhFCrcmw7liSxJ6kliSSdySTUmiigKKKKAooooCiiigKKKKArw17RQKTkMesspKg9VFrb+XlU/DYdUXSosK3CiomMiblb69oooqUIgwEd76F89hYH5DY1JAtWVFB4aoE2QzHESFUmIjdbO8jDmh2Qub7WUAnZfw/Kr/XhqmWEy9Vym1PxeTSYuGZ0Okk2wzNfVHyHLRuOwDSC/qmkH0ww2fRT4nBSsQjCCXmq+3KdhDdSTsDdWHrarpXtWk0so8cmvFYmLDj7OYRXTdFIAczSqbbBlMceodW37XrGNl+rvlk4syTRxIt2OuB5Yymlup0xtoLbG6E1eqKkc8zwzyYOSGYMThWRXcg/7Q4lj5bi3UcoiRuwdh+E1fcNiBIodCCpvY+diR+4NbqKD/9k=',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
                
//               </View>
//             </View>
//           </View>
//           <View style={{flexDirection:'row', alignItems:'center'}}>
//           <View>
//             <Text style={itemVertical.Title}>Selengkapnya</Text>
//           </View>
//           <View>
//             <ArrowRight2 size="24" color="#FF8A65"variant="Linear"/>

//           </View>
//           </View>
//         </View>
//         {/* PENYAKIT 3 */}
//         <View style={itemVertical.listCard}>
//         <Text style={itemVertical.Title}>
//                     C. Spondyloarthritis 
//                   </Text>
//           <View style={{...itemVertical.cardItem, backgroundColor: 'transparent',}}>
//             <Image
//               style={{...itemVertical.cardImage,}}
//               source={{
//                 uri: 'data:image/jpeg;base64,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',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
                
//               </View>
//             </View>
//           </View>
//           <View style={{flexDirection:'row', alignItems:'center'}}>
//           <View>
//             <Text style={itemVertical.Title}>Selengkapnya</Text>
//           </View>
//           <View>
//             <ArrowRight2 size="24" color="#FF8A65"variant="Linear"/>

//           </View>
//           </View>
//         </View>
//         {/* PENYAKIT 4 */}
//         <View style={itemVertical.listCard}>
//         <Text style={itemVertical.Title}>
//                     D. Bursitis 
//                   </Text>
//           <View style={{...itemVertical.cardItem, backgroundColor: 'transparent',}}>
//             <Image
//               style={{...itemVertical.cardImage,}}
//               source={{
//                 uri: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2554024.jpg',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
                
//               </View>
//             </View>
//           </View>
//           <View style={{flexDirection:'row', alignItems:'center'}}>
//           <View>
//             <Text style={itemVertical.Title}>Selengkapnya</Text>
//           </View>
//           <View>
//             <ArrowRight2 size="24" color="#FF8A65"variant="Linear"/>
//           </View>
//           </View>
//         </View>
//       </ScrollView>
//         <View style={styles.listCategory}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View style={{...category.item, marginLeft: 10,}}>
//             <Text style={{...category.title, color: colors.black()}}>
//             INFORMASI KESEHATAN 
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//       </View>
//       {/* HALAMAN 2 */}
//       <View style={itemVertical.listCard}>
//           <View style={itemVertical.cardItem}>
//             <Image
//               style={itemVertical.cardImage}
//               source={{
//                 uri: 'https://akcdn.detik.net.id/community/media/visual/2019/08/02/de1d85cf-090f-46a3-856f-74956027aa9b_169.jpeg?w=700&q=90',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{gap: 5, width: '100%'}}>
//                   <Text style={itemVertical.cardTitle}>
//                   Sering Nyeri Sendi Habis Olahraga? Mungkin Ini Penyebabnya...
//                   </Text>
//                   <View style={{flexDirection:'row', alignItems:'center'}}>
//                  <View>
//                   <Text style={itemVertical.TitleNews}>Selengkapnya</Text>
//                 </View>
//                 <View>
//                   <ArrowRight2 size="15" color="black"variant="Linear"/>
//                 </View>
//                 </View>
//                 </View>
//               </View>
//               </View>
//               </View>
//               <View style={itemVertical.cardItem}>
//             <Image
//               style={itemVertical.cardImage}
//               source={{
//                 uri: 'https://i.pinimg.com/236x/7a/a5/8f/7aa58f5efe6d8d7012aa21c6cc5d02ad.jpg',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{gap: 5, width: '100%'}}>
//                   <Text style={itemVertical.cardTitle}>
//                   12 Obat Nyeri Sendi yang Ampuh, Bisa Ditemukan di Apotek...
//                   </Text>
//                   <View style={{flexDirection:'row', alignItems:'center'}}>
//                  <View>
//                   <Text style={itemVertical.TitleNews}>Selengkapnya</Text>
//                 </View>
//                 <View>
//                   <ArrowRight2 size="15" color="black"variant="Linear"/>
//                 </View>
//                 </View>
//                 </View>
//               </View>
//               </View>
//               </View>
//               <View style={itemVertical.cardItem}>
//             <Image
//               style={itemVertical.cardImage}
//               source={{
//                 uri: 'https://akcdn.detik.net.id/community/media/visual/2021/01/19/3-ramuan-alami-ini-ampuh-jadi-obat-untuk-lidah-mati-rasa-1_169.jpeg?w=700&q=90',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{gap: 5, width: '100%'}}>
//                   <Text style={itemVertical.cardTitle}>
//                   7 Makanan yang Ampuh Atasi Nyeri Sendi Yang Mudah Ditemukan...
//                   </Text>
//                   <View style={{flexDirection:'row', alignItems:'center'}}>
//                  <View>
//                   <Text style={itemVertical.TitleNews}>Selengkapnya</Text>
//                 </View>
//                 <View>
//                   <ArrowRight2 size="15" color="black"variant="Linear"/>
//                 </View>
//                 </View>
//                 </View>
//               </View>
//               </View>
//               </View>
//               </View>
//     </ScrollView>
//   );
// };
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
    height: 150,
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
// STYLE HALAMAN HORIZONTAL
// const itemHorizontal = StyleSheet.create({
//   cardItem: {
//     width: 300,
//     paddingLeft : 16,
//   },
//   cardImage: {
//     width: '100%',
//     height: 260,
//     width : 300,
//     borderRadius: 5,
//   },
//   cardContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//   },
//   cardInfo: {
//     justifyContent: 'flex-end',
//     height: '100%',
//     gap: 10,
//     paddingLeft: 35,
//     paddingBottom: 70,
//     // maxWidth: '60%',
//   },
//   Title : {
//     fontSize: 16,
//     color: colors.white(),
//     borderRadius: 25,
//   },
//   cardTitle: {
//     // paddingBottom: 100,
//     // paddingLeft: 100,
//     fontFamily: fontType['Pjs-Bold'],
//     fontSize: 14,
//     textAlign: 'center',
//     color: colors.black(),
//   },
//   cardText: {
//     fontSize: 10,
//     color: colors.black(),
//     fontFamily: fontType['Pjs-Medium'],
//   },
//   cardIcon: {
//     backgroundColor: colors.white(0.33),
//     padding: 5,
//     borderColor: colors.white(),
//     borderWidth: 0.5,
//     borderRadius: 5,
//   },
// });