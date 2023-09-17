import React from 'react'
import { useDispatch } from 'react-redux'
import ExpenseItem from './ExpenseItem';

const RenderExpense = (itemData) => {
    const dispatch = useDispatch();
    const ExpensesData = {
            id: 1,
            date: '25-12-2023',
            description: 'Description',
            amount: 99,
    };
    dispatch(ExpensesData);
    return (
      <View style={styles.item}>
        <ExpenseItem
          {...itemData.item}
          />
      </View>
    )
}
export default RenderExpense