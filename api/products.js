const express = require('express')
const axios = require('axios');
const router = express.Router();



router.get('/', async (req, res) => {
  const resp = await axios.get('https://fakestoreapi.com/products/')
  console.log(resp)
  const { data } = resp
  const products = data.map(item => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image
    }
  })
  res.send(products)
})

// router.post('/', (req, res) => {
//   axios
//     .post(
//         'https://microsoft-translator-text.p.rapidapi.com/Detect',
//         [
//             {

//             },
//         ],
//         {
//             params: { 'api-version': '3.0' },
//             headers: {
//                 'content-type': 'application/json',
//                 'X-RapidAPI-Key': 'your-rapidapi-key',
//                 'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
//             },
//         }
//     )
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });
// } )


module.exports = router