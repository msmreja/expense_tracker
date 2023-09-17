import { View, Text , StyleSheet} from 'react-native';
import React from 'react';

const ExpensesSummary = ({expenses, periodName}) => {
    const expensesSum = expenses.reduce( (sum, expense)=>{
        return sum + expense.amount;
    }, 0);
  return (
    <View style={styles.SummaryContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>₹ {expensesSum}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  SummaryContainer: {
    padding: 6,
    backgroundColor: '#ccc',
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  period:{
    fontSize: 14,
    fontWeight: '600',
    color: 'teal'

  },
  sum:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'teal'
  }

})