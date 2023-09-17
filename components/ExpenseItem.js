import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const ExpenseItem = ({ id, description, amount, date}) => {
    let totalAmount = 0;
    const navigation = useNavigation();
    
    function expensePressHander() {
        navigation.navigate('ManageExpences',{
            expenseId: 2
        });
    }

  return (
    <Pressable onPress={expensePressHander}
    style={({pressed}) => pressed && styles.pressed}
    >
    <View style={styles.container}>
        <View style={styles.detailsContainer}>
            <Text style={[styles.textStyle]}>{date.toString()}</Text>
            <Text style={[styles.description, styles.textStyle]}>{description}</Text>
        </View>
        <View style={styles.amountContainer}>
            <Text style={[styles.amount]}>₹ {amount}</Text>
        </View>
    </View>
    </Pressable>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#00008B',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        elevation: 3,
    },
    pressed:{
        opacity: 0.75,
    },
    description:{
        fontSize: 16,
        marginBottom: 4,
        fontWeight : 'bold', 
    },
    textStyle:{
        color: 'white'
    },
    detailsContainer:{
        paddingVertical:10,
        paddingHorizontal:10,
        color: 'white'
    },
    amountContainer:{
        width: '15%',
        alignItems: 'center',
        marginTop: 20,
        height: '50%',
        borderRadius: 10,
        backgroundColor: 'white'

    },
    amount: {
        justifyContent: 'center',
        alignContent: 'center'
    }
})