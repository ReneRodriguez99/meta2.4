const models = require('./models');


async function demoAsociacionMuchosAMuchos() {
    
    const personaJuan = await models.Persona.findOne({
    where: {
    nombre: 'Juan'
    }
    });

    const proyecto = await models.Proyecto.findOne({ where: { nombre: "Reciclaje de Plastico" } });
    const proyecto1 = await models.Proyecto.findOne({ where: { nombre: "Centro de acopio de alimentos" } });

    console.log(
    "Datos de la persona: ",
    personaJuan.id,
    personaJuan.nombre,
    personaJuan.rfc);

    console.log(
      "Datos del proyecto: ",
      proyecto.id,
      proyecto.idProyecto,
      proyecto.nombre,
      proyecto.descripcion);
    
    console.log(
        "Datos del proyecto: ",
        proyecto1.id,
        proyecto1.idProyecto,
        proyecto1.nombre,
        proyecto1.descripcion);
    
    //Creando relaciones y añadiendo registros en la tabla 'donadores'.
    await personaJuan.addDonadores(proyecto, {through: { cantidadDonada: 95 }});
    await personaJuan.addDonadores(proyecto1, {through: { cantidadDonada: 50 }});

    const proyectosDonados = await personaJuan.getDonadores();
    console.log("Proyectos donde ha hecho donacion la persona ",personaJuan.nombre);
    proyectosDonados.forEach( proyecto => {
    console.log(proyecto.idProyecto,proyecto.nombre,proyecto.descripcion,proyecto.DonatarioId);
    });

    let proyectoReciclaje = await models.Proyecto.findOne({where:{nombre:"Reciclaje de Plastico"}});
    let personas = await proyectoReciclaje.getDonadores();
    console.log("Donadores del proyecto reciclaje de plastico:")
    personas.forEach( e => {console.log(e.nombre,e.rfc)})

    models.sequelize.close();
    
}

demoAsociacionMuchosAMuchos();