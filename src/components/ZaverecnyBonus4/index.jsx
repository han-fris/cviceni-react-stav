import './style.css';
import { useState } from 'react';
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [cislo, setCislo] = useState(0);
  const [cislo2, setCislo2] = useState(0);

  const handleChange = (event) => {
    setCislo(event.target.value);
  };
  const handleChange2 = (event) => {
    setCislo2(event.target.value);
  };

  return (
    <div className="bonus4">
      <input type="number" defaultValue="0" onChange={handleChange} /> +{' '}
      <input type="number" defaultValue="0" onChange={handleChange2} /> ={' '}
      <output>{Number(cislo) + Number(cislo2)}</output>
    </div>
  );
};
