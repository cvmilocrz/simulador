import React from 'react';
import './home.css';
import useCreditSimulation from '../../controller/useCreditSimulation';

function Home() {
  const {
    seguroVida,
    plazo,
    montoCredito,
    tasaEA,
    handleSeguroVida,
    handlePlazoChange,
    handleMontoCreditoChange,
    handleTasaEAChange,
    tasaMV,
    formatNumberWithCommas
  } = useCreditSimulation();

  // Validar si montoCredito es un número válido
  const isValidNumber = !isNaN(montoCredito) && montoCredito !== 0;

  // Cálculos
  const EApercetile = tasaEA / 100;
  const monthlyValue = isValidNumber
    ? (montoCredito * (tasaMV / 100)) /
        (1 - Math.pow(1 + tasaMV / 100, -plazo)) +
      seguroVida
    : 0;
  const totalValue = isValidNumber ? monthlyValue * plazo : 0;

  return (
    <>
      <div className="homeContainer">
        <div className="simulationTool">
          <h1>
            Simula tu Crédito de <br />
            Libre Inversión
          </h1>
          <p>
            Ingresa los datos para tu crédito y modifícalos según lo necesites
          </p>
          <div className="valueInput">
            <input
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="¿Qué valor deseas solicitar?"
              value={formatNumberWithCommas(montoCredito)}
              onChange={handleMontoCreditoChange}
            />
          </div>

          <div className="rangeInfo">
            <div className="exclamationIco"></div>
            <p>Solicita desde $1.000.000 hasta $20.000.000</p>
          </div>
          <div className="deadline">
            <p>
              Plazo <br />
              <span>{plazo} Meses</span>
            </p>
            <input
              type="range"
              min="6"
              max="60"
              value={plazo}
              onChange={handlePlazoChange}
              className="custom-range"
            />
            <div className="rangeMonthValues">
              <p>6</p>
              <p className="rangeMonth">24</p>
              <p className="rangeMonthMiddle">42</p>
              <p>60</p>
            </div>
          </div>
        </div>
        <div className="simulationQuotes">
          <h2>${formatNumberWithCommas(monthlyValue)}</h2>
          <h3>Cuota mensual con seguro de vida</h3>
          <div className="intContainer">
            <div className="intInfo">
              <p>Tasa Efectiva Anual (E.A) desde</p>
            </div>
            <div className="valueInfo">
              <input
                type="number"
                value={tasaEA}
                onChange={handleTasaEAChange}
              />
              <p>%</p>
            </div>
          </div>
          <div className="intContainer">
            <div className="intInfo">
              <p>Tasa Mensual Vencida (M.V)</p>
            </div>
            <div className="valueInfo">
              <p>{tasaMV.toFixed(2)} %</p>
            </div>
          </div>
          <div className="intContainer">
            <div className="intInfo">
              <p>Valor mensual del seguro de vida </p>
            </div>
            <div className="valueInfo">
              <p>$</p>
              <input
                type="number"
                value={seguroVida}
                onChange={handleSeguroVida}
              />
            </div>
          </div>

          <div className="footerInfo">
            <div className="exclamationIco" id="footerIco"></div>
            <p>
              (i) Te ofrecemos un seguro, pero si quieres adquirirlo con otra
              entidad, regístralo en una oficina SENA después de contratar.
            </p>
          </div>

          <div className="footerTotal">
            <div>
              Valor total a pagar: <br />
              (capital + intereses + seguro)
            </div>
            <div>${formatNumberWithCommas(totalValue)}</div>
          </div>
          <div className="footerRatesPlan">
            <div className="fileIco"></div>
            <p>Ver tasas y plan de pago</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
