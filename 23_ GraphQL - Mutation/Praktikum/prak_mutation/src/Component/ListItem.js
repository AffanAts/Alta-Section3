import "./Home.css"
import { useState } from "react"
import { UpdateMutation } from "./EditPassenger"

const ListItem = (props) => {

    const baseUpdate = {
        nama: "",
        umur: "",
        jenis_kelamin: ""
    }

    const { id, nama, umur, jenis_kelamin } = props.data

    const [editingStatus, setEditingStatus] = useState(false)
    const [newUpdatePassenger, setNewUpdate] = useState(baseUpdate)
    const {updatePassenger} = UpdateMutation()

    const handleEditingStatus = () => {
        setEditingStatus(!editingStatus)
    }

    const handleInputUpdateData = (e) => {
        const { name, value } = e.target
        
        setNewUpdate({
            ...newUpdatePassenger,
            [name]: value
        })
    }

    const handleSubmittedUpdateData = () => {
        updatePassenger({
            variables: {
                id: id,
                nama: newUpdatePassenger.nama,
                umur: newUpdatePassenger.umur,
                jenis_kelamin: newUpdatePassenger.jenis_kelamin
            }
        })
    }

    return (
        <tbody>
        <>
      {editingStatus ? (    
        <tr>
          <td>
            <form onSubmit={handleSubmittedUpdateData}>
              <input name="nama" onChange={handleInputUpdateData} placeholder={nama}/>
            </form>
          </td>
          <td>
            <form onSubmit={handleSubmittedUpdateData}>
              <input name="umur" onChange={handleInputUpdateData} placeholder={umur}/>
            </form>
          </td>
          <td>
            <form onSubmit={handleSubmittedUpdateData}>
              <input name="jenisKelamin" onChange={handleInputUpdateData} placeholder={jenis_kelamin}/>
            </form>
          </td>
          <td>
            <form onSubmit={handleSubmittedUpdateData}>
              <button >Submit</button>
              <button onClick={handleEditingStatus}>
                Cancel
              </button>
            </form>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{nama}</td>
          <td>{umur}</td>
          <td>{jenis_kelamin}</td>
            <button onClick={handleEditingStatus}>Edit</button>
            <button onClick={() => props.hapusPengunjung(id)}>
              Hapus
            </button>
        </tr>
            )}
            </>
    </tbody>
    )
}

export default ListItem;