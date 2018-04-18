import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import axios from 'axios';

import Items from './Items';

export default class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        };
    }

    componentWillMount() {
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then((response) => {
                this.setState({ itemList: response.data });
            })
            .catch((e) => {
                console.log('error', e);
            });
    }

    render() {
        const { itemList } = this.state;
        return (
            <ScrollView style={{ backgroundColor: '#DDDDDD' }}>
                {itemList.map((item) => (
                        <Items key={item.titulo} item={item} />
                    ))}
            </ScrollView>
        );
    }
}
