// import package
const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')

/*
    * Membuat object menggunakan library express
    * variable app ini hanya menyimpan library yang kita panggil  
    * atau prosess import library express
*/

const app = express() 

/*
    * Menentukan content-type menggunakan application/json
    * Karena request ini bukan hanya json saja seperti x-www-form-urlencoded or multipart/data seperti untuk upload
    * atau data yang dikirim melalui form
*/

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const db = require('./app/models')
db.mongoose
    .connect(db.url)
    .then(() => {
        console.log("Connected to database");
    }).catch((err) => {
        console.log(err);
        process.exit()
    });

/*
    * Definisi URL yang kita butuhkan
    * Dengan memanggil method yang ada di dalam express seperti get,post,put,delete
    * Dengan memasukkan parameter pada method yang dibuat yaitu pertama path/url dan parameter kedua 
    * untuk request dan response yang diberikan pada saat kita mengakses method nya
*/

app.get('/', (req, res) => {
    // menampilkan response dengan tipe data json
    res.json({
        message: "Welcome to express restful api mongodb tutorial"
    })
})

/*
    * Import post route yang sudah dibuat 
    * Karna pada post route memanggil parameter app maka jangan lupa dimasukkan ketika import post route
*/

require('./app/routes/post_route')(app)


/*
    * Menentukan port untuk menjalankan express
    * APP listen digunakan untuk mendengarkan atau memerintahkan agar aplikasi express berjalan pada port yang sudah
    * ditentukan atau dibuat  
*/
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost/${PORT}`);
})