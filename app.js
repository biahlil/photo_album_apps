const express = require('express');
const app = express();
const router = require('./routers');
const PORT = 80;

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.use(router);

app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
})