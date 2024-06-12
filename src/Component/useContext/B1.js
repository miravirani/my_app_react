import React, { createContext } from "react";
import B2 from "./B2";

const myFirstContext = createContext()

function B1() {
    return (
        <>
            <h1>B1 component</h1>
            <myFirstContext.Provider value={{ name: "weetech", email: "weetech@gemail.com", year: 2012 }}>
                <B2 />
            </myFirstContext.Provider>

        </>
    )
}
export default B1;
export {myFirstContext}