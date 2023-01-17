import { useState, useEffect } from 'react'

import './App.css';
import NewItemForm from './components/NewItemForm';
import SearchForm from './components/SearchForm';
import Transactions from './components/Transactions';

// import "semantic-ui-css"

function App() {
  const [search, setSearch] = useState('')
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(r => r.json())
      .then(transc => setTransactions(transc))
      .catch(err => console.log(err))
  }, [])

  function addNewTransaction(transaction) {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transaction)
    })
      .then(r => r.json())
      .then(newTransaction => setTransactions(transactions => [newTransaction, ...transactions]))
      .catch(console.log)
  }

  function handleSort(sortBy) {
    console.log({ sortBy, transactions });
    setTransactions(transactions => [...transactions.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1)])
  }

  function handleDelete(transactionId) {
    fetch(`http://localhost:8001/transactions/${transactionId}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => setTransactions(transactions => transactions.filter(t => t.id !== transactionId)))
  }

  const filteredTransactions = transactions.filter(t => (
    t.description.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase())
    ))

  return (
    <div className="ui raise segment">
      <div className='header-text'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <SearchForm search={search} setSearch={setSearch} />
      <NewItemForm addNewTransaction={addNewTransaction} />
      <Transactions onDelete={handleDelete} onSort={handleSort} transactions={filteredTransactions} />

    </div>
  );
}

export default App;
