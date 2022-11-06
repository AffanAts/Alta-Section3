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