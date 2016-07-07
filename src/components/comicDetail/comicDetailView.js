import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './comicDetailViewStyle';


class ComicDetailView extends Component {
    constructor(props) {
        super(props);
    }

    sliderConstructor() {
        const { passProps } = this.props.route,
            views = [];
        if ( passProps.comics ) {
            return passProps.comics.map((comic) => {
                return (
                    <View key={comic.id} style={styles.container}>
                        <Image source={{uri: `${comic.thumbnail.path}.jpg`}}
                            style={styles.image} />
                        <Text style={styles.title} >{comic.name}</Text>
                        <Text style={styles.description} >{comic.description}</Text>
                        <Text style={styles.description} >Disponibles: {comic.comics.available}</Text>
                    </View>
                );
            });
        }
    }

    render() {
        const { passProps } = this.props.route;
        {/*
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        */}
        {/*
            <View style={styles.container}>
                <Image source={{uri: `${passProps.comic.thumbnail.path}.jpg`}}
                    style={styles.image} />
                <Text style={styles.title} >{passProps.comic.name}</Text>
                <Text style={styles.description} >{passProps.comic.description}</Text>
                <Text style={styles.description} >Disponibles: {passProps.comic.comics.available}</Text>
            </View>
        */}
        return (
            <Swiper style={{}} showsButtons={true} index={passProps.index}>
                {this.sliderConstructor()}
            </Swiper>
        );
    }
}

export default ComicDetailView;
