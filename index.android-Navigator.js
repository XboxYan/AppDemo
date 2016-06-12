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
//构造路由
class MyProject extends Component {


    renderSceneAndroid(route, navigator) {
        _navigator = navigator;
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

    _pressButton(text) {
        alert(text)
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: Detail,
                prams:{
                    text:text
                }
            })
        }
    }
    render() {
        return (
            <ScrollView>
                <TouchableOpacity onPress={this._pressButton.bind(this,'3') } style={styles.item} text='内容1'><Text>11111111111111111111</Text></TouchableOpacity>
                <TouchableOpacity onPress={this._pressButton.bind(this,'内容2') } style={styles.item} text='内容2'><Text>22222222222222222222</Text></TouchableOpacity>
                <TouchableOpacity onPress={this._pressButton.bind(this,'内容3') } style={styles.item} text='内容3'><Text>33333333333333333333</Text></TouchableOpacity>
                <TouchableOpacity onPress={this._pressButton.bind(this,'内容4') } style={styles.item} text='内容4'><Text>4444444444444444444444</Text></TouchableOpacity>
            </ScrollView>
        )
    }
}

//详情页
class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:''
        }
    }
    _pressButton() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    componentDidMount(){
        this.setState({
            text:this.props.text
        })
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View><Text>{this.state.text}</Text></View>
                <TouchableOpacity onPress={this._pressButton.bind(this) } style={styles.item}><Text>返回</Text></TouchableOpacity>
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
