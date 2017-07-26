const express = require("express")
const BodyParser = require("body-parser")
const massive = require("massive")
const cors = require ("cors")
const session = ("express-session")
// const config = require("../config")

const app = module.exports = express();

app.use(BodyParser.json());
app.use(cors());

app.use(express.static(__dirname + "./../dist")); // connects front end files


// const massiveInstance = massive.connectSync({  // connects to database
//   connectionString: config.connectionString
// })
//
// app.set("db", massiveInstance)  // referencing our massiveInstance and setting to const db to call on database.
// const db = app.get("db")

// creates the tables in pg admin "some kind of voodoo magic here"
// db.schema(function(err, res){
//   if(err){
//     console.log(err);
//   } else {
//     console.log('tables created');
//   }
// })


const PORT = 3000;
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
})
