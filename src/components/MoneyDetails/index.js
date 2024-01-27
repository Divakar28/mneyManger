const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="enqiure-balance">
      <div className="balance-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icons"
        />
        <p>Your Balance</p>
        <p data-testid="balanceAmount">Rs {balanceAmount}</p>
      </div>

      <div className="income-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icons"
        />
        <p>Your Income</p>
        <p data-testid="incomeAmount">Rs {incomeAmount}</p>
      </div>

      <div className="express-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icons"
        />
        <p>Your Expenses</p>
        <p data-testid="expensesAmount">Rs {expensesAmount}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
