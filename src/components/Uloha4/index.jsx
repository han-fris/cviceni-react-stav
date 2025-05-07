import './carousel.css';
import { useState } from 'react';

/*
Zadání 1: Nachystejte si adresy obrázků níže do pole.
Zadání 2: Přidejte komponentě stavovou proměnnou, ve které bude index právě aktivního obrázku.
  Na začátku 0.
Zadání 3: Pro `src` v tagu `img` použijte adresu z pole pod správným indexem.
Zadání 4: Tlačítky ← a → měňte index.

Bonus: Pozor na krajní hodnoty. Pokud dojdete na konec nebo začátek pole, tak už v daném směru
  neměňte index, aby neutekl mimo položky v poli. Nastavte tlačítkům atribut `disabled`, pokud
  v jejich směru už není žádný obrázek.
  
  JÁ CHTELA ABY POKRACOVAL CARUSEL S POSLEDNÍ NEBO PRVNÍ FOTKOU, TAKŽE SE TOČÍ DOKOLEČKA
*/

import img01 from '../../../public/assets/WLUHO9A_xik.jpg';
import img02 from '../../../public/assets/DA1eGglMmlg.jpg';
import img03 from '../../../public/assets/kTxL6le0Wgk.jpg';
import img04 from '../../../public/assets/7go5UASxmDY.jpg';
import img05 from '../../../public/assets/YmATDIFsCmQ.jpg';

const imgUrls = [img01, img02, img03, img04, img05];

export const Uloha4 = () => {
  const [img, setImg] = useState(0);

  return (
    <div className="carousel">
      {img >= 0 ? (
        <button
          className="carousel__predchozi"
          aria-label="předchozí"
          onClick={() => setImg(img - 1)}
        >
          ←
        </button>
      ) : (
        <button
          className="carousel__predchozi"
          aria-label="předchozí"
          onClick={setImg(4)}
        >
          ←
        </button>
      )}

      <div className="carousel__media">
        <img className="carousel__image" src={imgUrls[img]} alt="" />
      </div>

      {img <= 4 ? (
        <button
          className="carousel__dalsi"
          aria-label="další"
          onClick={() => setImg(img + 1)}
        >
          →
        </button>
      ) : (
        <button
          className="carousel__dalsi"
          aria-label="další"
          onClick={setImg(0)}
        >
          →
        </button>
      )}
    </div>
  );
};
