import React, { Component } from 'react';
import {
    StyleSheet,
    PixelRatio,
    ScrollView,
    TouchableOpacity,
    Picker,
    Text,
    View
} from 'react-native';

class Detail1 extends Component {
    constructor(props){
        super(props);
        this.state={
            option:null
        }
    }
    
    render() {
        let _this = this.props.route._this;
        return (
            //Picker
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View><Text>页面11111111122222</Text></View>
                <View><Text>{this.state.option}</Text></View>
                <Picker 
                    selectedValue={this.state.option}
                    onValueChange={value => this.setState({option:value})}
                    //mode='dropdown'
                    >
                    <Picker.Item label='选项1' value='1'/>
                    <Picker.Item label='选项2' value='2'/>
                    <Picker.Item label='选项3' value='3'/>
                    <Picker.Item label='选项4' value='4'/>
                </Picker>
                <TouchableOpacity onPress={() => _this.drawer.openDrawer() } style={styles.item} ><Text>打开抽屉</Text></TouchableOpacity>
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



export default Detail1;