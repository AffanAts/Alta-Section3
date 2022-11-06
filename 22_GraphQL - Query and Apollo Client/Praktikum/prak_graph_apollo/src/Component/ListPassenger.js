import ListItem from './ListItem';
import { getPassengersById } from '../GraphQL/gql';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
const ListPassenger = props => {
    const [getPassenger, { data, error }] = useLazyQuery(getPassengersById)
    const [passengerID, setPassengerID] = useState(1)
    
    if (error) {
        console.log(error)
        return null
    }

    const onGetPassengerDataById = () => {
        getPassenger({
            variables: {
                id: passengerID
            }
        })
    }

    const onChangePassengerID = (e) => {
        if (e.target) {
            setPassengerID(e.target.value)
        }
    }

    
    return (
        <div>
            <div className='input-container'>
            <input value={passengerID} onChange={onChangePassengerID}></input>
                <button onClick={onGetPassengerDataById}>Getting Passenger Data</button>
            </div>
            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {data?.Pengunjung.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
        </div>
    )
}

export default ListPassenger;