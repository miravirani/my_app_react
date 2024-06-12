import { useState } from 'react';

function DigitalClock() {
    let [date, setDate] = useState(new Date())

    setInterval(() => {
      setDate(new Date())
    },1000)
  
    return (
      <>

      {date.getHours()  + ":" + date.getMinutes() + ":" + date.getSeconds()}

      </>
    );
}
export default DigitalClock;