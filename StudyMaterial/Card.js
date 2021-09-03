import React from 'react';
import { View,StyleSheet,Text, TextInput, Button } from 'react-native';


const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {    
        shadowColor:'black',
        shadowOffset:{width:1,height:1},
        shadowRadius:4,
        shadowOpacity:0.6,
        backgroundColor:'white',
        elevation:4,
        padding:10,
        borderRadius:10
    }
}) 

export default Card;