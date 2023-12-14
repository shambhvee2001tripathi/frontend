const {Schema, model} = require('../connection');
const myschema = new Schema({
  title: String,
  category: String,
  type: String,
  material: String,
  price: String,
  image : String,
  details : String


});
module.exports = model( 'product',myschema );