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

class Detail1 extends Component {

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View><Text>页面11111111122222</Text></View>
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