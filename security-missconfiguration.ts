import * as express from 'express';

const app = express();

const hardcodedPassword = "ad*_do38FJEDOF)30>FDOHE3458"; // Simulated hardcoded password

app.get('/search', (req, res) => {
  const searchTerm = req.query.q; // Simulating user input

  // Vulnerable code: rendering user input directly in the response
  const result = `<p>You searched for: ${searchTerm}</p>`;
  
  res.send(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
