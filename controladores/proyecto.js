const models = require('../models');

const getAll = async function (req,res){

    let p = await models.Proyecto.findAll();
    await res.json(p);

}

const getById = async function(req,res){

    await res.json(await models.Proyecto.findByPk(req.params.id))
}

const add = async function(req,res){

    const p = await models.Proyecto.create(req.body);
    await res.json(p);

}

const update = async function(req,res){

    const proyectoId = req.params.id;
    
    const [updated] = await models.Proyecto.update(req.body, {
        where: { id: proyectoId },
    });

    if (updated) {
        const updatedProyecto = await models.Proyecto.findByPk(proyectoId);
        await res.json(updatedProyecto);
    }else{
        res.status(404).json({ error: 'Usuario no encontrado' });
    }

}

const deleteElement = async function(req,res){

    const proyectoId = req.params.id;

    const deleted = await models.Proyecto.destroy({
        where: { id: proyectoId },
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