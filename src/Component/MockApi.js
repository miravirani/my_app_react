import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MockApi() {

    let [mock, setMock] = useState([
        { "createdAt": "2024-04-17T10:47:32.951Z", "name": "Ken Terry", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/738.jpg", "id": "1" },
        { "createdAt": "2024-04-17T14:27:50.564Z", "name": "Ms. Lawrence Dickens Sr.", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/560.jpg", "id": "2" },
        { "createdAt": "2024-04-17T15:14:22.946Z", "name": "Glenda Marvin", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/384.jpg", "id": "3" },
        { "createdAt": "2024-05-15T04:44:17.809Z", "name": "Roderick Krajcik I", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/745.jpg", "id": "4" },
        { "createdAt": "2024-05-15T01:20:14.385Z", "name": "Gilbert Deckow", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/138.jpg", "id": "5" },
        { "createdAt": "2024-05-15T03:30:03.313Z", "name": "Amelia Ledner", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/528.jpg", "id": "6" },
        { "createdAt": "2024-05-14T20:02:34.079Z", "name": "Douglas Gleason", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/751.jpg", "id": "7" }
    ]);
 
    return (
        <>

            {mock.map((value, index, array) => {

                return (

                    <div key={value.id}>
                        <div style={{ margin: '10px', border: '1px solid black', display: 'flex' }}>

                            <img src={value.avatar} style={{ width: '150px', height: '150px', paddingRight: '20px' }} />
                            <div>
                                <p>id: {value.id}</p>
                                <p>name: {value.name}</p>
                                <p>Date: {new Date(value.createdAt).toLocaleDateString()} {new Date(value.createdAt).toLocaleTimeString()}</p>
                                <Link to={`/mockAi/${value.id}`}>View Details</Link>
                            </div>

                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default MockApi;

