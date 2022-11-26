import { useState } from "react";

export default function Form() {
  const data = {
    inputName: "",
    inputSecondName: "",
    inputEmail: "",
    inputTextArea: "",
  };

  const [input, setInput] = useState(data);

  const handlerOnChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      input.inputName === "" ||
      input.inputSecondName === "" ||
      input.inputEmail === "" ||
      input.inputTextArea === ""
    ) {
      alert("Silahkan isi data pada form dengan lengkap ya");
    } else {
      alert(`
                Data dengan biodata : 
                Nama depan: ${input.inputName}
                Nama belakang: ${input.inputSecondName}
                Email : ${input.inputEmail}
                Menyuarakan : ${input.inputTextArea}
                Diterima!!
            `);
    }
    console.log(input);
  };
  return (
    <div class="content">
      <div class="container my-5">
        <div class="bg-transparent p-5 rounded" style={{ marginTop: "-180px" }}>
          <div class="col-sm-8 py-5 mx-auto">
            <center>
              <div class="card" style={{ width: "800px" }}>
                <div class="card-body">
                  <form class="row g-3" onS ubmit={handleOnSubmit}>
                    <div class="col-md-6">
                      <label for="inputName" class="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="inputName"
                        onChange={handlerOnChange}/>
                    </div>
                    <div class="col-md-6">
                      <label for="inputSecondName" class="form-label">
                        Second Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="inputSecondName"
                        onChange={handlerOnChange}
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        name="inputEmail"
                        placeholder="Input Email"
                        onChange={handlerOnChange}
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress2" class="form-label">
                        Vote to protect animals
                      </label>
                      <textarea
                        type="text"
                        class="form-control"
                        name="inputTextArea"
                        placeholder=""
                        onChange={handlerOnChange}
                      />
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
