const jwt = require('jsonwebtoken');


const generarToken = async function(name){

    // La información que deseas incluir en el token
    const payload = {
        nombre: name,
        // Puedes incluir otros campos aquí según sea necesario
    };
    
    // Clave secreta para firmar el token
    const secretKey = 'secret';
    
    // Configuración del token (puedes incluir opciones adicionales según sea necesario)
    const options = {
        expiresIn: '1h', // Tiempo de expiración del token
    };
    
    // Generar el token
    const token = jwt.sign(payload, secretKey, options);
    
    // Imprimir el token generado
    console.log(token);

    return token;
}

exports.generarToken = generarToken;
