import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function useParamsHooks() {
    const [apicalling, setApiCalling] = useState(true);
    const { id } = useParams();

    function getData() {
        axios.get(`https://6620acad3bf790e070b04045.mockapi.io/user/user/${id}`)
            .then((response) => {
                console.log("data ==", response.data);
                setApiCalling(response.data);
            })
            .catch((err) => {
                console.error("error ==", err);
            });
    }

    useEffect(() => {
        getData();
    }, [id]);

    // if (!apicalling) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div style={{ margin: '10px', border: '1px solid black', display: 'flex' }}>
            <img src={apicalling.avatar} style={{ width: '150px', height: '150px', paddingRight: '20px' }} alt={`${apicalling.name}'s avatar`} />
            <div>
                <p>id: {apicalling.id}</p>
                <p>name: {apicalling.name}</p>
                <p>Date: {new Date(apicalling.createdAt).toLocaleDateString()} {new Date(apicalling.createdAt).toLocaleTimeString()}</p>
            </div>
        </div>
    );
}

export default useParamsHooks;
