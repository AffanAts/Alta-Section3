import { gql } from "@apollo/client"

export const getAllPassengers = gql`
query MyQuery {
  Pengunjung {
    id
    jenis_kelamin
    nama
    umur
  }
}
  `
  export const getPassengersById = gql`
  query MyQuery($id: Int!) {
    Pengunjung(where: {id: {_eq: $id}}) {
        id
        jenis_kelamin
        nama
        umur
    }
}
`
export const insertPassengers = gql `
    mutation MyMutation($nama: String, $umur: Int, $jenis_kelamin: String) {
        insert_Pengunjung_one(object: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}) {
          id
          jenis_kelamin
          nama
          umur
        }
    }
`


export const deletePassengers = gql `
    mutation MyMutation($id: Int) {
        delete_Pengunjung(where: {id: {_eq: $id}}) {
            returning {
              id
              jenis_kelamin
              nama
              umur
            }
        }
    }
`

export const updatePassengers = gql `
    mutation MyMutation($id: Int, $nama: String, $umur: Int, $jenis_kelamin: String) {
        update_Pengunjung(where: {id: {_eq: $id}}, _set: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}) {
            returning {
              id
              jenis_kelamin
              nama
              umur
            }
        }
    }
  
`