import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class Items extends Component {

    render() {
        const { item } = this.props;
        return (
            <View style={styles.item}>
                <View style={styles.image}>
                    <Image style={{ height: 100, width: 100 }} source={{ uri: item.foto }} />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title}>
                        {item.titulo}
                    </Text>
                    <Text style={styles.price}>
                        R$: {item.valor}
                    </Text>
                    <Text style={styles.itemDetail}>
                        Local: {item.local_anuncio}
                    </Text>
                    <Text style={styles.itemDetail}>
                        Data da publicação: {item.data_publicacao}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: 'white'
    },
    image: {
        width: 102,
        height: 102

    },
    details: {
        marginLeft: 20,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'blue'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    itemDetail: {
        fontSize: 16
    }
});
