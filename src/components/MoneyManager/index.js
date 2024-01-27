import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class Home extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  titleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onDeleteElements = id => {
    const {transactionList} = this.state
    const updateList = transactionList.filter(each => id !== each.id)

    this.setState({transactionList: updateList})
  }

  AddMoney = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeId = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeId
    const newAddMoney = {
      id: v4(),
      title: titleInput,
      Amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newAddMoney],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpress = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expensesAmount += each.Amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.Amount
      }
    })
    return incomeAmount
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.Amount
      } else {
        expensesAmount += each.Amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, transactionList, optionId} = this.state
    console.log(titleInput)
    console.log(typeof amountInput)
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpress()

    return (
      <div>
        <div className="money-head">
          <h1 className="head">Hi , Richard</h1>
          <p className="p">
            Welcome back to your <span className="pp">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="bgn">
          <div>
            <h1>Add Transactions</h1>
            <form onSubmit={this.AddMoney}>
              <label htmlFor="titleId">Title</label>
              <br />
              <input
                id="titleId"
                onChange={this.titleChange}
                value={titleInput}
                placeholder="TITLE"
              />
              <br />
              <label htmlFor="amountId">Amount</label>
              <br />
              <input
                id="amountId"
                onChange={this.onAmount}
                value={amountInput}
                placeholder="AMOUNT"
              />
              <br />
              <label htmlFor="select">TYPE</label>
              <select
                id="select"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit" className="Add-button">
                Add
              </button>
            </form>
          </div>
          <div>
            <h1>History</h1>
            <hr />
            <div className="history-list">
              <hr />
              <p className="pl">Title</p>

              <p className="pl">Amount</p>

              <p className="pl">Type</p>
              <hr />
            </div>
            <hr />
            <ul>
              {transactionList.map(each => (
                <TransactionItem
                  key={each.id}
                  transactionItem={each}
                  onDeleteElements={this.onDeleteElements}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
