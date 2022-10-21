# Summary Deployment

### 1. Apa itu deployment?
     Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang telah dikerjakan oleh para pengembang. Penyebarannya dapat melalui beragam cara tergantung dari jenis aplikasinya. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri.

### 2. Kenapa Perlu Build?

    Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men-deploy aplikasi. Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan cepat.

__npm run build__

    ini akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum men-deploy ke produksi. untuk pengembangan normal, gunakan npm start

### 3. Deployment menggunakan surge

Surge adalah layanan penerbit website statik (static web publishing) gratis untuk Front-End Developers. Website statik yang menggunakan surge akan memiliki subdomain * surge.sh. Surge dapat menerima file HTML, CSS, dan JS. berikut adalah cara install surge:

__npm install --global surge__

### 4. Deployment menggunakan netlify cli

Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment. Netlify memungkinkan kita untuk mempublish website statis secara gratis. Netlify juga sudah terintegrasi dengan Git Host popular seperti Github, Gitlab dan Bitbucket.

__npm install netlify-cli -g__


