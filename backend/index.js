const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
var cors = require('cors');

//const DB_URL = "mongodb://127.0.0.1:27017";
const DB_URL = "mongodb+srv://admin:eZfL3a7tYcfSWw1H@cluster0.ymkksrq.mongodb.net/";
const DB_NAME ="ocean-bd";

//conexao com o banco de dados usando mongobd

async function main(){
  console.log("Conectando com o bd");
  const client = await MongoClient.connect(DB_URL);
  const db = client.db(DB_NAME);
  const collection = db.collection("itens");
  console.log("conectado com sucesso!");

  const app = express();

  //o que vier no body da req ta em json 
  app.use(express.json());

  app.use(cors());

  // Endpoint / -> Hello World
  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  // Endpoint /oi -> Olá, Mundo!
  app.get("/oi", function (req, res) {
    res.send("Olá, Mundo!");
  });

  //lista de informações 
  const itens = ["Rick Sanchez", "Morty Smith", "Summer Smith"];

  //new endpoint - Read All [GET] /item
  app.get("/item", async function(req, res) {
    const documentos = await collection.find().toArray();
    res.send(documentos);
  });

  //new endpoint - Read All [GET] /item
  app.get("/item/:id", async function(req, res) {
    const id = req.params.id;
    const item = await collection.findOne({_id: new ObjectId(id)});

    res.send(item);
  });


  // endpoint create -> [POST] /item
  app.post('/item', async function (req, res) {
    //console.log(req.body['nome']);
    const item = req.body;
    await collection.insertOne(item);
    res.send(item);
  });

  // Endpoint UPDATE -> [PUT] /item/:id
  // put altera tudo, patch altera uma parte
  app.put('/item/:id', async function (req, res){
    const id = req.params.id;
    const body = req.body;
    await collection.updateOne(
      {_id: new ObjectId(id)}, // meu filtro da tabela
      { $set: body} //tudo que começa com $ é uma operação
    );
    res.send(body);
  }); 

  //Endpoint DELETE -> [DELETE] /item/:id
  app.delete('/item/:id', async function(req, res){
    const id = req.params.id;
    await collection.deleteOne(
      {_id: new ObjectId(id)}
    )
    res.send('deletado com sucesso ' + id);
  });

  const port = process.env.PORT || 3000;
  app.listen(port, function(){
    console.log('Sevidor rodando na porta: ' + port);
  }); //so funciona local, tem que colocar a porta do servidor da hospedagem
}

main();