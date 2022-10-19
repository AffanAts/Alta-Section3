import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import NameForm from './FormCoding';


describe('NameForm', () => {
    test('renders NameForm component', () => {
        render(<NameForm/>)
        //screen.debug()
        expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument()
        expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Email:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeInTheDocument()
    });
    test('input data to become value', () => {
        render(<NameForm/>)
        //screen.debug()
        
        //Nama
        fireEvent.input(
            screen.getByRole("textbox", {name:/nama/i}), 
            {target: {value: "Affan"}}
        )
        //Email
        fireEvent.input(
            screen.getByRole("textbox", {name:/email/i}), 
            {target: {value: "formtesting@gmail.com"}}
        )
        //Nomor
        fireEvent.input(
            screen.getByRole("spinbutton", {name:/no Handphone/i}), 
            {target: {value: "081269696969"}}
        )
        //Pendidikan
        fireEvent.change(
            screen.getByRole("radio", {name:/pendidikan/i})
        )
        fireEvent.click(screen.getByLabelText(/IT/),
            { target: { value: "IT" } }
        )
        //Kelas
        const programClass = screen.getByRole("combobox", 
            { name: /kelas/i }
        )
        userEvent.selectOptions(programClass, "reactjs")
        //Image Upload
        const imageFile = new File(
            ["formtesting"],
            "formtesting.pdf",
            { name: /surat kesungguhan/i },
            {type: "image/*,.pdf"}
        )
        const imageInput = screen.getByLabelText(/Foto Surat Kesungguhan/)
        expect(imageInput.files.length).toBe(0)
        userEvent.upload(imageInput, imageFile)
        expect(imageInput.files.length).toBe(1)

        //TextArea
        fireEvent.input(
            screen.getByRole("textbox", {name:/harapan/i}), 
            {target: {value: "ini adalah teks area, 3 month this month is so frustrating"}}
        )

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Affan");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("formtesting@gmail.com");
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("081269696969");
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked(true)
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs")
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("ini adalah teks area, 3 month this month is so frustrating");
        });

    test('when typing wrong when inputting data', () => {
        render(<NameForm/>)
        //screen.debug()
 
        //Nama
        fireEvent.input(
            screen.getByRole("textbox", {name:/nama/i}), 
            {target: {value: "4ffan Ha1dar 4tstsabit"}}
        )
        //Email
        fireEvent.input(
            screen.getByRole("textbox", {name:/email/i}), 
            {target: {value: "emailnyasalah#gmail.com"}}
        )
        //Nomor
        fireEvent.input(
            screen.getByRole("spinbutton", {name:/no Handphone/i}), 
            {target: {value: "35235"}}
        )

        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument()
        expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument()
        expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument()
        });
});