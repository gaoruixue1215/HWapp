import React, { Component } from 'react';
import {View, Text,StyleSheet,FlatList,Image,Dimensions,TouchableOpacity,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import Iconn from 'react-native-vector-icons/EvilIcons';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';


const {width} = Dimensions.get('window');

const data=[
    {icon:'setting',text:'账户管理'},
    {icon:'enviromento',text:'收货地址'},
    {icon:'solution1',text:'我的信息'},
    {icon:'profile',text:'我的订单'},
    {icon:'qrcode',text:'我的二维码'},
    {icon:'database',text:'我的积分'},
    {icon:'staro',text:'我的收藏'}
];

const da=[
    {icon:'tool',text:'居家维修保养'},
    {icon:'car',text:'出行接送'},
    {icon:'user',text:'我的受赠人'},
    {icon:'wallet',text:'我的住宿优惠'},
    {icon:'flag',text:'我的活动'},
    {icon:'form',text:'我的发布'}
];

const options = {
    title:'请选择',
    quality: 0.8,
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class Me extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl:''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('image')
        .then ((res) => {
            if(res !== null){
                this.setState({imageUrl:{uri:res}});
                console.log('get sucess');
            }else{
                this.setState({imageUrl:require('../images/tx.jpg')});
            }
        })
    }
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (res) => {
            if (res.didCancel) {
              return;
            } else if (res.error) {
              console.log('Error:', res.error);
            } else if (res.customButton) {
              console.log('custom:', res.customButton);
            } else {                
              const source = { uri: res.uri };
              console.log(source);
              this.setState({
                imageUrl: source,
              });
              AsyncStorage.setItem('image',res.uri,
                ()=>{console.log('store sucess')}
              )  
            }
        });
    }
    
    render() {
        return (
            <View>
                {/* 顶部 */}
                <View style={{width:width,height:200,backgroundColor:'red'}}>
                    <TouchableOpacity onPress={this.takephoto}>
                        <Image source={this.state.imageUrl} style={styles.tx}/>
                    </TouchableOpacity>
                    <Text style={styles.zi}>BINNU DHILLON</Text>
                </View>
                {/* 我的个人中心 */}
                <View style={{marginTop:5,width:width,height:285,backgroundColor:'white'}}>
                    <View style={styles.mebox}>
                        <Icons 
                            name='award' 
                            color='#aeaeae' 
                            size={25} 
                            style={{marginLeft:10,marginRight:10}}
                        />
                        <Text style={{color:'#050505'}}>我的个人中心</Text>
                    </View>
                    <FlatList 
                        data={data}
                        numColumns={3}
                        renderItem={({item})=>(
                            <View style={styles.list}>
                                <Icon name={item.icon} size={25} color='#aeaeae'/>
                                <Text style={{color:'#050505',marginTop:8}}>{item.text}</Text>    
                            </View>
                        )}
                    />
                </View>
                {/* E族活动 */}
                <View style={{marginTop:5,width:width,height:215,backgroundColor:'white'}}>
                    <View style={styles.mebox}>
                        <Iconn 
                            name='tag' 
                            color='#aeaeae'
                            size={30} 
                            style={{marginLeft:10,marginRight:10}}
                        />
                        <Text style={{color:'#050505'}}>E族活动</Text>
                    </View>
                    <FlatList 
                        data={da}
                        numColumns={3}
                        renderItem={({item})=>(item.icon==='form')
                            ?(
                                <TouchableOpacity style={styles.list} onPress={()=>Actions.publish()}>
                                    <Icon name={item.icon} size={25} color='#aeaeae'/>
                                    <Text style={{color:'#050505',marginTop:8}}>{item.text}</Text>    
                                </TouchableOpacity>
                            )
                            :(
                                <View style={styles.list}>
                                    <Icon name={item.icon} size={25} color='#aeaeae'/>
                                    <Text style={{color:'#050505',marginTop:8}}>{item.text}</Text>    
                                </View>
                            )
                        }
                    />
                </View>
                {/* 底部 */}
                <Text style={{fontSize:12,color:'#808080',marginTop:25,textAlign:'center'}}>
                    BINNU DHILLON  |  退出
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tx:{
        width:90,
        height:90,
        borderWidth:2,
        borderColor:'white',
        borderRadius:44,
        marginTop:35,
        marginLeft:'39%'
    },
    zi:{
        fontSize:16,
        color:'white',
        textAlign:'center',
        marginTop:10
    },
    mebox:{
        height:40,
        borderBottomWidth:1,
        borderBottomColor:'#eeeeee',
        flexDirection:'row',
        alignItems:'center'
    },
    list:{
        width:0.33*width,
        flexDirection:'column',
        alignItems:'center',
        marginTop:20   
    }   
})
