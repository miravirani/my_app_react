import React from "react";
import axios from "axios";

function DownloadFile(){
    return(
        <>
            <button onClick={(e) => {
                e.preventDefault()
                try {
                    axios.get("http://localhost:7001/getfiles")
                    .then((data) => {
                        console.log("img download", data.data)
                        
                    }).catch((error) => {
                        console.log("error", error);
                    })
                    
                } catch (error) {
                    console.log(error);
                }
            }}>
                Download
            </button>
        </>
    )
}
export default DownloadFile