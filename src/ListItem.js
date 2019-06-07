import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

const ListItem = (props) => {
    return (
      


<View  style={{height:120,flex:1,flexDirection:'row',justifyContent:'space-between'}}>
    <Image source={{uri:props.image}} style={{width:100,height:100,margin:8}} resizeMode="contain"></Image>
  <View style={{flexDirection:'column',justifyContent:'flex-start',flex:1,margin:5}}>
  <Text style={{color:'#800080',fontSize:16,backgroundColor:"#ffffff00",fontWeight:'bold'}} >{ props.placeName }</Text>
  <Text style={{color:'red',fontSize:14,backgroundColor:"#ffffff00",paddingLeft:10,paddingRight:10}} >{ props.price }</Text>
  <Rating
  type='star'
  ratingCount={props.rating}
  imageSize={15}
  onFinishRating={this.ratingCompleted}
/>
  </View>
  <TouchableOpacity   onPress={ props.onItemPressed }
 >
      <View style={{justifyContent:'flex-start',flex:1}}>

  <Image source={{uri:'https://img.icons8.com/metro/420/delete.png'}} style={{width:25,height:25,margin:10}}></Image>
</View>
  </TouchableOpacity>
 
  

  </View>



    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#eee'
    }
});

export default ListItem;
