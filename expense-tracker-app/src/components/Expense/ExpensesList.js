import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css';

const ExpensesList = ({filteredExpenses}) => {
    if(filteredExpenses.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
  return (
    <ul className='expenses-list'>
       {
        filteredExpenses.map((filteredExpense) => {
          return <ExpenseItem 
                    // key={filteredExpense.id} 
                    expense={filteredExpense} 
                    />
        })
      }
    </ul>
  )
}

export default ExpensesList
