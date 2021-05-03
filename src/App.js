import React, {useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Book',
    amount: 500,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
  title: 'Table', 
  amount: 1999.99, 
  date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Headphones',
    amount: 5000,
    date: new Date(2021, 3, 28),
  },
  {
    id: 'e4',
    title: 'Groceries',
    amount: 876,
    date: new Date(2021, 5, 12),
  },
];



const App = () => {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
