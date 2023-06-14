
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

router.get('/:liga/:categoria/General/:id', async(req, res, next)=> {
  try{
    const { liga , categoria , id} = req.params
  
    const users = await User.findByPk(id);
  
    
      res.json(users);
  }catch(error){
  next(error)
  }
  
  });

  router.get('/:liga/:categoria/General/name/:name', async(req, res, next)=> {
    try{
      const { liga , categoria , name} = req.params
      console.log(name)
      const users = await User.findOne({ where: { name: name}});
    
      
        res.json(users);
    }catch(error){
    next(error)
    }
    
    });


router.post('/:liga/:categoria/General', 
  validatorHandler(createProductSchema,'body'),

async(req, res, next) => {

 const body = req.body;
console.log(body)
 const newProduct = await User.create(body);

/*
 const newProduct = await service.create(body)
 */
 res.status(201).json(newProduct)
  });



  router.patch('/:liga/:categoria/General/:id',
  
  
  async(req, res, next) =>{

   try{
    const {id} = req.params;
    const body = req.body;
    const users = await User.findByPk(id);
    const rta = users.update(body)
    res.json(rta)
   } catch(error){
    res.status(404).json({
      message:error.message
    })
   }
     });

     router.delete('/:liga/:categoria/General/:id', async(req, res, next) =>{

      const {id} = req.params;
      console.log(id)
      const users = await User.findByPk(id);
      await users.destroy()

      res.json(id)
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