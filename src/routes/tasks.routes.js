const {Router} = require ('express')
const router = Router();

const {getTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/controllers');

//rest api task
router.get('/', getTasks);

router.get('/:id', getTask);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);


module.exports = router;