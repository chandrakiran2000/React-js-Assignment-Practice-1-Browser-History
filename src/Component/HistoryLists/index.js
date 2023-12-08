import './index.css'

const HistoryLists = props => {
  const {singleList, deleteClick} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = singleList

  const del = () => {
    deleteClick(id)
  }

  return (
    <li className="each-history-card">
      <p className="time-text">{timeAccessed}</p>

      <div className="domain-card">
        <img className="logo-img" src={logoUrl} alt="domain logo" />
        <div className="name-url-card">
          <p className="domain-name">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>

        <button
          onClick={del}
          className="delete-btn"
          aria-label="Save"
          type="button"
          id={id}
          data-testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryLists
