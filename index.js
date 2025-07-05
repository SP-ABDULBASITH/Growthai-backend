const express = require('express');
const cors = require('cors');
const generateBusinessData = require('./utils/generateBusinessData');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

//start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }

  const businessData = generateBusinessData(name, location);
  res.json(businessData);
});

// Route: GET /regenerate-headlines?name={name}&location={location}
app.get('/regenerate-headlines', (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }

  const data = generateBusinessData(name, location);
  const headline = data.headline;
  res.json({headline});
});
