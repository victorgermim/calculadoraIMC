import { useState } from 'react';
import './App.css';

function App() {
  const [altura, setaltura] = useState('');
  const [peso, setpeso] = useState('');
  const [imc, setimc] = useState('');
  const [classification, setClassification] = useState('');

  const calculateimc = () => {
    const alturaInMeters = altura / 100;
    const imcValue = (peso / (alturaInMeters * alturaInMeters)).toFixed(2);
    setimc(imcValue);
    classifyimc(imcValue);
  };

  const classifyimc = (imcValue) => {
    if (imcValue < 18.5) setClassification('Abaixo do peso');
    else if (imcValue >= 18.5 && imcValue < 25) setClassification('Peso normal');
    else if (imcValue >= 25 && imcValue < 30) setClassification('Sobrepeso');
    else if (imcValue >= 30 && imcValue < 35) setClassification('Obesidade grau I');
    else if (imcValue >= 35 && imcValue < 40) setClassification('Obesidade grau II');
    else setClassification('Obesidade grau III (mórbida)');
  };

  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <input
        type="number"
        placeholder="Altura em cm"
        value={altura}
        onChange={(e) => setaltura(e.target.value)}
      />
      <input
        type="number"
        placeholder="Peso em kg"
        value={peso}
        onChange={(e) => setpeso(e.target.value)}
      />
      <button onClick={calculateimc}>Calcular</button>
      {imc && (
        <div>
          <p>IMC: {imc}</p>
          <p>Classificação: {classification}</p>
        </div>
      )}
    </div>
  );
}

export default App;
