const express = require('express');
const app = express();

app.get('/', (req, res) =>{
res.send("Hellow world");//get method // send response
}
)
app.listen(5000, () => {
    console.log("-connected in port 5000-");
});
