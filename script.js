const getCelcius = (f) => (f - 32) * 5/9;

// Create and append HTML elements
document.body.innerHTML = `
  <div class="converter-card">
    <h1>Temperature Converter</h1>
    <div class="input-group">
      <input 
        type="number" 
        id="fahrenheit" 
        placeholder="Enter temperature in Fahrenheit"
        autocomplete="off"
        onkeypress="if(event.key === 'Enter') convertTemp()"
      >
    </div>
    <button onclick="convertTemp()">Convert to Celsius</button>
    <p id="result"></p>
  </div>
`;

function convertTemp() {
  const fahrenheitInput = document.getElementById("fahrenheit");
  const resultElement = document.getElementById("result");

  if (!fahrenheitInput.value) {
    resultElement.textContent = "Please enter a temperature";
    resultElement.style.color = "#e74c3c";
    return;
  }

  const fahrenheit = Number(fahrenheitInput.value);
  const celsius = getCelcius(fahrenheit);

  // Animate the result
  resultElement.style.opacity = "0";
  resultElement.style.transform = "translateY(-10px)";

  setTimeout(() => {
    resultElement.textContent = `${fahrenheit}°F = ${celsius.toFixed(1)}°C`;
    resultElement.style.color = "#2c3e50";
    resultElement.style.opacity = "1";
    resultElement.style.transform = "translateY(0)";
  }, 150);
}

// Add transition styles to the result element
document.getElementById("result").style.transition = "all 0.3s ease-out";
