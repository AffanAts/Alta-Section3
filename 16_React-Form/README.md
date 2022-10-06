# Summary React Form

### Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. berikut macam macam form
1. Elemen <input>
2. Elemen <textarea>
3. Elemen <select>
4. Radio Button
5. Checkbox

### Apa itu Controlled Component?
Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian komponen react yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya. sebuah elemen masukan form yang nilainya dikontrol oleh react melalui cara seperti ini disebut sebagai "Controlled Component"

### Uncontrolled Component?
Uncontrolled Component adalah alternatif lain dari controlled component dimana data form akan ditangani oleh DOM-nya sendiri. untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

### Basic Validation
Kenapa kita perlu validasi?
ada 3 alasan mengapa validasi form diperlukan yaitu:
1. Mencari input data yang benar dan sesuai format
2. Melindungi akun pengguna
3. Melindungi sistem atau aplikasi