const express = require('express');
const app = express();
const port = process.env.PORT || 5117;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/validate', (req, res) => {
  const phone = req.body.phone;
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

  if (phoneRegex.test(phone)) {
    res.json({message: 'Phone number is valid.'});
  } else {
    res.json({message: 'Phone number is invalid. Please use the format ddd-ddd-dddd.'});
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});