# Summary Global State

## Redux

#### 1. Kapan saat yang tepat untuk menggunakan Redux
     (1) Banyak state yang perlu ditaruh di banyak tempat
     (2) State pada app sering berubah
     (3) Logic untuk mengubah state kompleks
     (4) Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
     (5) Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

#### 2. Redux Libraries dan Tools
    (1) React-Redux
    (2) Redux Toolkit
    (3) Redux DevTools Extension

### 3. Komponen Penting di Redux
    (1) Actions : digunakan untuk memberikan informasi dari aplikasi react ke dalam redux store
    (2) Reducer : Pure Javascript functions yang mengambil state aplikasi saat ini dan objek action lalu mengembalikan state aplikasi terbaru
    (3) Store   : Objek sentral yang menyimpan state pada aplikasi

### 4. Memakai dan mengubah state 
    (1) Hooks
    (2) Connect


## Redux Thunk
    adalah Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action

### Kenapa perlu redux thunk? untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data





