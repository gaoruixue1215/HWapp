import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,AsyncStorage,TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';

//引导页
export default class SwiperPage extends Component {
    start = ()=>{
        AsyncStorage.setItem('isInstall','true',()=>{
            console.log('start end');
        });
        this.props.afterInstall();
    }
    render() {
        return (
            <Swiper style={styles.wrapper} autoplay={true}>
                <View style={styles.slide1}>
                   <Image style={styles.img} source={require('../../images/slide.jpg')}/>
                  
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../images/slide2.jpg')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../images/slide3.jpg')}/>
                    <TouchableOpacity style={styles.start} onPress={this.start}>
                        <Text style={styles.btn}>开始体验</Text>
                    </TouchableOpacity> 
                </View>
            </Swiper>
            
        )
    }
}
const styles = StyleSheet.create({
    // wrapper:{
    //     flex:1
    // },
    img:{
        width:'100%',
        height:'100%'
    },
    slide1:{
        flex:1,
        height:'100%',
        alignItems:'center'
    },
    start:{
        bottom:150,
        width:100,
        height:40,
        backgroundColor:'#fff',
        borderRadius:20,
    },
    btn:{
        fontSize:16,
        lineHeight:40,
        color:'blue',
        textAlign:'center'
    }

})
