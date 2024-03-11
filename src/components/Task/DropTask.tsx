import React, { useState } from 'react';

const countries = ['Country 1', 'Country 2'];
const states = ['State 1', 'State 2'];
const cities = ['City 1', 'City 2'];

function App() {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <div>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      {country && (
        <select onChange={(e) => setState(e.target.value)}>
          <option>Select a state</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      )}

      {state && (
        <select onChange={(e) => setCity(e.target.value)}>
          <option>Select a city</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
