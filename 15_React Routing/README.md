# Summary React Routing

### Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (single page application)
##### Multi Page Application (MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru
##### Single Page Application (SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang tejadi dalam aplikasi tersebut

### Komponen Komponen yang akan digunakan pada react router dom
- BrowserRouter
- Switch
- Route
- Link

### Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman

### Perbedaan Link dan Redirect
                 Link                                 Redirect                      
--------------------------------------- -------------------------------------
1.Dapat digunakan pada kondisi apapun   1.Lebih sering digunakan pada halaman 404
2.Memberikan history baru pada browser  2.Menimpa history pada browser
3.Bereaksi dengan click seperti a href  3.Bereaksi dengan suatu kondisi

### Hook Routing React
1. useHistory       : memberi kita akses ke instance riwayat yang dapat anda gunakan untuk bernavigasi.
2. useLocation      : mengembalikan objek lokasi yang mewakili URL saat ini.
3. useParams        : mengembalikan objek yang berbentuk key value dari parameter URL.
4. useRouteMatch    : digunakan untuk mencocokan URL saat ini dengan cara yang sama dengan komponen <Route>
