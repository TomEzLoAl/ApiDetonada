const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const app = express();
const port = 43922;
// Allow all cross-origin requests
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
// Nuestra aplicación esta lista para recibir peticiones
app.get('/', (req, res) => {
        
        try{
            console.log(__dirname)
            res.sendFile(path.join(__dirname, 'index.html'));   
        } catch(e){
            res.status(500).send({'error': 'Internal server error'})
        }    
    }
);

// Creamos dos arreglos en donde almacenaremos los mails y los ...

const arreglo_usuarios = Array()
const arreglo_mails = Array()
 app.post('/', (req, res) => {

 // Guardamos el usuario y el email que venian en el Json del ...


 const {usuario, email} = req.body;

 // Guardamos el usuario en el arreglo de usuarios.
arrreglo_usuarios.push(usuario)
arreglo_mails.push(email)

// Imprimimos los arrays para ver si se estan agregando los ...

 console.log(usuarios)
 console.log(mails)

// Devolvemos un codigo de respuesta 201 indicando que el ...

res.status(201).send({usuario,email})
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});