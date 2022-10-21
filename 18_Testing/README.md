# Summary Testing

### 1. Apa itu testing?
     Testing adalah prosese memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita

### 2. Manfaat dari testing
    (1) Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain meniadi broken kita akan segera mengetahuinya.
    (2) Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

### 3. Rekomendasi Tools pada testing react
1 __Jest__ :  Test runner pada JavaScript yang memungkinkan Anda mengakses
                    DOM melalui isdom. Sementara jsdom hanyalah perkiraan cara keria browser, seringkali cukup baik mengetes komponen pada
                    React. lest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers sehingga Anda dapat memiliki kontrol lebih pada kode yang dijalankan.
2 __React Testing Library__ : Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tapa bergantung
                                    pada detail 'implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksesibilitas. Mungkin tidak memberikan cara untuk me-render secara "dangkal" pada sebuah komponen tanpa anak, test runner seperti Jest yang memungkinkan kita melakukan mocking.

### 4. Kategori Testing

__LabelText: getByLabelText: <label for="search" />__
__PlaceholderText: getByPlaceholderText: <input placeholder="Search" />__
__AltText: getByAltText: <img alt="profile" />__
__DisplayValue: getByDisplayValue: <input value="JavaScript" />__

### 5. Library yang digunakan

Untuk mengetes custom hook, kita menggunakan React Hooks Testing Library. Did akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen.

__npm install -D @testing-library/react-hooks__



