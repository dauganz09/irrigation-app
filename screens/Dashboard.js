import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import CropCard from '../components/CropCard';
import lettuce from '../assets/images/lettuce.jpg'
import squash from '../assets/images/squash.jpg'

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>My Crops</Text>
            <View style={styles.searchBox}>
                <TextInput placeholder='Search crop...' placeholderTextColor='#D8D8D8' style={styles.input}/>
                <FaSearch style={styles.searchIcon} size={20} color="#335F5E"/>
            </View>
            
        </View>
        <ScrollView style={{width : '100%' , flex : 1, display : 'flex',marginBottom : 20}}
            contentContainerStyle={{alignItems : 'center'}}
        >
                <CropCard name="Lettuce 1" mode='Sown' img={lettuce} nweeks={2} stage='Initial'/>
                <CropCard name="Squash 1" mode='Sown' img={squash} nweeks={4} stage='Crop Dev'/>
                <CropCard name="Lettuce 2" mode='Transplanted' img={lettuce} nweeks={5} stage='Mid-season'/>
                <CropCard name="Squash 2" mode='Transplanted' img={squash} nweeks={1} stage='Late-season'/>
            </ScrollView>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container : {
        flex : 1,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'flex-start',
        backgroundColor : '#EEF3ED',
       
        paddingTop : 20,
        paddingBottom : 20,
    },

    header : {
        display : 'flex',
        height : 150,
       
        width : '100%',
        display : 'flex',
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        paddingBottom : 10,
        paddingLeft : 20,
        paddingRight : 20,
        
        gap : 20
    },
    searchBox : {
        display : 'flex',
        flexDirection : 'row',
        width : '100%',
        height : 50,
       
        alignItems : 'center',
        borderRadius : 15,
        backgroundColor : 'white'

    },
    searchIcon : {
        padding : 10
    },
    input : {
        flex : 1,
        height : '100%',
        padding : 15,
        border : 'none',
        outlineStyle: 'none',
        fontSize : 18
    },
    headerText : {
        fontSize : 30,
        fontWeight : 500,
        color : '#335F5E',
        
    }

})