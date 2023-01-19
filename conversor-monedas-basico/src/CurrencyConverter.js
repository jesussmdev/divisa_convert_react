import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * Clase Monedas
 */
class Monedas {
  static rates = {
    //euros 
    EUR: 1,
    //dolares 1eur = 1.08usd
    USD: 1.08,
    //yen 1 eur = 138 yen
    JPY: 138
  };

  /**
   * Funcion para convertir la cantidad a la nueva moneda
   * @param {amount} cantidad de dinero 
   * @param {fromCurrency} moneda actual 
   * @param {toCurrency} moneda a cambiar 
   * @returns 
   */
  static convert(amount, fromCurrency, toCurrency) {
    const monedasRatio = Monedas.rates[fromCurrency] / Monedas.rates[toCurrency];
    const convertedAmount = monedasRatio * amount;
    return convertedAmount.toFixed(2);
  }

  /**
   * get de la clase monedas
   * @returns devuelve la moneda
   */
  static getCurrencies() {
    return Object.keys(Monedas.rates);
  }
}

/**
 * Conversor de monedas
 * @returns 
 */
const CurrencyConverter = () => {
    //Variables iniciales
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(Monedas.convert(amount, fromCurrency, toCurrency));

  function handleFromCurrencyChange(event) {
    setFromCurrency(event.target.value);
  }

  function handleToCurrencyChange(event) {
    setToCurrency(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  useEffect(() => {
    setConvertedAmount(Monedas.convert(amount, fromCurrency, toCurrency));
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className='currency-converter'>
      <h1>Convector de divisa</h1>
      <div>
        <label>De:</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {Monedas.getCurrencies().map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <br />
        <label>A::</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {Monedas.getCurrencies().map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <br />
        <label>
          Cantidad:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <br />
        <p>Cantidad a la nueva divisa: {convertedAmount} {toCurrency}</p>
    </div>
    </div>
  );
};

export default CurrencyConverter;
