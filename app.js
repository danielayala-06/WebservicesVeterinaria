require('dotenv').config();

//Cargamos Express
const express = require('express');

const pool = require('./db');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;


const handDbError = (res, error)=>{
  console.log('Erro en la bd : ', error);
  res.status(500).json({error: 'Error interno en el servicio'});
};


//  GET

//Listar todo
app.get('/mascotas', async(req, res)=>{
  try{
    const[rows] = await pool.query('SELECT * FROM mascotas');
    res.status(200).json(rows);
  }catch(error){
    handDbError(res, error);
  }
});

//listar por id
app.get('/mascotas/:id', async(req, res)=>{
  const {id} = req.params;
  try{
    const[rows] = await pool.query('SELECT * FROM mascotas WHERE id=?', [id]);
    return res.status(200).json(rows);
  }catch(error){
    handDbError(res, error);
  }
});

//Crear un nuevo registro
app.post('/mascotas', async(req, res)=>{
  const {nombre, tipo, raza, color, peso, genero } = req.body;

  if(!nombre || !tipo || !raza || !color || !peso || !genero){
    return res.status(400).json({error:"Todos los campos son obligatoriosp "});
  }

  try{
    const [result] = await pool.query("INSERT INTO mascotas(nombre, tipo, raza, color, peso, genero) VALUES(?, ?, ?, ?, ?, ?)", [nombre, tipo, raza, color, peso, genero])
    const nuevoRegistro = {id:result.insertId};
    res.status(201).json(nuevoRegistro);
  }catch(error){
    handDbError(res, error);
  }
})

//put
app.put('/mascotas/:id', async (req, res) => {
  //ID (pk) viene como parte del ENDPOINT 
  const {id} = req.params;
  
  //campos vienen en JSON
  const {nombre, tipo, raza, color, peso, genero } = req.body;

  
 if(!nombre || !tipo || !raza || !color || !peso || !genero){
    return res.status(400).json({error:"Todos los campos son obligatorios "});
  }

  try{
    const [result] = await pool.query("UPDATE mascotas SET nombre = ?, tipo = ?, raza = ?, color = ?, peso = ?, genero = ? WHERE id=?" , [nombre, tipo, raza, color, peso, genero, id]);
    
    //Mp hubp camnios en la BD
    if(result.affectedRows === 0){
      return res.status(404).json({message: "mascota no Encontrado"});
    }

    //Si llegamos aqui se logro realizar el cambio.
    return res.status(200).json({message: "mascota actualizado correctamente"});

  }catch(error){
  
    handDbError(res, error);
  }
  

})

//delete
app.delete('/mascotas', async (req, res) => {
  try{
    res.status(200).json({verbo:'DELETE'});
  }catch(error){
    handDbError(res, error);
  }
})

//Endpoint
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
}); //Callback