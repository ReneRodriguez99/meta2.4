const models = require('../models');

const getAll = async function (req,res){

    let p = await models.Persona.findAll();
    await res.json(p);

}

const getById = async function(req,res){

    await res.json(await models.Persona.findByPk(req.params.id))
}

const add = async function(req,res){

    const p = await models.Persona.create(req.body);
    await res.json(p);

}

const update = async function(req,res){

    const personaId = req.params.id;
    
    const [updated] = await models.Persona.update(req.body, {
        where: { id: personaId },
    });

    if (updated) {
        const updatedPersona = await models.Persona.findByPk(personaId);
        await res.json(updatedPersona);
    }else{
        res.status(404).json({ error: 'Usuario no encontrado' });
    }

    
}

const deleteElement = async function(req,res){

    const personaId = req.params.id;

    const deleted = await models.Persona.destroy({
        where: { id: personaId },
    });

    if (deleted) {
        res.json({ message: 'Usuario eliminado correctamente' });
    } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
    

}


exports.getAll = getAll;
exports.getById = getById;
exports.add = add;
exports.update = update;
exports.deleteElement = deleteElement;