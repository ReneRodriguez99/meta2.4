const models = require('./models');
const generadorToken = require("./generadorToken");

//const correo = 'juan1996@gmail.com';

const verificarUsuarioEnBaseDeDatos = async function(email){

    const personas = await models.Persona.findAll();

    personas.forEach(persona => {
        console.log(persona);
        if(persona.email == email){
            generadorToken.generarToken(persona.nombre);
            console.log("Esta persona puede usar los servicios del backend");
        }
    });

}

//verificarUsuarioEnBaseDeDatos(correo);
exports.verificarUsuarioEnBaseDeDatos = verificarUsuarioEnBaseDeDatos;


