import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function apiCall() {
    const [apicalling, setApiCalling] = useState([]);
    // let [reloading, setReloading] = useState(false)

    function getData() {
        axios.get("https://6620acad3bf790e070b04045.mockapi.io/user/user")
            .then((response) => {
                console.log("data ==", response.data);
                setApiCalling(response.data);

            })
            .catch((err) => {
                console.error("error ==", err);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>

            {apicalling.map((value, index, array) => {

                return (

                    <div key={value.id}>
                        <div style={{ margin: '10px', border: '1px solid black', display: 'flex' }}>

                            <img src={value.avatar} style={{ width: '150px', height: '150px', paddingRight: '20px' }} />
                            <div>
                                <p>id: {value.id}</p>
                                <p>name: {value.name}</p>
                                <p>Date: {new Date(value.createdAt).toLocaleDateString()} {new Date(value.createdAt).toLocaleTimeString()}</p>
                                <Link to={`/mockApi/${value.id}`}>View Details</Link>
                            </div>

                        </div>
                    </div>
                )
            })}
            {/* {!apicalling.length ? <h1>No data available</h1> :
                apicalling.map((value, index, array) => (
                    <div key={index}>
                        <p>{value.name}</p>
                    </div>
                ))
            }

            <button onClick={(e) => {
                e.preventDefault();
                setReloading(!reloading);
            }}>
                Reload
            </button> */}
        </>
    );
}
export default apiCall;
