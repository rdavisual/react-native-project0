import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Alert,
    Image,
    StyleSheet
} from 'react-native';

import styles from './loginViewStyle';

class loginView extends Component {
    onLogin() {
        Alert.alert('Acceso','esto es una frase', [
            {
                text: 'Aceptar',
                onPress: this.accept.bind(this)
            }, {
                text: 'Cancelar',
                onPress: this.cancel.bind(this)
            }
        ]);
    }
    accept() {
        // this.props.navigator.push({    //te permite volver a la vista anterior
        this.props.navigator.replace({    //se convierte en la vista 0 (en este caso)
            title: 'Dashboard',
            name: 'Dashboard',
            passProps: {}
        });
    }
    cancel() {
        console.log('cancel');
    }
    render () {
        return (
            <Image style={styles.container} source={{uri: 'https://images8.alphacoders.com/397/397989.jpg'}}>
                <View  >
                    <Text style={styles.title} >Esto es un texto</Text>
                    <TouchableHighlight style={styles.botton} onPress={this.onLogin.bind(this)} >
                        <Text style={styles.textButton}>y esto un boton</Text>
                    </TouchableHighlight>
                </View>
            </Image>

        );
    }
}

export default loginView;
