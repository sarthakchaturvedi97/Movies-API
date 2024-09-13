const express = require("express");

const app = express();

//every request that comes to our server passes through this and converts into json object
app.use(express.json());
//start our server
const movies = [
    {
        id: 1,
        name: "Inception"
    },
    {
        id:2,
        name: "Batman"
    },
    {
        id:3,
        name: "Ironman"
    },
    {
        id:4,
        name: "Pokemon"
    }
];

app.listen(3000,()=>{
    console.log("Server is running");
})

//First parameter is the url
app.get("/",(request,response)=>{
    response.send("Hello World");
})

app.get("/api/movies",(request,response)=>{
    response.send(movies);
})

app.get("/api/movies/:id",(request,response)=>{
    const id = request.params.id;
    const movie = movies.find((m)=> m.id == id);
    response.send(movie);
})

app.post("/api/movie",(request,response)=>{
    const movie = request.body;
    movie.id = movies.length + 1;
    movies.push(movie);
    response.send(movie);
})