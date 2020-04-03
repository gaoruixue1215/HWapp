import React, { Component } from 'react'
import { Text, View ,StyleSheet,Dimensions,TouchableOpacity,ToastAndroid,ScrollView,ActivityIndicator} from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');

export default class Publish extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            page:1,
            isLoad:false
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=15')
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            this.setState({
                data: res.data
            })
            console.log(this.state.data)
            for(var i = 0;i<this.state.data.length;i++){
                var newdata = this.state.data;
                var select = ['已回复','待回复'];
                var num = Math.floor(Math.random() * 10 + 1);
                if(num%2===1){
                    newdata[i].select = select[0];
                    newdata[i].color = '#3c3b3b';
                }else{
                    newdata[i].select = select[1];
                    newdata[i].color = 'red';
                }
                newdata[i].newtitle = this.state.data[i].title.length>15?this.state.data[i].title.substr(0,15)+'...':this.state.data[i].title;
                newdata[i].time = this.state.data[i].create_at.split('T')[0];

                this.setState({
                    data:newdata,
                    isLoad:true
                })
            }    
        })
    }
    goUp=()=>{
        var page = this.state.page - 1;
        if(page==0){
            ToastAndroid.show('这就是第一页！', ToastAndroid.SHORT);
            //console.log('到头啦');
        }
        else{
            this.handleChange(page);
        }
    }
    goDown=()=>{
        var page = this.state.page + 1;
        this.handleChange(page);
    }
    handleChange=(page)=>{
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+page)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            res.data.map(()=>{
                this.setState({
                    data:res.data,
                    page: page,
                })
                for(var i = 0;i<this.state.data.length;i++){
                    var newdata = this.state.data;
                    var select = ['已回复','待回复'];
                    var num = Math.floor(Math.random() * 10 + 1);
                    if(num%2===1){
                        newdata[i].select = select[0];
                        newdata[i].color = '#3c3b3b';
                    }else{
                        newdata[i].select = select[1];
                        newdata[i].color = 'red';
                    }
                    newdata[i].newtitle = this.state.data[i].title.length>15?this.state.data[i].title.substr(0,15)+'...':this.state.data[i].title;
                    newdata[i].time = this.state.data[i].create_at.split('T')[0];
    
                    this.setState({
                        data:newdata
                    })
                }    
            })
        })
    }
   
    render() {
        return (
            <View>
                <ScrollView>
                <View style={styles.header}>
                    <Icon name="left" size={18} color='white' onPress={()=>Actions.pop()}/>
                    <Text style={{color:'white',fontSize:18}}>我的发布</Text>
                    <Icon name='ellipsis1' size={20} color='white'/>
                </View>
                {
                    this.state.isLoad?(
                        this.state.data.map((item)=>(
                            <View style={styles.list_box}>
                                <Text style={{fontSize:15,width:width*0.6,color:'#3c3b3b'}}>{item.newtitle}</Text>
                                <Text style={{fontSize:15,width:width*0.25,color:'#3c3b3b'}}>{item.time}</Text> 
                                <Text style={{fontSize:15,width:width*0.25,color:`${item.color}`}}>{item.select}</Text>   
                            </View>
                            
                        ))
                    ):<ActivityIndicator size="large" color="red" />
                }
                <View style={styles.foot}>
                    <TouchableOpacity style={styles.btn} onPress={this.goUp}>
                        <Text style={{color:'white',fontSize:16}}> 上一页 </Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,color:'#3c3b3b'}}>第{this.state.page}页</Text>
                    <TouchableOpacity style={styles.btn} onPress={this.goDown}> 
                        <Text style={{color:'white',fontSize:16}}> 下一页 </Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        width:width,
        height:50,
        backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
        marginBottom:5
    },
    list_box:{
        backgroundColor:'white',
        width:width,
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
        borderBottomWidth:1,
        borderBottomColor:'#e2e1e1',
        borderStyle: 'dotted',
    },
    foot:{
        width:width,
        height:60,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
    },
    btn:{
        backgroundColor:'red',
        height:36,
        width:'22%',
        borderRadius:18,
        alignItems:'center',
        justifyContent:'center',

    }

})
