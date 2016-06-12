import React, { Component } from 'react';
import {
    StyleSheet,
    PixelRatio,
    ScrollView,
    TouchableOpacity,
    ProgressBarAndroid,
    TouchableNativeFeedback,
    ToastAndroid,
    Text,
    View
} from 'react-native';

class Button extends Component {
    render(){
        return (
            <TouchableNativeFeedback  style={{marginTop:20}}
                    background={TouchableNativeFeedback.Ripple('#999', true)} >
                    <View style={[styles.item]}><Text>{this.props.children}</Text></View>
                </TouchableNativeFeedback> 
        )
    }
}

class Detail2 extends Component {
    constructor(props){
        super(props);
        this.state={
            //option:null
        }
    }
    render() {
        return (
            //Picker
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <Button>点击1</Button>
                <Button>点击2</Button>
                <Button>点击3</Button>
                <Button>点击4</Button>
                <View style={styles.margin}><Text>页面222222222222</Text></View>
                <View style={styles.margin}><Text>进度条水平 Horizontal</Text></View>
                <ProgressBarAndroid styleAttr='Horizontal' progress={0.2}
            indeterminate={false} />
                <View style={styles.margin}><Text>进度条 Small</Text></View>
                <ProgressBarAndroid styleAttr='Small' />
                <View style={styles.margin}><Text>进度条 Large</Text></View>
                <ProgressBarAndroid styleAttr='Large' />
                <View style={styles.margin}><Text>进度条旋转 Inverse</Text></View>
                <ProgressBarAndroid styleAttr='Inverse' />
                <TouchableOpacity onPress={() => this.props.navigator.pop() } style={styles.item}><Text>返回</Text></TouchableOpacity>
                <Button>点击</Button>
                
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
    },
    margin:{
        marginTop:10,
        marginBottom:10
    }
});
export default Detail2;