const express =require('express');
const{
    getToDo,
    createToDo,
}=require('../controllers/controller')

const router = express.Router();

router.get('/List', getToDo);
router.post('/Add', createToDo);
module.exports=router;