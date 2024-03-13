import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';

const listDetail = [
  {
    picture: require('../../assets/feed/beuty.png'),
    picName: 'Beauty',
  },
  {
    picture: require('../../assets/feed/fashion.png'),
    picName: 'Fashion',
  },
  {
    picture: require('../../assets/feed/kids.png'),
    picName: 'Kids',
  },
  {
    picture: require('../../assets/feed/mens.png'),
    picName: 'Mens',
  },
  {
    picture: require('../../assets/feed/womens.png'),
    picName: 'Womens',
  },
  {
    picture: require('../../assets/feed/fashion.png'),
    picName: 'Trendy',
  },
];

export default function CategoryCircle() {
  return (
    <View style={{paddingVertical:8,marginBottom:25}}>
      <FlatList
      
        keyExtractor={(category) => category.picName}
        data={listDetail}
        horizontal={true}
       showsHorizontalScrollIndicator={false}
        renderItem={({ item: category }) => {
          return (
            <View style={{marginRight:16}}>
              <Image source={category.picture} />
              
            </View>
          );
        }}
      />
    </View>
  );
}
