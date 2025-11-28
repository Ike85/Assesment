export async function GET(req, res) {

  console.log("in the api page")

  const { searchParams } = new URL(req.url)

  const firstName = searchParams.get('firstName')
  const lastName = searchParams.get('lastName')
  const email = searchParams.get('email')
  const address = searchParams.get('address')
  const pass = searchParams.get('pass')
  const confirmPassword = searchParams.get('confirmPassword')

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(address);
  console.log(pass);
  console.log(confirmPassword);



 // =================================================

  const { MongoClient } = require('mongodb');


  const url = 'mongodb+srv://b00165817:<db_password>@cluster0.okkytfu.mongodb.net/?appName=Cluster0';

  const client = new MongoClient(url);




  const dbName = 'app';


  await client.connect();

  console.log('Connected successfully to server');

  const db = client.db(dbName);

  const collection = db.collection('Users');



  const allUsers = await collection.find({}).toArray();

  console.log("All Users:", allUsers);

  const findResult = await collection.find({firstName: firstName, lastName: lastName, email:email, address: address, pass: pass, confirmPassword: confirmPassword}).toArray();

  console.log('Found documents =>', findResult);


  let valid = findResult.length > 0;


 //==========================================================


  // Make sure to stringify and set JSON headers
  return new Response(JSON.stringify({ Users: allUsers, login: valid }));
  
}