import React, { Component } from 'react';
import {
    StyleSheet,
    PixelRatio,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    Text,
    ProgressBarAndroid,
    ListView,
    View
} from 'react-native';

let REQUEST_URL = 'http://op.juhe.cn/onebox/news/query?q=%E8%8B%B9%E6%9E%9C&dtype=&key=856f44bcbff4654b5a786d9025ebfb09';

class Detail4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded:false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
        };
    }

    fetchDate(){
        fetch(REQUEST_URL)
            .then((response)=>response.json())
            .then((responseData)=>{
                this.setState({
                    loaded:true,
                    dataSource:this.state.dataSource.cloneWithRows(responseData.result)
                })
            })
            .done();
    }

    componentDidMount(){
        this.fetchDate();
    }
    
    renderNews(rowData,sectionID,rowID){
        return (
            <TouchableOpacity  style={styles.item}>
                <Text>{sectionID}--{rowID}--{rowData.title}</Text>
            </TouchableOpacity>
        )
    }
    
    render() {
        if(!this.state.loaded){
            return (
                <View style={styles.item}>
                    <ProgressBarAndroid styleAttr='Inverse' />
                    <Text style={{marginTop:10}}>正在加载...</Text>
                </View>
            )
        }
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>   
                <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderNews}
                />
            </View>
        );
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
export default Detail4;