// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoCurrencyData: []}

  componentDidMount() {
    this.getCryptoCurrencyData()
  }

  getCryptoCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoCurrencyData: formattedData, isLoading: false})
  }

  render() {
    const {cryptoCurrencyData, isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="cryptoCurrency-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoCurrencyData={cryptoCurrencyData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
