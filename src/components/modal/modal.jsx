import React from "react";
import "./modal.css";
import useCreditSimulation from "../../controller/useCreditSimulation";

function Modal() {
  const {
    seguroVida,
    plazo,
    montoCredito,
    tasaEA,
    tasaMV,
    formatNumberWithCommas,
  } = useCreditSimulation();

  const creditValueModal = montoCredito;
  const plazoModal = plazo;
  const tasaEAModal = tasaEA;
  const seguroVidaModal = seguroVida;
  const tasaMVModal = tasaMV;
  const isValidNumber = !isNaN(montoCredito) && montoCredito !== 0;
  const monthlyValue = isValidNumber
    ? (montoCredito * (tasaMV / 100)) /
        (1 - Math.pow(1 + tasaMV / 100, -plazo)) +
      seguroVida
    : 0;
  const totalValue = isValidNumber ? monthlyValue * plazo : 0;
  const interestValue = totalValue - creditValueModal;

  // Arrays para almacenar los datos de cada mes
  let monthsData = [];

  // Calculos para la tabla
  let saldo = creditValueModal;
  for (let i = 1; i <= plazoModal; i++) {
    const monthInterestValue = saldo * (tasaMV / 100);
    const monthlySeguroVidaValue = saldo * 0.00095;
    const capitalQuote =
      monthlyValue - monthInterestValue - monthlySeguroVidaValue;

    // Agregar datos del mes actual al array
    monthsData.push({
      mes: i,
      saldo: saldo,
      interes: monthInterestValue,
      seguroVida: monthlySeguroVidaValue,
      abonoCapital: capitalQuote,
    });

    // Actualizar el saldo para el siguiente mes
    saldo -= capitalQuote;
  }

  return (
    <>
      <div className="modalContainer">
        <div className="contentTitle">
          <div className="returnButton"></div>
          <div className="modalTitle">
            <p>Tasas y plan de pago</p>
          </div>
        </div>
        <div className="valuesContent">
          <div className="modalContentUp">
            <div className="contentUp">
              <h4>Valor del crédito</h4>
              <p>${formatNumberWithCommas(creditValueModal)}</p>
            </div>
            <div className="contentUp">
              <h4>Plazo</h4>
              <p>{plazoModal} Meses</p>
            </div>
            <div className="contentUp">
              <h4>Tasa Efectiva Anual</h4>
              <p>{formatNumberWithCommas(tasaEAModal)}%</p>
            </div>
            <div className="contentUp">
              <h4>Tasa Mensual Vencida (M.V.)</h4>
              <p>{tasaMVModal.toFixed(2)}%</p>
            </div>
          </div>
          <div className="modalContentBottom">
            <div className="contentBotton">
              <h4>Cuota Mensual</h4>
              <p>${formatNumberWithCommas(monthlyValue)}</p>
            </div>
            <div className="contentBotton">
              <h4>Intereses</h4>
              <p>${formatNumberWithCommas(interestValue)}</p>
            </div>
            <div className="contentBotton">
              <h4>Seguro de vida</h4>
              <p>${seguroVidaModal}</p>
            </div>
            <div className="contentBotton">
              <h4>En total pagarás:</h4>
              <p>${formatNumberWithCommas(totalValue)}</p>
            </div>
          </div>
        </div>
        <div className="modalContent">
          <table className="modalTable">
            <thead>
              <tr>
                <th>Mes</th>
                <th>Saldo</th>
                <th>Interés Mes Vencido</th>
                <th>Seguro de Vida</th>
                <th>Abono a Capital</th>
              </tr>
            </thead>
            <tbody>
              {monthsData.map((month) => (
                <tr key={month.mes}>
                  <td>{month.mes}</td>
                  <td>${formatNumberWithCommas(month.saldo)}</td>
                  <td>${formatNumberWithCommas(month.interes)}</td>
                  <td>${formatNumberWithCommas(month.seguroVida)}</td>
                  <td>${formatNumberWithCommas(month.abonoCapital)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Modal;
