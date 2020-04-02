import React, { Component } from 'react';
import {View, Text,StyleSheet,TextInput,Image,ScrollView} from 'react-native';

const styles = StyleSheet.create({
    background1:{
        height:140,
        backgroundColor:'white'
    },
    search:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
        marginBottom:10
    },
    search1:{
        width:'86%',
        height:50,
        backgroundColor:'#eeeeee',
        borderRadius:5,  
        flexDirection:'row',
        alignItems:'center',
    },
    search2:{
        height:50,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 18,
        lineHeight: 50
    },
    box:{
        height:50,
        width:'96%',
        marginTop:15,
        paddingLeft:'4%',
        flexDirection:'row'   
    },
    box1:{
        height:50,
        flex:5,
        alignItems:'center'
    },
    txt:{
        fontSize:20,
        height:50,
        lineHeight:50
    },
    zi:{
        color:'red'
    },
    fl:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        marginTop:10
    },
    bx:{
        width:220,
        height:280,
        marginBottom:10,
        padding:10,
        backgroundColor:'white'
    },
    img:{
        width:100,
        height:120,
        marginTop:30,
        marginLeft:'25%',
        marginBottom:35
    },
    img1:{
        width:130,
        height:120,
        marginTop:30,
        marginLeft:'21%',
        marginBottom:35
    } 
});

export default class List extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.background1}>
                        {/* 搜索框 */}
                        <View style={styles.search}>
                            <View style={styles.search1}>
                                <TextInput 
                                    placeholder="请输入商品名称" 
                                    placeholderTextColor="#a0a0a0" 
                                    style={styles.search2}
                                />
                                <Image 
                                    source={require('../images/search.png')} 
                                    style={{width:30,height:30,marginLeft:'42%'}}
                                /> 
                            </View>
                        </View>
                        {/* 第二部分 */}
                        <View style={styles.box}>
                            <View style={styles.box1}>
                                <Text style={[styles.txt,styles.zi]}>综合</Text>
                            </View>
                            <View style={styles.box1}>
                                <Text style={styles.txt}>销量</Text>
                            </View>
                            <View style={styles.box1}>
                                <Text style={styles.txt}>新品</Text>
                            </View>
                            <View style={styles.box1}>
                                <Text style={styles.txt}>价格</Text>
                            </View>
                            <View style={styles.box1}>
                                <Text style={styles.txt}>信用</Text>
                            </View>
                        </View>
                    </View>
                    {/* 第三部分 */}
                    <View style={styles.fl}>
                        <View style={styles.bx}>
                            <Image source={require('../images/shanghaojia.png')} style={styles.img}/>
                            <Text style={{color:'#666666'}}>
                                Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳 拷贝
                            </Text>
                            <Text style={{marginTop:15,color:'red'}}>36.00</Text>
                        </View>
                        <View style={styles.bx}>
                            <Image source={require('../images/shupian.png')} style={styles.img1}/>
                            <Text style={{color:'#666666'}}>
                                Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳 拷贝
                            </Text>
                            <Text style={{marginTop:15,color:'red'}}>36.00</Text>
                        </View>
                        <View style={styles.bx}>
                            <Image source={require('../images/shanghaojia.png')} style={styles.img}/>
                            <Text style={{color:'#666666'}}>
                                Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳 拷贝
                            </Text>
                            <Text style={{marginTop:15,color:'red'}}>36.00</Text>
                        </View>
                        <View style={styles.bx}>
                            <Image source={require('../images/shupian.png')} style={styles.img1}/>
                            <Text style={{color:'#666666'}}>
                                Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳 拷贝
                            </Text>
                            <Text style={{marginTop:15,color:'red'}}>36.00</Text>
                        </View>
                        <View style={styles.bx}>
                            <Image source={require('../images/shanghaojia.png')} style={styles.img}/>
                            <Text style={{color:'#666666'}}>
                                Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳 拷贝
                            </Text>
                            <Text style={{marginTop:15,color:'red'}}>36.00</Text>
                        </View>
                        <View style={styles.bx}>
                            <Image source={require('../images/shupian.png')} style={styles.img1}/>
                            <Text style={{color:'#666666'}}>
                                Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳 拷贝
                            </Text>
                            <Text style={{marginTop:15,color:'red'}}>36.00</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}



