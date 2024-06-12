import React, { useContext } from "react";
import B4 from "./B4";
import { myFirstContext } from "./B1";

function B3() {
    let myContextApi = useContext(myFirstContext);
    console.log("data == ", myContextApi);
    return (
        <>
            <h2>B3 component</h2>
            <B4 />
        </>
    )
}
export default B3;