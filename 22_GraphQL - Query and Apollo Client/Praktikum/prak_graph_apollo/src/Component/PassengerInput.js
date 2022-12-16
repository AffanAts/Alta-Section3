import { useState } from "react"
import "./Home.css"

function PassengerInput(props) {
  const [Pengunjung, setPengunjung] = useState({
    nama: "",
    umur: "",
    jenis_kelamin: "Pria",
    editing: true,
  })

  const onChange = (e) => { 
    setPengunjung({
      ...Pengunjung,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    if (Pengunjung.nama.trim() && Pengunjung.umur && Pengunjung.jenis_kelamin) {
      const umur = Pengunjung.umur
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        const newData = {
          nama: Pengunjung.nama,
          umur: Pengunjung.umur,
          jenisKelamin: Pengunjung.jenis_Kelamin,
        }
        props.tambahPengunjung(newData)
        setPengunjung({
          ...Pengunjung,
          nama: "",
          umur: "",
          jenisKelamin: "Pria",
        })
      }
    } else {
      alert("Data masih ada yang kosong")
    }
  }

  const handleBukaInput = () => {
    setPengunjung({
      ...Pengunjung,
      editing: false,
    })
  }

  const handleTutupInput = () => {
    setPengunjung({
      ...Pengunjung,
      editing: true,
    })
  }

  let viewMode = {}
  let editMode = {}

  if (Pengunjung.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={Pengunjung.nama} name="nama" onChange={onChange} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." value={Pengunjung.umur} name="umur" onChange={onChange} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jenis_kelamin">
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  )
}

export default PassengerInput