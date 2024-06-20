import "./modal.css";
import useCreditSimulation from "../../controller/useCreditSimulation";


function Modal() {
  const creditValueModal = 0;
  const plazoModal = 0
  const tasaEAModal = 0
  const seguroVidaModal = 0
  const tasaMVModal = 0
  const test = 0

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString("es-ES");
  };

  return (
    <>
      <div className="modalContainer">
        <div className="contentTitle">
          <div className="returnButton">regresar</div>
          <div className="modalTitle">
            <p>Tasas y plan de pago</p>
          </div>
        </div>
        <div className="valuesContent">
          <div className="modalContentUp">
            <div className="contentUp">
              <h4>Valor del crédito</h4>
              <p>${creditValueModal}</p>
            </div>
            <div className="contentUp">
              <h4>Plazo</h4>
              <p>{plazoModal} Meses</p>
            </div>
            <div className="contentUp">
              <h4>Tasa Efectiva Anual</h4>
              <p>{tasaEAModal}%</p>
            </div>
            <div className="contentUpFiller"></div>
          </div>
          <div className="modalContentBottom">
            <div className="contentBotton">
              <h4>Tasa Mensual Vencida (M.V.)</h4>
              <p>{tasaMVModal}%</p>
            </div>
            <div className="contentBotton">
              <h4>Intereses</h4>
              <p>$300.000</p>
            </div>
            <div className="contentBotton">
              <h4>Seguro de vida</h4>
              <p>${seguroVidaModal}</p>
            </div>
            <div className="contentBotton">
              <h4>En total pagarás:</h4>
              <p>$1.000.000</p>
            </div>
          </div>
        </div>
        <div className="modalContent">
          <table className="modalTable">
            <thead className="">
              <tr>
                <th>Mes</th>
                <th>Cuota Mensual</th>
                <th>Interés Mes Vencido</th>
                <th>Seguro de Vida</th>
                <th>Abono a Capital</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>${test}</td>
                <td>${test}</td>
                <td>${test}</td>
                <td>${test}</td>
                <td>${test}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="modalFooter"></div>
    </>
  );
}

export default Modal;
