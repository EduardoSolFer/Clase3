const taskController = {} ;

const TaskModel = require('../models/Task');


//Listar tareas
taskController.getTasks = async(req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.json(tasks)
    } catch (error) {
        console.log(error)
        res.json({
            succes: false
            ,message: 'Ha ocurrido un error'
        })
    } 
};

//Listar una tarea
taskController.getTask = async(req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id)
    res.json(task)
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: 'Ha ocurrido un error'
        })
    }
};

//Crear una tarea
taskController.createTask = async(req, res) => {
    const {title, description} = req.body;

    if (!title) {
        return res.json({
            succes: false
            ,message: 'El título esá vacío'
        });
    }if (!description) {   
        return res.json({
        succes: false
        ,message: 'La descripción no puede estar vacía'
        });
    }

    const newTask = new TaskModel({
        title
        ,description
    });

    try {
        await newTask.save();
        res.json({
            succes: true
            ,message: 'La tarea ha sido creada'
        });
    } catch (error) {
        res.json({
            succes: false
            ,message: 'Ha ocurrido un error'
        });
    }

    
};
//Actualizar una tarea
taskController.updateTask = async(req, res) => {
    try {
        await TaskModel.findByIdAndUpdate({_id: req.params.id}, req.body);
        res.json({
        success: true
        ,message: 'Se ha actualizado una tarea'
        });
    } catch (error) {
        res.json({
            success: false
            ,message: 'Ha ocurrido un error'
        })
    }
};

//Eliminar una tarea
taskController.deleteTask = async(req, res) => {
    try {
        await TaskModel.findByIdAndDelete(req.params.id);
        res.json({
            succes: true
            ,message: 'Se ha eliminado una tarea'
        })
    } catch (error) {
        res.json({
            succes: false
            ,message: 'Ha ocurrido un error'
        }); 
    }
};

module.exports = taskController;