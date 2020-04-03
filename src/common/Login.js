import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
      if(this.state.username != '' && this.state.pwd !=''){
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd
          }
        ).then(res=>{
            // 根据返回状态进行判断，正确时跳转首页
            // if(res){

            // }
            AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
                this.setState({isloading:false})
                Actions.homePage();
                console.log('登录成功');
            })
            AsyncStorage.setItem('isLogin','true')
            .then(
              console.log("登录")
            )
        })
      }
      else{
        Alert.alert('用户名或密码不能为空！')
      }
    } 
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red" size={18}/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="lock" color="red" size={18}/>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
          <TouchableOpacity 
              style={{
                  width:'80%',
                  height: 40,
                  backgroundColor: 'red',
                  marginTop: 30,
                  borderRadius:5,
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
              onPress={this.login}>
              <Text>登录</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
                  width: '80%',
                  height: 40,
                  // backgroundColor: 'red',
                  marginTop: 10,
                  borderRadius:5,
                  alignItems: 'center',
                  justifyContent: 'center',
            }}
            onPress={()=>Actions.register()}
          >
            <Text style={{color:'blue'}}>还未注册？立即注册</Text>
          </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View><Text style={{textAlign:'center',marginTop:30}}>正在登录...</Text></View>
            :null
        }
      </View>
    );
  }
}