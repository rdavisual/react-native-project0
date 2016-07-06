import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './heroesViewStyle';

class HeroesView extends Component {
    render () {
        return (
            <View style={styles.container} >
                <Text style={styles.title} > Soy el componente de Heroes !</Text>
            </View>
        );
    }
}


export default HeroesView;
