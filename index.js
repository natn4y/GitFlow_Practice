const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = 3030
app.listen(PORT, () => {
    console.log(`Server Address: http://localhost:${PORT}`);
})