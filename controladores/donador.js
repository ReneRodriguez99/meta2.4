const models = require('../models');

const getAll = async function (req,res){

    let d = await models.Donadores.findAll();
    await res.json(d);

}

const getById = async function(req,res){

    const donadores = await models.Donadores.findOne({
        where: {
            id: req.params.id,
        },

    });

    await res.json(donadores);


    //await res.json(await models.Donadores.findByPk(req.params.id))

}

const add = async function(req,res){

    const d = await models.Donadores.create(req.body);
    await res.json(d);

}

const update = async function(req,res){

    const donadorId = req.params.id;

    const [updated] = await models.Donadores.update(req.body, {
        where: { id: donadorId },
    });
    
    if (updated) {
        const updatedDonador = await models.Donadores.findByPk(donadorId);
        await res.json(updatedDonador);
    }else{
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
}

const deleteElement = async function(req,res){

    const donadorId = req.params.id;

    const deleted = await models.Donadores.destroy({
        where: { id: donadorId },
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