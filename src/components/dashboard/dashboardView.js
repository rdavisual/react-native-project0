// import React, { Component } from 'react';
// import {
//     View,
//     Text
// } from 'react-native';
//
// import styles from './dashboardViewStyle';
//
// class DashboardView extends Component {
//     render () {
//         return (
//             <View style={styles.container} >
//                 <Text style={styles.title} > Soy el componente de Dashboard !</Text>
//             </View>
//         );
//     }
// }
//
//
// export default DashboardView;

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';
import CryptoJS from 'crypto-js';

import styles from './dashboardViewStyle';


const REQUEST_URL = "http://gateway.marvel.com:80/v1/public/characters";

class DashboardView extends Component {

    constructor(props) {
        super(props);

        this.timestamp = 1;
        this.public_key = 'e0f4b99462ce036b0a07a99e605a8095';
        this.private_key = '7802ac6d2417274ad2e0b20f3e83aea4c2764172';
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        };
        let hash = CryptoJS.MD5(this.timestamp + this.private_key + this.public_key);
    }

    // CAMBIAR A ACTIONS
    fetchData() {
        const hash = CryptoJS.MD5(this.timestamp + this.private_key + this.public_key),
            url = `${REQUEST_URL}?ts=${this.timestamp}&apikey=${this.public_key}&hash=${hash}`;

        fetch(url)
            .then( response => response.json() )
            .then( responseData => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
                    loaded: true
                });
            });
    }

    componentDidMount() {
        this.fetchData();
    }

    onComicPressed(comic) {
        this.props.navigator.push({
            name: 'Details',
            title: comic.name,
            passProps: { comic }
        });
    }

    renderComic(comic) {
        return (
            <TouchableHighlight onPress={() => this.onComicPressed(comic)} >
                <Image source={{uri: `${comic.thumbnail.path}.jpg`}}  style={styles.backgroundImage}>
                    <View style={styles.rightContainer} >
                        <Text style={styles.title}>{comic.name}</Text>
                        <Text style={styles.available}>{comic.comics.available}</Text>
                    </View>
                </Image>
            </TouchableHighlight>
        );
    }

    render () {
        if (!this.state.loaded) {
            return (
                <View style={styles.container}>
                    <Text style={styles.loading} > Cargando . . . </Text>
                </View>
            );

        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderComic.bind(this)}
                style={styles.listview}
            />
        );
    }
}


export default DashboardView;
