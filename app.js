// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 5005;
const path = require('path');

const homePage = path.join(__dirname, 'views', 'home.html');
const blogPage = path.join(__dirname, 'views', 'blog.html');
const notFoundPage = path.join(__dirname, 'views', 'not-found.html');
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');


// CREATE EXPRESS APP
// Here you should create your Express app:
app.get('/', (req, res)=>{
    res.sendFile(homePage);
});

app.get('/blog', (req, res)=>{
    res.sendFile(blogPage);
});

app.get('/api/projects', (req, res)=>{
    res.json(projects);//res.json(projects) envía una respuesta al cliente en formato JSON
});

app.get('/api/articles', (req, res)=>{
    res.json(articles );//res.json(projects) envía una respuesta al cliente en formato JSON
});

app.listen(port,()=>{
    console.log('Server is running at http:localhost:3000');
});

app.use((req, res)=>{//Para el resto de direcciones
    res.sendFile(notFoundPage);
});



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static('public'))

// Middleware para analizar el cuerpo de las solicitudes entrantes con datos JSON.
// Convierte los datos JSON del cuerpo de la solicitud en un objeto JavaScript accesible a través de req.body.
app.use(express.json());

// Middleware para registrar detalles de las solicitudes HTTP entrantes en la consola.
// "dev" es un formato predefinido que muestra información básica como el método HTTP, la URL, el código de estado, el tiempo de respuesta y el user-agent.
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:
