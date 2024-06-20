// useCreditSimulation.js (nombre del hook personalizado)
import { useState } from 'react';

const useCreditSimulation = () => {
  const [seguroVida, setSeguroVida] = useState(950);
  const [plazo, setPlazo] = useState(6);
  const [montoCredito, setMontoCredito] = useState(1000000);
  const [tasaEA, setTasaEA] = useState(20.00);

  const handleSeguroVida = (event) => {
    setSeguroVida(parseFloat(event.target.value));
  };

  const handlePlazoChange = (event) => {
    setPlazo(parseInt(event.target.value));
  };

  const handleMontoCreditoChange = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    setMontoCredito(value === "" ? 0 : parseInt(value, 10));
  };

  const handleTasaEAChange = (event) => {
    setTasaEA(parseFloat(event.target.value));
  };

  const EApercetile = tasaEA / 100;
  const tasaMV = (Math.pow(EApercetile + 1, 1 / 12) - 1) * 100;

  // Función para formatear números con separadores de miles
  const formatNumberWithCommas = (number) => {
    return number.toLocaleString("es-ES");
  };

  return {
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
  };
};

export default useCreditSimulation;
