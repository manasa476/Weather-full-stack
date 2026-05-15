const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.static("public"));

const PORT = 5000;

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;

    const response = await axios.get(weatherURL);

    res.json(response.data);
  } catch (error) {
    res.status(404).json({
      message: "City not found",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
