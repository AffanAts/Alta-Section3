# Summary Event Handling

### 1. State adalah data private sebuah component. data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.
     (1) Data hanya bisa dimodifikasi menggunakan setState
     (2) Setiap terjadi modifikasi akan terjadi render ulang
     (3) Perubahannya bersifat Asynchronus
     (4) State dipakai dalam class

### 2. Perbedaan Props dan State
    (1) Props datanya bersifat read-only sedangkan state data dapat dirubah dengan cara asynchronus
    (2) Props tidak dapat dimodifikasi sedangkan state bisa dimodifikasi menggunakan this.setState

## Perbedaan Stateful Component dan Stateless Component

### 3. Stateful Component adalah memiliki state. component ini dibuat dengan class. kelebihan dari class component adalah memiliki lifecycle.
### 4. Stateless Component adalah tidak memiliki state hanya prop. Umumnya component ini dibuat dengan function karena kodenya lebih ringkas.


