import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'stretch',
        padding: 30
        // backgroundColor: '#F5FCFF',
    },
    title: {
        marginTop: 50,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        // backgroundColor: 'rgba(0,0,0,0)'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    botton: {
        width: 300,
        height: 40,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 3,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop: 30,
    },
    textButton: {
        color: '#000',
        fontWeight: 'bold',
    }
});

export default style;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
