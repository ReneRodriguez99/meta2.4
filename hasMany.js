const models = require('./models');


//Archivo de prueba asociación hasMany (1:N); Una persona puede ser donatario de varios proyectos.
async function hasMany() {

    const personaJuan = await models.Persona.findOne({
        where: {
        nombre: 'Juan'
        }
    });

    const personaPedro = await models.Persona.findOne({
        where: {
        nombre: 'Pedro'
        }
    });

    const proyecto1 = await models.Proyecto.create({
        idProyecto: 100,
        nombre: 'Reciclaje de Plastico',
        descripcion: 'Maneras de reciclar y reutilizar el plastico.',
        DonatarioId: personaPedro.id
    });

    const proyecto2 = await models.Proyecto.create({
        idProyecto: 101,
        nombre: 'Albergue para perros',
        descripcion: 'Refugio para perritos de la calle y buscarles un hogar.',
        DonatarioId: personaJuan.id
    });

    const proyecto3 = await models.Proyecto.create({
        idProyecto: 102,
        nombre: 'Centro de acopio de alimentos',
        descripcion: 'Donar comida a los que menos tienen.',
        DonatarioId: personaPedro.id
    });

    //Relaciona una persona con varios proyectos y a la vez creando registros en la tabla 'proyectos'.
    await personaPedro.addProyecto(proyecto1);
    await personaPedro.addProyecto(proyecto3);
    await personaJuan.addProyecto(proyecto2);

    
};


async function mostrarDonatariosProyectos(){

    const personaJuan = await models.Persona.findOne({
        where: {
        nombre: 'Juan'
        }
    });

    const personaPedro = await models.Persona.findOne({
        where: {
        nombre: 'Pedro'
        }
    });

    //Informacion de personas.
    console.log(
        "Datos de la persona: ",
        personaJuan.id,
        personaJuan.nombre,
        personaJuan.rfc);

    console.log(
        "Datos de la persona: ",
        personaPedro.id,
        personaPedro.nombre,
        personaPedro.rfc);


    //Muestra los proyectos asociados a x persona (donatario).
    const proyectosJuan = await personaJuan.getProyecto();

    console.log(`Proyectos asociados a ${personaJuan.nombre}:`);
    proyectosJuan.forEach((proyecto) => {
        console.log(`- ${proyecto.nombre}: ${proyecto.descripcion}`);
    });

    const proyectosPedro = await personaPedro.getProyecto();

    console.log(`Proyectos asociados a ${personaPedro.nombre}:`);
    proyectosPedro.forEach((proyecto) => {
        console.log(`- ${proyecto.nombre}: ${proyecto.descripcion}`);
    });

    
   //Belongs To/ Has One. Mostrar el donatario de un proyecto asociado a x persona.
    if (proyectosJuan.length > 0) {
    const proyecto = proyectosJuan[0];
    const Donatario = await proyecto.getDonatario(); 
    console.log('Nombre del proyecto:' ,proyecto.nombre);
    console.log(`Donatario: ${Donatario.nombre}`);
    }

    console.log(`Proyectos con donatario ${personaPedro.nombre}:`); //Pedro
    for (const proyecto of proyectosPedro) {
        console.log(`- ${proyecto.nombre}: ${proyecto.descripcion}`);

        const donatario = await proyecto.getDonatario(); // Obtener el donatario del proyecto
        console.log(` Donatario: ${donatario.nombre}`);
    }
    
}

hasMany();
mostrarDonatariosProyectos();