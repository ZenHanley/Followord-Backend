import pg from "pg";
import express from "express";

const app = express();
const { Pool } = pg;

// "Hello World" status statement
app.get('/', (req, res) => {
  res.send("Enviroment is operational");
});

// Personal Data Pool used to log into PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Gragknock18830",
  port: 5432,
  idleTimeoutMillis: 300
});

//Parse any incoming JSON bodies
app.use(express.json());

// Allows backend to be accessed from all origins
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Answer with 200 and these Headers
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
    
    // Continue handling the route that was selected  
    next();
});

// Backend grabbing "usertime" data sheet from PostGreSQL
app.get("/api/usertime", async (req, res) => {
  const resultFromDb = await pool.query("SELECT * FROM usertime;")

  console.log("the response from the database is");
  console.log(resultFromDb.rows);

  const arrayOfusertime = resultFromDb.rows;

  res.json(arrayOfusertime);
});

// Backend grabbing "userdetails" data sheet from PostGreSQL
app.get("/api/userdetails", async (req, res) => {
  const resultFromDb = await pool.query("SELECT * FROM userdetails;")

  console.log("the response from the database is");
  console.log(resultFromDb.rows);

  const arrayOfuserdetails = resultFromDb.rows;

  res.json(arrayOfuserdetails);
});

// Send data to frontend & usertime data sheet
app.post("/api/usertime", async (req,res) => {
  console.log("Hit /api/usertime endpoint with a POST request");
  console.log("The body is");
  console.log(req.body)

  const data = req.body;
  
  const insertQuery = `INSERT INTO usertime (language_start_date, language_start_time, language_end_time, learning_option, language_option) 
    VALUES ('${data.language_start_date}', '${data.language_start_time}', '${data.language_end_time}', '${data.learning_option}', '${data.language_option}')`;

  console.log("About to run the query " + insertQuery);
  
  const resultFromDB = await pool.query(insertQuery);
  
  console.log("The response from the database is ");
  console.log(resultFromDB.rows);

  res.send("POST request received");
});

// Send data to frontend & userdetails data sheet
app.post("/api/usertime", async (req,res) => {
  console.log("Hit /api/userdetails endpoint with a POST request");
  console.log("The body is");
  console.log(req.body)

  const data = req.body;
  
  const insertQuery = `INSERT INTO userdetails (first_name, last_name, email, phone, credit_card) 
    VALUES ('${data.first_name}', '${data.last_name}', '${data.email}', '${data.phone}', '${data.credit_card}')`;

  console.log("About to run the query " + insertQuery);

  const resultFromDB = await pool.query(insertQuery);
  
  console.log("The response from the database is ");
  console.log(resultFromDB.rows);

  res.send("POST request received");
});

// Command to run Backend Server
app.listen(3000, () => {
  console.log('The program is waiting for messages.Server running at http://localhost:3000');
});