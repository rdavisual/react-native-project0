import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';
// import CryptoJS from 'crypto-js';
import { connect } from 'react-redux';
import { fetchCharacters } from '../../actions/index';

import styles from './dashboardViewStyle';


// const REQUEST_URL = "http://gateway.marvel.com:80/v1/public/characters";

class DashboardView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        };
        this.countComic = 0;
    }

    // CAMBIAR A ACTIONS
    // fetchData() {
    //     const hash = CryptoJS.MD5(this.timestamp + this.private_key + this.public_key),
    //         url = `${REQUEST_URL}?ts=${this.timestamp}&apikey=${this.public_key}&hash=${hash}`;
    //
    //     fetch(url)
    //         .then( response => response.json() )
    //         .then( responseData => {
    //             this.setState({
    //                 dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
    //                 data: responseData.data,
    //                 loaded: true
    //             });
    //         });
    // }
    // CAMBIAR A ACTIONS
    fetchData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.characters),
            loaded: true
        });
    }

    componentDidMount() {
        this.props.fetchCharacters().then(() => {
            this.fetchData();
        });
    }

    onComicPressed(title, count) {
        this.props.navigator.push({
            name: 'Details',
            title: title,
            passProps: { comics : this.props.characters, index: count }
        });
    }

    renderComic(comic) {
        this.countComic = this.countComic+1;
        let count = this.countComic-1;
        return (
            <TouchableHighlight onPress={() => this.onComicPressed(comic.title, count)} >
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
                    <Text style={[styles.loading, {paddingTop: 35}]} > Cargando . . . </Text>
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


// export default DashboardView;

function mapStateToProps(state) {
    return { characters: state.charactersReducer.characters };
}

export default connect(mapStateToProps, { fetchCharacters })(DashboardView);
