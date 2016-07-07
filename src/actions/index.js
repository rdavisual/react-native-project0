import CryptoJS from 'crypto-js';

import { FETCH_CHARACTERS } from './types';

const REQUEST_URL = "http://gateway.marvel.com:80";
const TIMESTAMP = 1;
const PUBLIC_KEY = 'e0f4b99462ce036b0a07a99e605a8095';
const PRIVATE_KEY = '7802ac6d2417274ad2e0b20f3e83aea4c2764172';

export function fetchCharacters(){

    const hash = CryptoJS.MD5(TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY),
        url = `${REQUEST_URL}/v1/public/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${hash}`;

        // fetch(url)
        //     .then( response => response.json() )
        //     .then( responseData => {
        //         this.setState({
        //             dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
        //             data: responseData.data,
        //             loaded: true
        //         });
        //     });
    const response = fetch(url).then( response => response.json() );
    return {
        type: FETCH_CHARACTERS,
        payload: response
    };
}
