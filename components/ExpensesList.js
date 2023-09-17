import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import ExpenseItem from './ExpenseItem'
import { useDispatch } from 'react-redux'
import { add } from '../store/ExpensesSlice'

const ExpensesList = ({expenses}) => {
  const dispatch = useDispatch();
  const renderExpenseItem = (itemData) =>{
  dispatch(add({ id: 1, date: '2023-08-23', description: 'Groceries', amount: 50 }));
  dispatch(add({ id: 2, date: '2023-08-13', description: 'Grodceries', amount: 510 }));
    return (
      <View style={styles.item}>
        <ExpenseItem
          {...itemData.item}
          />
      </View>
    )
}
  return (
    <View style= {styles.container}>
      <FlatList 
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
export default ExpensesList;

const styles = StyleSheet.create({
  container :{
    padding: 10
  },
  item: {
    marginVertical: 4,
    marginHorizontal: 4
  },
})
