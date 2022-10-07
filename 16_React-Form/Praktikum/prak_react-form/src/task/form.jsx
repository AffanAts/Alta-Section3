import {useState, useRef} from "react";
import '../style/style.css'


export default function FormPage () {
    const baseData = {
      nama: "",
      email: "",
      noHandphone: "",
      pendidikan: "",
      kelas: "",
      surat: "",
      harapan: ""
    }

    const [data, setData] = useState(baseData)
    const nameRegex = /^[A-Za-z" "]+$/
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const noHandphoneRegex = /^[0-9]*$/
    const [errMsg, setErrMsg] = useState("")
    const [errMsgName, setErrMsgName] = useState("")
    const [errMsgEmail, setErrMsgEmail] = useState("")
    const [errMsgHandphone, setErrMsgHandphone] = useState("")
    const fotoSK = useRef(null)

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value
    
        if (name === "nama") {
          if (nameRegex.test(value)) {
            setErrMsgName("")
        } else {
            setErrMsgName( "*Nama Lengkap Harus Berupa Huruf")
        }
        }
    
        if (name === "email") {
            if (emailRegex.test(value)) {
                setErrMsgEmail("")
        }else {
            setErrMsgEmail("*Email Tidak Sesuai")
        }
        }
    
        if (name === "noHandphone") {
            if (noHandphoneRegex.test(value)) {
                setErrMsgHandphone("")
        } else {
            setErrMsgHandphone("*No Handphone Tidak Sesuai")
        }
        }
    
      setData({
        ...data,
        [name]: value 
      })
      console.log("data", data)
    }
      
      const handleSubmit = (event) => {
        if (
            errMsg !== "" ||
            errMsgName !== "" ||
            errMsgEmail !== "" ||
            errMsgHandphone !== ""
        ){
            alert("Data Pendaftar Tidak Sesuai")
        } else {
            alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
        }
        event.preventDefault()
      }
    
      const resetData = () => {
        setData(baseData);
        setErrMsg("")
      }
    
    
    return (
        <>
        <div className='container'>
            <center><h1 className="title">Pendaftaran Peserta Coding Bootcamp</h1></center>
        <form onSubmit={handleSubmit}>
            <label className="title-form">
                Nama Lengkap:
                <br></br>
                <input className="form-control form-case" type="text"  aria-label="default input example" name="nama" value={data.nama} onChange={handleInput} required />            
            </label>
            <br></br>
            <span className="errMessage">{errMsgName}</span>
            <br></br>
            <label className="title-form">
                Email:
                <br></br>
                <input className="form-control form-case" type="text"  aria-label="default input example" name="email" value={data.email} onChange={handleInput} required />            
            </label>
            <br></br>
            <span className="errMessage">{errMsgEmail}</span>
            <br></br>
            <label className="title-form">
                No Handphone:
                <br></br>
                <input className="form-control form-case" type="integer"  aria-label="default input example" maxLength={14} minLength={9} name="noHandphone" value={data.noHandphone} onChange={handleInput} required />            
            </label>
            <br></br>
            <span className="errMessage">{errMsgHandphone}</span>
            <br></br>
            <div>
                <label>Latar Belakang Pendidikan:</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault pendidikan" id="flexRadioDefault1" defaultChecked onChange={handleInput} value={data.pendidikan}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            IT
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault pendidikan" id="flexRadioDefault2" onChange={handleInput} value={data.pendidikan} />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Non IT
                    </label>
                </div>
            </div>
            <label>
                Kelas Coding yang dipilih:
                <br></br>
                <select className="form-select form-case" aria-label="Default select example" name="kelas" onChange={handleInput} value={data.kelas}>
                    <option selected>Pilih Salah Satu Program</option>
                    <option value="Golang">Coding Backend with Golang</option>
                    <option value="ReactJs">Coding Frontend with ReactJS</option>
                    <option value="Fullstack">Fullstack Developer</option>
                </select>
            </label>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Foto Surat Kesungguhan</label>
                <br></br>
                <input className="form-control" type="file" name="surat" id="formFile" refs={fotoSK} />
            </div>
            <label>Harapan untuk cooding bootcamp ini:</label>
            <br></br>
            <div class="form-floating">
                <textarea className="form-control" id="floatingTextarea2"  name="harapan" onChange={handleInput}/>
            </div>
            <input type="submit" value="Submit" className="btn-smt" />
            <button onClick={resetData} className="btn-rst">Reset</button>
        </form>
        </div>
        </>
    )
}
    