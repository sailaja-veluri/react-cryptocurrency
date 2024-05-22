// Write your JS code here
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrienciesList = props => {
  const {cryptoCurrencyData} = props

  return (
    <div className="CryptocurrienciesList-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="ul-container">
        <div className="ul-header-container">
          <p className="coinType-header">Coin Type</p>
          <div className="usd-euro-container">
            <p className="usd-header">USD</p>
            <p className="euro-header">EURO</p>
          </div>
        </div>
        {cryptoCurrencyData.map(each => (
          <CryptocurrencyItem key={each.id} cryptoCurrencyData={each} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrienciesList
