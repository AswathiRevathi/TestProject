import React, {Component} from 'react';
import { StyleSheet, View,ToastAndroid,SectionList, TextInput,TouchableOpacity,Text,Picker, Alert,Image, Button, FlatList } from 'react-native';
import ListItem from './src/ListItem';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';


export default class App extends Component {

state = {
    placeName: '',brands: "0",text:'',
    dataArray:[],LIST:[{label:'e',value:'Amazon'},{label:'es',value:'Flipkart'}],popupVisible:false,sectionListVisible:false,flatListVisible:true,
    storeData: [
      {
        "brandName": "Flipkart",
        "brandIcon": "http://pluspng.com/img-png/logo-flipkart-png-flipkart-logo-5000.png",
        "data": [
          {
            "id": 1,
            "price": "Rs 1922",
            "key": "a",
            "product_name": "Mi Band 3 (Black)",
            "rating": 3,
            "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyb3zXtfLjEKLvu_USQTWuv3i-s3CbjDhpppZxRy2i4O-EmID"
          },
          {
            "id": 2,
            "price": "Rs 10522",
            "key": "b",
            "rating": 4,
            "product_name": "LG 24 inch Gaming Monitor",
            "images": "https://images-na.ssl-images-amazon.com/images/I/71LBXoDR0cL._SL1500_.jpg"
          },
          {
            "id": 3,
            "price": "Rs 7922",
            "key": "c",
            "rating": 3,
            "product_name": "Orions Printed Ladies Hand Bag",
            "images": "https://4.imimg.com/data4/AB/ST/MY-5519173/ladies-bags-500x500.jpg"
          }
        ]
      },
      {
        "brandName": "Amazon",
        "brandIcon": "https://pngimg.com/uploads/amazon/amazon_PNG13.png",
        "data": [
          {
            "id": 1,
            "price": "Rs 1922",
            "key": "a",
            "product_name": "Mi Band 3 (Black)",
            "rating": 3,
            "images": "https://cdn.pixabay.com/photo/2015/09/27/17/51/antique-961102_960_720.png"
          },
          {
            "id": 2,
            "price": "Rs 10522",
            "key": "b",
            "rating": 4,
            "product_name": "LG 24 inch Gaming Monitor",
            "images": "https://images-na.ssl-images-amazon.com/images/I/71LBXoDR0cL._SL1500_.jpg"
          },
          {
            "id": 3,
            "price": "Rs 7922",
            "key": "c",
            "rating": 3,
            "product_name": "HYKL",
            "images": "http://pngimg.com/uploads/sandals/sandals_PNG9709.png"
          },
          {
            "id": 4,
            "price": "Rs 4922",
            "key": "bb",
            "rating": 2,
            "product_name": "BXXY Man Tan Height Increasing Traditional Punjabi Jutis/Nagras",
            "images": "https://images-na.ssl-images-amazon.com/images/I/71QPygmFk4L._UX500_.jpg"
          },
          {
            "id": 5,
            "price": "Rs 420",
            "key": "op",
            "rating": 5,
            "product_name": "Kogan 26800 mAh Power Bank",
            "images": "https://images.philips.com/is/image/PhilipsConsumer/DLP6006_97-IMS-en_IN?$jpglarge$&wid=1250"
          },
          {
            "id": 6,
            "price": "Rs 30000",
            "key": "oyy",
            "rating": 3,
            "product_name": "Seiki 50” 4K UHD LED TV",
            "images": "http://pngimg.com/uploads/table/table_PNG6972.png"
          }
        ]
      }
    ]
}
componentWillMount(){
  var dataCollection=this.state.storeData;
  var tempArray=[];
  for(var i in dataCollection){
tempArray=tempArray.concat(dataCollection[i].data)
this.setState({
  dataArray: tempArray
  
});
  }




}
clickHandler = () => {
  //function to handle click on floating Action Button
  this.setState({
    popupVisible: true,
  
   
  }, function () {

  }); 
};

placeSubmitHandler = () => {

  if(this.state.text==''){
    ToastAndroid.show('Please enter product name', ToastAndroid.SHORT);

  }
  else if(this.state.brands== "0"){
          ToastAndroid.show('Please select an option', ToastAndroid.SHORT);

  }
  else{

var totalArray=this.state.storeData;

for(var i in totalArray){

 
if(totalArray[i].brandName==this.state.brands.toString()){

  totalArray[i].data.push({
    "id": Math.random(),
    "price": "Rs 30000",
    "key": Math.random(),
    "rating": 3,
    "product_name":this.state.text,
    "images": "http://textiletrends.in/gallery/1547020644No_Image_Available.jpg"
  
  });


  this.setState({
    storeData: totalArray,
  
   
  }, function () {



    

  }); 


  this.setState(prevState => {
                return {
                      dataArray: this.state.dataArray.concat({
                  "key": Math.random(),  
                  "price": "Rs 30000",
                  "rating":3,
                  "product_name":this.state.text,
                  "images": "http://textiletrends.in/gallery/1547020644No_Image_Available.jpg"
            
                 })
                 }
             });
             this.setState({
              text: '',popupVisible:false,brands:"0"
           });
    

}


}

  }}
    



placeNameChangeHandler = (value) => {
  this.setState({
      placeName: value
    });    
}

placesOutput = () => {
   return (
  


    <FlatList style = { styles.listContainer }
       data = { this.state.dataArray }
       keyExtractor={(item, index) => index.toString()}
           renderItem = { info => (
          <ListItem 
                placeName={ info.item.product_name }
                price={info.item.price}
                image={info.item.images}
                rating={info.item.rating}
                        onItemPressed={() => this.onItemDeleted(info.item.key)}
           />
         )}
    />
    )
}
_renderItem = ({item, section}) => (

<ListItem 
placeName={item.product_name }
price={item.price}
image={item.images}
rating={item.rating}
        onItemPressed={() => this.onItemDeleted(item.key)}
/>

)
  
_renderSectionHeader = ({section}) => {
    return (
      <View style={styles.sectionHeader}>

        <Image source={{uri:section.brandIcon}} style={{width:150,height:100}} resizeMode="contain"></Image>

      </View>
    )
}
sectionOutput = () => {
  return (
 
    <SectionList
    sections= { this.state.storeData }
    renderItem={this._renderItem}
    renderSectionHeader={this._renderSectionHeader}
/>





  
   )
}

onChooseList=()=>{
  if(this.state.flatListVisible==true){
    this.setState({
      flatListVisible: false   });
  }
  else{
    this.setState({
      flatListVisible: true   });
  }
 

}


onItemDeleted = (key) => {
   this.setState(prevState => {
      return {
         dataArray: prevState.dataArray.filter(place => {
            return place.key !== key;
      })
    }
    })
   
    


}

render() {
  let modalContent = null;
  if(this.state.flatListVisible==true){
          modalContent=(
            <FlatList style = { styles.listContainer }
            data = { this.state.dataArray }
            keyExtractor={(item, index) => index.toString()}
                renderItem = { info => (
               <ListItem 
                     placeName={ info.item.product_name }
                     price={info.item.price}
                     image={info.item.images}
                     rating={info.item.rating}
                             onItemPressed={() => this.onItemDeleted(info.item.key)}
                />
              )}
         />
          )
  }
else{
  modalContent=(
    <SectionList
    sections= { this.state.storeData }
    renderItem={this._renderItem}
    renderSectionHeader={this._renderSectionHeader}
/>
  )

}



   return (
    <View style={ styles.container }>
       <View style = { styles.inputContainer }>
       <PopupDialog width           = {0.5} height = {0.3}
    ref             = {(popupDialog) => { this.popupDialog = popupDialog; }}
    visible={this.state.popupVisible}
>
<View  style  = {{ width: '100%', alignItems: 'center',margin:10 }}>
<Text style={{fontWeight:'bold',fontSize:12}}>Add products</Text>
<TextInput
        style={{height: 40,width:'80%',margin:10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        placeholder='Enter product name'
      />
      <Picker
  selectedValue={this.state.brands}
  style={{height: 50, width: '100%',margin:10}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({
      brands: itemValue,
    
     
    }, function () {

    })
    
    


  }>
      <Picker.Item label="Please select.." value="0" />

  <Picker.Item label="Amazon" value="Amazon" />
  <Picker.Item label="Flipkart" value="Flipkart" />
</Picker>
<Button  onPress = { this.placeSubmitHandler } title="Add Product"></Button>
</View>
</PopupDialog>
        
            <Image source={{uri:'https://www.searchpng.com/wp-content/uploads/2019/02/Back-Arrow-Icon-PNG-715x715.png'}} style={{width:30,height:40,marginLeft:10,justifyContent:'flex-start'}}></Image>

       
        <TouchableOpacity   onPress={this.onChooseList}
 >
      <View style={{justifyContent:'flex-end',flex:1,height:50}}>

  <Image source={{uri:'https://static.thenounproject.com/png/99970-200.png'}} style={{width:50,height:50,justifyContent:'flex-end'}}></Image>
</View>
  </TouchableOpacity>
 
      
        </View>

       
            <View style = { styles.listContainer }>
        { modalContent }
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            
             source={{
uri:'https://4.bp.blogspot.com/-gfkXY65adsU/WepEU5oTR5I/AAAAAAAAADI/ZhPMS8-hN6ALM_MT95OdTUWfCz5qw0iSQCLcBGAs/s400/FB.png',
            }}
            
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
    	  paddingTop: 15,
    	  justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom:50
      }, TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
    
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
      },
      inputContainer: {
      flexDirection: 'row',
      
      justifyContent:'space-between',
      width: '100%',
      marginBottom:10
      },
      placeInput: {
      width: '70%'
      },
      placeButton: {
      width: '30%'
      },
      listContainer: {
        marginBottom:20,
      width: '100%'
      },
      sectionHeader: {
        height: 50,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 10
    },
});
