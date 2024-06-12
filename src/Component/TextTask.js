import { useState } from 'react';

function TextTask(){
    let[text, setText] = useState("Hello");

    return(
        <>
        <h1>{text}</h1>
        <button onClick={(t) => {

            t.preventDefault();
            setText(text === "Hello" ? "world" : "Hello");

        }}>
            Click Me!
        </button>
        </>
    )
}
export default TextTask;