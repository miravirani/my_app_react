import { useRef, useState } from 'react';

function UseRef() {
    let ref = useRef(0);
    let count = 0;
    let [flag, setFlag] = useState(true)

    return (
        <button onClick={(e) => {
            e.preventDefault()
            ref.current += 1
            count += 1
            setFlag(flag? false : true)
            console.log("ref :", ref.current, "count :", count, "flag:",flag);
        }}>
            Click me!
        </button>
    );
}
export default UseRef;