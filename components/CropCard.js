import { Image, StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import lettuce from '../assets/images/lettuce.jpg'
import { FaClock,FaChartBar } from "react-icons/fa";
import { TouchableWithoutFeedback } from 'react-native-web';

const CropCard = ({name,mode,week,img,nweeks,stage}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.textBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.smallName}>{mode}</Text>
        <View style={styles.iconBox}>
            <View style={styles.week}>
                <FaClock size={12} color='#A37A70' />
                <Text style={styles.weekText}>
                     Week {nweeks}
                </Text>
            </View>
            <View style={styles.stage}>
                <FaChartBar size={14} color='#AC9852' />
                <Text style={styles.stageText}>
                      {stage}
                </Text>
            </View>
        </View>
      </View>
      <View style={styles.imgBox}>
        <Image 
            style={{height : '100%', width : 100}}
            source={{uri : img}}
            resizeMode = 'contain'
        />
      </View>
   
    </TouchableOpacity>
  )
}

export default CropCard

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    card : {
        height: 120,
        
        width : deviceWidth - 50,
        backgroundColor : 'white',
        borderRadius : 10,
        display : 'flex',
        flexDirection : 'row',
        paddingTop :15,
        paddingBottom :15,
       paddingLeft : 10,
       paddingRight : 10,
       shadowColor: "#000",
       marginVertical : 10,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
       
    },
    textBox : {
        flex : 1
    },
    imgBox : {
        width : 90,
        height : '100%',
        
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        overflow : 'hidden',
        borderRadius : 15,
       

    },
    textBox : {
        flex : 1,
        display :'flex',
        alignItems : 'flex-start',
        justifyContent : 'center',
    },
    name : {
        fontSize : 20,
        fontWeight : 500
    },
    smallName:{
        fontSize : 14,
        color : '#97A79A'
    },
    iconBox : {
        display:'flex',
        flexDirection :'row',
        height : 30
    },
    week:{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        borderRadius : 10,
        backgroundColor : '#F8EBEB',
        width : 90,
        paddingHorizontal : 10,
        marginTop :10
    },
    weekText : {
        color:'#A37A70',
        fontWeight : '600',
        
    },
    stage : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        borderRadius : 10,
        backgroundColor : '#FFF5D2',
        width : 100,
       
        marginTop :10
    },
    stageText :{
        color:'#AC9852',
        fontWeight : '600',
        fontSize :12
    }
})