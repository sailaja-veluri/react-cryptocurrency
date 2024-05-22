// Write your JS code here
import './index.css'

const CryptocurriencyItem = props => {
  const {cryptoCurrencyData} = props
  const {
    id,
    usdValue,
    currencyName,
    euroValue,
    currencyLogo,
  } = cryptoCurrencyData

  return (
    <li className="item-container">
      <div className="logo-curName-container">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurriencyItem
