import { useState } from 'react';
/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/

export const Uloha8 = () => {
  const [prsi, setPrsi] = useState(0);
  const stav = ['Ano', 'Ne', 'Možná'];
  const zmenaStavu = () => (prsi === 2 ? setPrsi(0) : setPrsi(prsi + 1));

  return (
    <>
      <h3>Prší v Brně: {stav[prsi]}</h3>
      <button onClick={zmenaStavu}>změnit</button>
    </>
  );
};
