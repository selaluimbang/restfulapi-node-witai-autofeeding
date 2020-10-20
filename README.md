<!-- # Simple Restful API Automachine Feeding Node JS Express WIT.AI -->
# Membuat Restful API Sederhana Dengan Kasus Automachine Feeding
[![GitHub repo](https://img.shields.io/badge/Repo-GitHub-yellow.svg)](https://github.com/selaluimbang/restfulapi-node-witai-autofeeding)

## Dibuat dengan Bahasa 🇮🇩 Versi Indonesia

Dibuat dengan bahasa Indonesia untuk mengakomodir para pengembang perangkat lunak di Indonesia sebagai referensi.

## Daftar Isi
- [Membuat Restful API Sederhana dengan kasus Automachine Feeding](#membuat-restful-aPI-sederhana-dengan-kasus-automachine-feeding)
    - [Dibuat dengan Bahasa 🇮🇩 Versi Indonesia](#dibuat-dengan-bahasa-id-versi-indonesia)
    - [Daftar Isi](#daftar-isi)
    - [Konfigurasi Aplikasi](#konfigurasi-aplikasi)
    - [WIT.AI](#witai)
    - [Referensi](#referensi)
    - [Profil Kontributor](#profil-kontributor)

## Konfigurasi Aplikasi

#### Pertama-tama kita harus mengetahui ada apa saja sih dalam projek ini ?
____
#### 1. Node JS
Projek ini menggunakan Node JS sebagai base utama.
baca tentang Node.JS pada tautan berikut : [Tautan](https://nodejs.org/en/).
atau bisa tonton bagaimana menggunakan Node.JS sebagai base projek untuk restful API di tautan berikut : 
[Youtube Traversy Media : Node JS Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
____
#### 2. Menggunakan NPM
Apa sih NPM ?
NPM atau singkatan dari Node Package Manager adalah sebuah tools repository online dan package manager jika teman-teman ingin menggunakan modul yang sudah dibuat oleh kontributor-kontributor open source lainnya di seluruh dunia. Jadi tanpa perlu repot kita membuat satu atau dua fungsi, kita bisa pakai modul yang sudah disimpan di NPM secara online untuk bisa kita pakai. Untuk penggunaan package-nya sendiri teman-teman harus cermat dan hati-hati dalam memilih jikalau package tersebut sudah tidak update dan lain sebagainya. Nah NPM ini saya gunakan untuk mempermudah pengembangan dan penambahan modul-modul lain.

Baca Dokumentasi pada tautan berikut : [NPM Dokumentasi](https://www.npmjs.com/)
____
#### 3. Express JS
Setelah menginstall NPM yang biasanya sudah terinstall ketika kita install Node JS.
Setelah itu kita tambahkan express js. Untuk apa sih ? untuk struktur projek atau framework node menggunakan Express.JS

Installasi Express JS pada projek Node.JS menggunakan NPM
```
npm install --save express
```
baca tentang Express.JS pada tautan berikut : [Tautan](https://expressjs.com/).
atau bisa tonton penggunaan Express JS di tautan berikut : [Youtube Traversy Media : Express JS Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE).
____
#### 4. Penggunaan Node.JS dan Express JS
Nah setelah itu saya menggunakan Express JS pada Node.JS
Ingin mengetahui bagaimana caranya bisa dengan cek tautan berikut : [Youtube Traversy Media : Node JS + Express JS](https://www.youtube.com/watch?v=k_0ZzvHbNBQ&list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp)
____
#### 5. Winston Logger
Setelah menambahkan express js, saya menambahkan winston logger sebagai wadah dimana kita bisa tahu aktivitas aplikasi kita dengan pencatatan lognya. Jadi jikalau ada error, Winston bisa melakukan handle kemudian kita menyimpannya dalam sebuah file.

Installasi Winston JS pada projek Node.JS menggunakan NPM
```
npm install --save winston
```
Berikut adalah dokumentasi Repository Winston Logger : 
[![GitHub repo Winston Logger](https://img.shields.io/badge/Repo-GitHub-green.svg)](https://github.com/winstonjs/winston)

Bisa tonton cara penggunaan winston logger pada projek Node JS-mu pada tautan berikut : [
Web Techvids - How to : Implement Winston logger in Nodejs](https://www.youtube.com/watch?v=dU6AmzCS60g&ab_channel=WebTechvids)
____
#### 6. Body Parser
Body Parser ini digunakan untuk mengambil dan memastikan kita bisa mengakses data inputan dari request. Misalkan sebagai param atau sebagai body.
Installasi Body-Parser JS pada projek Node.JS menggunakan NPM
```
npm install --save body-parser
```
Berikut adalah dokumentasi Repository Body-Parser : 
[![GitHub repo Winston Logger](https://img.shields.io/badge/Repo-GitHub-green.svg)](https://github.com/expressjs/body-parser)
____
#### 7. Mongoose dan Mongo DB
Dalam projek ini saya menggunakan MongoDB sebagai tempat saya menyimpan data. Data yang disimpan adalah data jam feeding dan kapan harus feed.

Dokumentasi Mongo DB : [Mongo DB](https://www.mongodb.com/)
Tautan bagaimana menggunakan Mongo DB di projek Node.JS [Dev Ed : Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial](https://www.youtube.com/watch?v=vjf774RKrLc&t=1159s)

Mongoose [Tautan Dokumentasi](https://mongoosejs.com/) adalah sebuah modul untuk mempermudah objek modeling untuk projek Node.JS kamu.
Installasi Mongoose JS pada projek Node.JS menggunakan NPM
```
npm install --save mongoose
```
____
#### 8. Webpack
Nah disini juga saya menggunakan webpack, sebagai bundling projek temen-temen untuk menjaga keamanan aplikasi jika nanti teman-teman menggunakannya di server online teman-teman.
Tautan untuk mengetahui webpack lebih lanjut : [Dokumentasi Webpack](https://webpack.js.org/)

Installasi webpack pada projek Node.JS menggunakan NPM
```
npm install --save-dev webpack
```
____
#### 9. dotenv
Yang terakhir disini saya menggunakan dotenv, sebagai modul untuk dapat mengakses file berakhiran .env
untuk apa sih .env ini ? .env digunakan untuk menyimpan konfigurasi projek agar tidak dapat diketahui oleh orang lain dan mempermudah multiple developer dalam mengembangkan satu projek.

Tautan untuk mengetauin webpack lebih lanjut : [![GitHub repo dotenv](https://img.shields.io/badge/Repo-GitHub-green.svg)](https://github.com/motdotla/dotenv#readme)
Installasi dotenv pada projek Node.JS menggunakan NPM
```
npm install --save dotenv
```
____
Installasi Projek ini di komputer lokal kalian :

1. Untuk installasi projek ini, teman-teman cukup install git [Tautan Git](https://git-scm.com/). Kemudian buatlah akun github teman-teman. Kemudian pull request.

2. Setelah pull request, pastikan teman-teman sudah menginstall npm dan node.js
Ketikkan pada terminal/cmd
```
npm install
```
3. Buat file .env dan isi dengan berikut :
```
WIT_TOKEN = *witToken*
MONGO_URL = *nama mongo*

```

4. Buat Akun WIT.AI
____
## WIT.AI
Open source AutoFeedeng Machine ini adalah sebuah re.

## Referensi
Open source AutoFeedeng Machine ini adalah sebuah re.

## Profil Kontributor
 #### 1. Ismail Syababun Halim | [Linkedin](https://id.linkedin.com/in/ismail-syababun-halim-317003a3)