const express = require('express');

const app = express();
const PORT = 4001
app.use(express.json());

const { productRouter } = require('./api')

app.use('/products', productRouter)

// app.get('/', (req, res) => {
//   res.send({
//     message: `it's works`
//   })
// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})