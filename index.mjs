//Imports
import express from "express";
import dotenv from "dotenv";

//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.set("view engine", "ejs");
app.use(express.static("public"));

//Middlewares
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(express.json());
app.use((req, res, next) => {
  req.timestamp = Date.now();
  next();
});

async function getVegFromDB() {
  return ["Carrot", "Broccoli", "Spinach"];
}

//Routes
app.get("/veg-list", async (req, res) => {
  const vegetables = await getVegFromDB();
  res.render("veg-list", { vegetables });
});

//Err Middlewares
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server Error");
});

//Listener
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
