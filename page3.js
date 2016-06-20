import React, { Component } from 'react';
import {
    StyleSheet,
    PixelRatio,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    Text,
    ProgressBarAndroid,
    ViewPagerAndroid,
    View
} from 'react-native';


class Detail3 extends Component {
    constructor(props){
        super(props);
        this.state={
            progress: {
                position: 0,
                offset: 0,
            },
        }
    }

    onPageScroll(e){
        this.setState({progress: e.nativeEvent});
    }
    render() {
        let { progress } = this.state;
        return (
            //Picker
            <View style={{ flex: 1,backgroundColor: '#eee' }}>
                <ViewPagerAndroid style={{flex:1,justifyContent: 'center',alignItems: 'center'}}
                    initialPage={1}
                    onPageScroll={this.onPageScroll.bind(this)}
                    ref={viewPager =>  this.viewPager = viewPager }
                >
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'antiquewhite'}}><Text>页面1</Text></View>
                    <View style={{flex:1,backgroundColor:'cornsilk'}}><ScrollView><View style={{flex:1,alignItems: 'center',height:1000}}><Text>页面22</Text></View></ScrollView></View>
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'lavender'}}><Text>页面3</Text></View>
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:'skyblue'}}><Text>页面4</Text></View>
                </ViewPagerAndroid>
                <ProgressBarAndroid styleAttr='Horizontal' progress={(progress.position+progress.offset)/3} indeterminate={false} />
                <TouchableOpacity onPress={() => this.viewPager.setPage(2) } style={styles.item}><Text>跳转</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigator.pop() } style={styles.item}><Text>返回</Text><Text>{progress.position+progress.offset}</Text></TouchableOpacity>
                
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