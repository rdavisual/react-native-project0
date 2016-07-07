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
        Alert.alert('Entrada','estas seguro ?', [
            {
                text: 'Si',
                onPress: this.accept.bind(this)
            }, {
                text: 'No',
                onPress: this.cancel.bind(this)
            }, {
                text: 'Tal vez',
                onPress: () => Alert.alert('tu eres tonto..')
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
            <Image style={styles.container} source={{uri: 'https://mfiles.alphacoders.com/597/597688.jpg'}}>
                <View  >
                    <Text style={styles.title} >Boton para entrar:</Text>
                    <TouchableHighlight style={styles.botton} onPress={this.onLogin.bind(this)} >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableHighlight>
                </View>
            </Image>

        );
    }
}

export default loginView;
