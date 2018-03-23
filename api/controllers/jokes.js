const fetch = require('node-fetch');

const getAllJokes = async (req, res) => {
  if (req.decoded) {
    try {
      const responseData = await fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten');
      const jokes = await responseData.json();
      res.json({ jokes });
    } catch (err) {
      res.status(500).json({ error: 'Something broke.' });
    }
  } else {
    return res.status(422).json({ error: `Can't get these jokes!` });
  }
};

module.exports = { getAllJokes };
