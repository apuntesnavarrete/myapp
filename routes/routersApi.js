
var express = require('express');
var router = express.Router();
const partielsService = require('../service/routersService')
const validatorHandler = require('../mid/validator.handler')
const { createProductSchema } = require('../schemas/product.schema')
const { User  } = require('../db/models/modelClass')

const service = new partielsService()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pagina principal (descripcion)' });
});

router.get('/:liga/:categoria/General', async(req, res, next)=> {
try{
  const { liga , categoria} = req.params

  const users = await User.findAll();

  
    res.json(users);
}catch(error){
next(error)
}

});

router.post('/:liga/:categoria/General', 
  validatorHandler(createProductSchema,'body'),

async(req, res, next) => {

 const body = req.body;
 const newProduct = await service.create(body)
 res.status(201).json(newProduct)
  });



  router.patch('/:liga/:categoria/General/:id',
  
  
  async(req, res, next) =>{

   try{
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id,body)
    res.json(product)
   } catch(error){
    res.status(404).json({
      message:error.message
    })
   }
     });

     router.delete('/:liga/:categoria/General/:id', function(req, res, next) {

      const {id} = req.params;
      console.log(id)
      const rta = service.delete(id)
      res.json(rta)
       });

/*
router.post('/:liga/:categoria/General', function(req, res, next) {

  const { liga , categoria , equipoa} = req.params
  const body = req.body ;
  console.log(body)
    res.json({
      liga,
      categoria,
      body
  
    });
  });
*/
module.exports = router;


//rutas delete put pach
//manejo de estados

//probarlos con el array products