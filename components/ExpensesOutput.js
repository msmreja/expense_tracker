import { View, Text } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { useSelector } from "react-redux";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Bekar ka kharcha',
        amount: 99,
        date: new Date('2021-25-01')
    },
    {
        id: 'e2',
        description: 'Bekar ka kharcha',
        amount: 99,
        date: new Date('2021-01-01')
    },
    {
        id: 'e3',
        description: 'Bekar ka kharcha',
        amount: 99,
        date: new Date('2021-21-01')
    },
    {
        id: 'e4',
        description: 'Bekar ka kharcha',
        amount: 99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e5',
        description: 'Bekar ka kharcha',
        amount: 99,
        date: new Date('2021-11-01')
    },
    {
        id: 'e6',
        description: 'Bekar ka kharcha',
        amount: 99,
        date: new Date('2021-11-01')
    },
    {
        id: 'e7',
        description: 'Bekar ka kharcha',
        amount: 99,
        date: new Date('2021-11-01')
    },
    {
        id: 'e8',
        description: 'Bekar ka kharcha',
        amount: 99,
        date: new Date('2021-11-01')
    },
    {
        id: 'e10',
        description: 'Bekar ka kharcha',
        amount: 99,
        date: new Date('2021-11-01')
    },
]

const ExpensesOutput = ({expensesPeriod}) => {
  return (
    <>
    <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
    <ExpensesList expenses={DUMMY_EXPENSES} />
    </>
  )
}

export default ExpensesOutput