import React from 'react';
import { render } from 'react-dom';
import CurrencyConverter from './CurrencyConverter';

const App = () => (
  <div>
    <CurrencyConverter />
  </div>
);

render(<App />, document.getElementById('root'));
