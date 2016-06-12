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
    ScrollView,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import Detail1 from './page1';
//构造路由
class MyProject extends Component {


    renderSceneAndroid(route, navigator) {

        let Component = route.name;
        return (
            <Component {...route.prams} navigator={navigator} route={route} />
        );
    }

    render() {
        return (
            <Navigator
                //初始化
                initialRoute = {{ name: Main}}
                //配置场景
                /*configureScene = {
                    (route) => {
                        //页面跳转动画
                        return Navigator.SceneConfigs.PushFromRight;
                    }
                }*/
                renderScene = {this.renderSceneAndroid}
                />
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
        return (
            <ScrollView>
                <TouchableOpacity onPress={() =>this.props.navigator.push({name:Detail1}) } style={styles.item} ><Text>跳转到11111111111111111111</Text></TouchableOpacity>
                <TouchableOpacity onPress={() =>this.props.navigator.push({name:Detail2}) } style={styles.item} ><Text>跳转到22222222222222222222</Text></TouchableOpacity>
                <TouchableOpacity onPress={() =>this.props.navigator.push({name:Detail3}) } style={styles.item} ><Text>跳转到33333333333333333333</Text></TouchableOpacity>
                <TouchableOpacity onPress={() =>this.props.navigator.push({name:Detail4}) } style={styles.item} ><Text>跳转到4444444444444444444444</Text></TouchableOpacity>
            </ScrollView>
        )
    }
}



//详情页2
class Detail2 extends Component {

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View><Text>22222222222222</Text></View>
                <TouchableOpacity onPress={() => this.props.navigator.pop() } style={styles.item}><Text>返回</Text></TouchableOpacity>
            </ScrollView>
        )
    }
}



//详情页3
class Detail3 extends Component {

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View><Text>3333333333333</Text></View>
                <TouchableOpacity onPress={() => this.props.navigator.pop() } style={styles.item}><Text>返回</Text></TouchableOpacity>
            </ScrollView>
        )
    }
}

//详情页4
class Detail4 extends Component {

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View><Text>44444444444444444</Text></View>
                <TouchableOpacity onPress={() => this.props.navigator.pop() } style={styles.item}><Text>返回</Text></TouchableOpacity>
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

AppRegistry.registerComponent('MyProject', () => MyProject);
