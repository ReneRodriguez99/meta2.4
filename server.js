const cors = require("cors");
const express = require("express");
const app = express();
const fs = require("fs");
const https = require("https");

process.env.port = 3000;

const llavePrivada = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");
const credenciales = {
    key: llavePrivada,
    cert: certificado,
    passphrase: "2002" //password de la llave privada usado en la creacion del certificado.
};
const httpsServer = https.createServer(credenciales,app);

const personaRouter = require("./routes/persona");
const proyectoRouter = require("./routes/proyecto");
const donadorRouter = require("./routes/donador");
//const passportRouter = require("./routes/passportRouter");
    
app.use(cors());
app.use(express.json());

app.use("/persona" ,personaRouter);
app.use("/proyecto" ,proyectoRouter);
app.use("/donador" ,donadorRouter);
//app.use(passportRouter);

//app.listen(3000, ()=>{
//    console.log("Server en puerto 3000");
//});

httpsServer.listen(process.env.port, () => {
    console.log('servidor https escuchando por el puerto: ',process.env.port);
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err);
});


