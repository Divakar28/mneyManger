import './index.css'

const TransactionItem = props => {
  const {transactionItem, onDeleteElements} = props
  const {id, title, Amount, type} = transactionItem

  const onDeleteButton = () => {
    onDeleteElements(id)
  }
  return (
    <div className="ll">
      <hr />
      <li className="list-items">
        <h1 className="head">{title}</h1>
        <p className="p">{Amount}</p>
        <p>{type}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete"
          />
        </button>
      </li>
      <hr />
    </div>
  )
}
export default TransactionItem
