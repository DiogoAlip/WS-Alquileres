export let maquinarias = [
  {
    id: "239124",
    nombre: "Aplanadora",
    disponible: true,
  },
  {
    id: "943627",
    nombre: "Excabadora",
    disponible: true,
  },
  {
    id: "834625",
    nombre: "Tractor",
    disponible: true,
  },
  {
    id: "027028",
    nombre: "Tractor",
    disponible: true,
  },
  {
    id: "927698",
    nombre: "Aplanadora",
    disponible: true,
  },
  {
    id: "937539",
    nombre: "Grua",
    disponible: true,
  },
  {
    id: "924826",
    nombre: "Excabadora",
    disponible: false,
  },
  {
    id: "986296",
    nombre: "Excabadora",
    disponible: true,
  },
  {
    id: "953142",
    nombre: "Aplanadora",
    disponible: true,
  },
  {
    id: "813228",
    nombre: "Grua",
    disponible: true,
  },
];

export let alquileres = [
  {
    DNI: "71435074",
    nombre: "Daniel Lorenzo",
    apellido: "Ponce Falcon",
    pago: 1200,
    fecha: "2023/12/18",
    maquinarias: [maquinarias[6]],
  },
];

/*

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://diogoalipazaga:orq b304@cluster0.domaoov.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

*/
