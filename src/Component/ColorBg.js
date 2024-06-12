import { useState } from 'react';

function ColorBg() {
  let [color, setBgColor] = useState('');

  return (
    <>
      <div style={{ backgroundColor: color, padding: '20px', height: '550px' }}>
        <p>Selected color: {color}</p>

        <button onClick={() => { setBgColor('red') }}
          style={{ backgroundColor: 'red', color: 'white', border: '1.5px solid white', width: '100px', height: '30px' }}>
          Red Button
        </button>

        <button onClick={() => { setBgColor('green') }}
          style={{ backgroundColor: 'green', color: 'white', border: '1.5px solid white', width: '100px', height: '30px' }}>
          Blue Button
        </button>

      </div>
    </>
  );
}
export default ColorBg;
