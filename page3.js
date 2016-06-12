import React, { Component } from 'react';
import {
    StyleSheet,
    PixelRatio,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    Text,
    ViewPagerAndroid,
    View
} from 'react-native';


class Detail3 extends Component {
    constructor(props){
        super(props);
        this.state={
            //option:null
        }
    }
    render() {
        return (
            //Picker
            <View style={{ flex: 1,backgroundColor: '#eee' }}>
                <ViewPagerAndroid style={{flex:1,justifyContent: 'center',alignItems: 'center'}}
                    initialPage={0}
                >
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'antiquewhite'}}><Text>页面1</Text></View>
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'cornsilk'}}><Text>页面2</Text></View>
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'lavender'}}><Text>页面3</Text></View>
                </ViewPagerAndroid>
                
                <TouchableOpacity onPress={() => this.props.navigator.pop() } style={styles.item}><Text>返回</Text></TouchableOpacity>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item: {
        //flex: 1,
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
export default Detail3;