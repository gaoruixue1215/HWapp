import React,{useState,useEffect} from 'react';
import {StatusBar,Image,Lightbox,View,Text,BackHandler,ToastAndroid,AsyncStorage} from 'react-native';
import List from './src/goods/List';
import Home from './src/home/Home';
import Me from './src/userinfor/Me';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Publish from './src/userinfor/Publish';
import SwiperPage from './src/common/SwiperPage';
import Login from './src/common/Login';
import Register from './src/common/Register';
import { Actions } from 'react-native-router-flux';

console.disableYellowBox = true;
 
const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);//isInstall是否是第一次安装
	let now = 0;
	
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall:',res)
			if(res){
				setInstall(false)
			}
		})
		// AsyncStorage.clear()
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res);
			console.log(user);
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				AsyncStorage.getItem('isLogin')
				.then(req=>{
					console.log('isLogin:',req)
					if(req == 'false'){
						setLogin(false);
					}
					else if(req == 'true'){
						console.log(req);
						setLogin(true);
						// console.log(isLogin)
					}
					SplashScreen.hide();
				})
				// console.log(isLogin);
				// setLogin(true);
			}
		})
	}
	
	useEffect(()=>{
		init();//初始化 引导页+登录页
	},[])
	let afterInstall = () =>{
		console.log('after install');
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
	

    return (
		<>
		<StatusBar backgroundColor='red'/>
		<Router 
			backAndroidHandler={()=>{
				if(Actions.currentScene == 'publish' ||  Actions.currentScene == 'register'){
					console.log(Actions.currentScene)
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',50);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
			<Lightbox key="lightbox">
			<Scene hideNavBar>
				<Tabs 
					key='tabbar'
					activeTintColor="red"
					inactiveTintColor="#949494"
					tabBarStyle={{backgroundColor:'white'}}
				>
					{/* 首页 */}
					<Scene key='homePage'
						title='首页'
						icon={
							({focused})=><Icon
								color={focused?'red':'#949494'} 
								name='home'
								size={22}
							/>
						}	
					>
						<Scene key="home" hideNavBar={true}  component={Home}/>					
					</Scene>
					{/* 商品分类 */}
					<Scene key='goodPage'
						title='商品分类'
						icon={
							({focused})=><Icon 
								color={focused?'red':'#949494'} 
								name='appstore-o'
								size={22}
							/>
						}	
					>
						<Scene key="good" hideNavBar={true} component={List}/> 
					</Scene>
					{/* 购物车 */}
					<Scene 
						key='cartPage'
						icon={({focused})=>
							<Icon 
								color={focused?'red':'#949494'} 
								name='shoppingcart'
								size={22}
						/>}
						title="购物车"
					>
						<Scene key="good" hideNavBar={true} component={List}/> 
					</Scene>
					{/* 个人中心 */}
					<Scene 
						key='userPage'
						icon={({focused})=>
							<Icon
								color={focused?'red':'#949494'} 
								name='user'
								size={22}
						/>}
						title="个人中心"
					>
						<Scene key="me" hideNavBar={true} component={Me}/> 
						
					</Scene>
				</Tabs>	
				<Scene key="publish" hideTabBar={true} component={Publish}/>
				<Scene initial={!isLogin} key="login" component={Login} />
				<Scene key="register" component={Register} hideNavBar={false} title='注册' 
				navigationBarStyle={{backgroundColor:'red'}}/>
			</Scene>
		</Lightbox>
	</Router>
	</>)
};
export default App;
