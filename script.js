const getCelcius = (f) => (f - 32) * 5/9;

// Create and append HTML elements
document.body.innerHTML = `
  <h1>Temperature Converter</h1>
  <input type="number" id="fahrenheit" placeholder="Enter Fahrenheit">
  <button onclick="convertTemp()">Convert</button>
  <p id="result"></p>
`;

function convertTemp() {
  const fahrenheit = document.getElementById('fahrenheit').value;
  const celsius = getCelcius(Number(fahrenheit));
  document.getElementById('result').textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
}

// Initial Test
console.log(getCelcius(32));
