/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Navigator,
    DrawerLayoutAndroid,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Text,
    View
} from 'react-native';
import Detail1 from './page1';
import Detail2 from './page2';
import Detail3 from './page3';
import Detail4 from './page4';

//构造路由
class AppDemo extends Component {


    renderSceneAndroid(route, navigator) {

        let Component = route.name;
        return (
            <Component {...route.prams} navigator={navigator} route={route} />
        );
    }

    render() {
        //侧边栏
        let navigationView=(
            <View style={{flex:1}}>
                <Text>侧边栏</Text>
            </View>
        )

        return (
                <DrawerLayoutAndroid 
                    drawerLockMode = 'locked-closed'
                    ref={(drawer) => { this.drawer = drawer; }}
                    drawerWidth={200}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={()=>navigationView}
                >
                    <StatusBar
                        //translucent = {true}
                        backgroundColor = '#fff'
                    />   
                    <Navigator
                    //初始化
                    initialRoute = {{ name: Main ,_this:this}}
                    //配置场景
                    /*configureScene = {
                        (route) => {
                            //页面跳转动画
                            return Navigator.SceneConfigs.PushFromRight;
                        }
                    }*/
                    renderScene = {this.renderSceneAndroid}
                    />
                </DrawerLayoutAndroid>
        );
    }
}
//主页
class Main extends Component {

    /*_pressButton(Detail) {
        //alert(text)
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: Detail,
                prams:{
                    //text:text
                }
            })
        }
    }*/
    render() {
        let _this = this.props.route._this;
        return (
            <ScrollView style={{backgroundColor:'green'}}>
                <TouchableOpacity onPress={() => _this.drawer.openDrawer() } style={styles.item} ><Text>打开抽屉</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigator.push({ name: Detail1 ,_this:_this}) } style={styles.item} ><Text>跳转到11111111111111111111</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigator.push({ name: Detail2 }) } style={styles.item} ><Text>跳转到22222222222222222222</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigator.push({ name: Detail3 }) } style={styles.item} ><Text>跳转到33333333333333333333</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigator.push({ name: Detail4 }) } style={styles.item} ><Text>跳转到4444444444444444444444</Text></TouchableOpacity>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#eee',
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#333'
    }
});

AppRegistry.registerComponent('AppDemo', () => AppDemo);
