/*const express = require('express');
var mysql = require('mysql');
const app = express();
 
//app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.use(express.static('public')); // Assuming HTML file is in the 'public' directory

app.get("/", (req, res) => {
  res.sendFile( __dirname + '/index.html');

});
 
 app.get("/index1.html", (req, res) => {
  res.sendFile( __dirname + '/index1.html');

});

app.post("/index.html", (req, res) => {
  const username = req.body.dname;
  console.log("Username: " + username);
  //res.send(username);
  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wifi"
});
  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var query = 'INSERT INTO commands (commands) VALUES (?)';
  con.query(query,[username],(error, result) => {
  if (error) {
    console.error('Error inserting item:', error);
    return;
  }
  console.log('Item inserted successfully!');
  con.end();  

});

});
});
app.get("/index1.html", (req, res) => {
  res.sendFile( __dirname + '/index1.html');

});

app.listen(8080);*/
process.env.PWD = process.cwd()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {spawn} = require('child_process');
const file1 = require('./demo1');
let l;
let parsedList;
let jsonList;
let v;
// Serve static files from the "public" directory
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(process.env.PWD + '/public'));

// Route for the first HTML page
app.get('/public/index.ejs', (req, res) => {

  res.render(__dirname + '/public/index.ejs');
});
app.post('/l',(req,res) =>{
  const dname = req.body.name;
  v=dname;
  res.redirect('/public/1.ejs');
  });
// Route for the second HTML page
app.get('/public/1.ejs', async(req, res) => {
 // Copies the whole string starting from the 1st character

const pythonProcess = spawn('python3', ['script.py',v]);	
  pythonProcess.stdout.on('data', (data) => {
  const jsonLis = data.toString();
  jsonList=data.toString();
  // Parse the JSON list
   parsedList = JSON.parse(jsonLis);
  // Use the list in your Node.js application
  
  console.log(parsedList);
      
});
  //console.log(name);
  res.render(__dirname + '/public/1.ejs',{ parsedList,name:v });
  
  
  //res.send(`Name: ${name}<br>hai`);
  
});

  
file1.someFunction();
// Start the server
app.listen(80, () => {
  console.log('Server is running on http://localhost:3000');
});
