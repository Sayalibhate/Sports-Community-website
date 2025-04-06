import express  from "express";
import mongoose  from "mongoose";
import bodyParser  from "body-parser";
import cors  from "cors";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/sportsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a schema
const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  age: { type: Number, required: true },
  sport: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
});

// Create a model
const FormData = mongoose.model("FormData", formSchema);

// POST route to handle form submission
app.post("/api/apply", async (req, res) => {
  const { name, email, number, age, sport, weight, height } = req.body;

  try {
    const newFormData = new FormData({
      name,
      email,
      number,
      age,
      sport,
      weight,
      height,
    });

    await newFormData.save();
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving form data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});