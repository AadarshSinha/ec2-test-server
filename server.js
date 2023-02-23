const express = require('express');
const app = express();

app.use(express.json())

app.all('/*', async (req, res) => {
    try {
        console.log("req came")
        res.send({message: "Server is successfully updated now" })
    } catch (error) {
        console.log(error)
    }
})

const PORT = process.env.port || 80;

app.listen(PORT, ()=> {
    console.log("Server in successfully Running on port ", PORT);
})
