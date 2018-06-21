const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
//port for heroku or if it doesnt exsist - 3000
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (request, response)=>{
    response.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, ()=>{
    console.log("Express server is running");
});