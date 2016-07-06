import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';

import styles from './comicDetailViewStyle';


class ComicDetailView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { passProps } = this.props.route;
        return (
            <View style={styles.container}>
                <Image source={{uri: `${passProps.comic.thumbnail.path}.jpg`}}
                    style={styles.image} />
                <Text style={styles.title} >{passProps.comic.name}</Text>
                <Text style={styles.description} >{passProps.comic.description}</Text>
                <Text style={styles.description} >Disponibles: {passProps.comic.comics.available}</Text>
            </View>
        );
    }
}

export default ComicDetailView;
