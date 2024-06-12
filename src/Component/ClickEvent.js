import { useState } from 'react';

function ClickEvent() {
    let [text, setText] = useState("Hello");

    return (
        <>
            <h1>{text}</h1>

            <button onCut={(t) => {

                t.preventDefault();
                setText(text === "Hello" ? "world" : "Hello");

            }} style={{ width: "10%" }}>
                Click Me!
            </button>
        </>
    )
}
export default ClickEvent;