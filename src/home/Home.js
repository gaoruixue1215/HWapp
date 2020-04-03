import React, { Component } from 'react';
import {View, Text,StyleSheet,TextInput,Image,FlatList,Dimensions,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get('window');

const data=[
    {img:require('../../images/home01.png'),bg:'#ffcccc',text:'居家维修保养'},
    {img:require('../../images/home02.png'),bg:'#ffe1b1',text:'住宿优惠'},
    {img:require('../../images/home03.png'),bg:'#bfe6a8',text:'出行接送'},
    {img:require('../../images/home04.png'),bg:'#c3ddf2',text:'E族活动'}
]

export default class Home extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                {/* 搜索框 */}
                <View style={styles.search}>
                    <View style={styles.sbox}>
                        <View style={styles.sbb}>
                            <Icon name='search1' color='white' size={22}/>
                            <TextInput
                                placeholder="请输入您要搜索的关键字"
                                placeholderTextColor='white'
                                style={{
                                    height:35,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    fontSize: 15,
                                    lineHeight: 35,
                                }}
                            /> 
                        </View>
                        <Icon name='shoppingcart' color='#ffffff' size={33}/>
                    </View> 
                </View>
                {/* 轮播图 */}
                <View style={{height:200}}>
                    <Swiper
                        style={styles.wrapper}
                        height={200}
                        horizontal={true}
                        loop={true}
                        autoplay
                        paginationStyle={{bottom: 10}}
                        showsButtons={false}
                        dot={<View style={styles.dot} />}
                        activeDot={<View style={styles.dota} />}    
                    >
                        <Image 
                            source={require('../../images/lunbo01.jpg')} 
                            style={{width:width,height:200}}
                        />
                        <Image 
                            source={require('../../images/lunbo02.jpg')} 
                            style={{width:width,height:200}}
                        />
                        <Image 
                            source={require('../../images/lunbo01.jpg')}
                            style={{width:width,height:200}}
                        />
                    </Swiper>
                </View>
                {/* 正文 */}
                <FlatList 
                    data={data}
                    numColumns={1}
                    renderItem={({item})=>(
                        <View style={styles.gg}>
                            <View 
                                style={{
                                    width:70,
                                    height:70,
                                    backgroundColor:`${item.bg}`,
                                    borderRadius:35,
                                    marginLeft:10
                                }}
                            >
                                <Image source={item.img} style={styles.gg_img}/>
                            </View>
                            <Text style={styles.gg_font}>{item.text}</Text>
                            <Icon name='right' style={{marginTop:30}} color='#cecece'/>
                        </View>
                    )}
                />
                {/* 按钮 */}
                <Button style={styles.btn} onPress={()=>Actions.publish()}>发布需求</Button>
                {/* 版权 */}
                <Text style={{fontSize:12,color:'#808080',marginTop:30,marginLeft:190}}>
                    ©E族之家 版权所有
                </Text>
                </ScrollView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    search:{
        backgroundColor:'red',
        height:60,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
    },
    sbox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:35,
    },
    sbb:{
        width:'82%',
        marginRight:10,
        backgroundColor:'#fbb8b8',
        borderRadius:20,  
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
        marginLeft:20
    },
    dot:{
        backgroundColor:'#fff',
        width: 8, 
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    dota:{
        backgroundColor: 'red',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    gg:{
        width:width,
        height:90,
        backgroundColor:'white',
        padding:10,
        marginTop:5,
        flexDirection:'row',
    },
    gg_img:{
        width:'60%',
        height:'60%',
        marginLeft:15,
        marginTop:14
    },
    gg_font:{
        width:'70%',
        alignItems:'center',
        fontSize:16,
        color:'#5d5d5d',
        marginTop:25,
        marginLeft:30
    },
    btn:{
        width:'80%',
        height: 45,
        borderRadius: 8,
        textAlignVertical: 'center',
        backgroundColor:'red',
        color: '#fff',
        marginTop:20,
        marginLeft:'10%'
    }  
})
