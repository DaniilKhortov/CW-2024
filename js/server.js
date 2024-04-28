const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');


const app = express();

app.use(express.static('D:\\Mysor2\\Web-prog\\Kursova\\github\\CW-2024'));//C:\\Users\\Horto\\Documents\\GitHub\\CW-2024
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://troianvitalii:kilativ777@snakedb.yh9ecr0.mongodb.net/snakeDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database Connected'))
.catch(err => console.log(err));

const playerSchema = new mongoose.Schema({
  email: String,
  nickname: String,
  password: String,
  record: Number,
  imagePath: String,
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('Player', playerSchema);

const gameHistorySchema = new mongoose.Schema({
  nickname: String,
  date: Date,
  score: Number
});

const GameHistory = mongoose.model('GameHistory', gameHistorySchema);

const responseSchema = new mongoose.Schema({
  email: String,
  text: String
});

const Response = mongoose.model('Response', responseSchema);

app.post('/register', async (req, res) => {
  const { email, nickname } = req.body;
  try {
    const existingUserWithEmail = await User.findOne({ email: email });

    if (existingUserWithEmail) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }
    const existingUserWithNickname = await User.findOne({ nickname: nickname });

    if (existingUserWithNickname) {
      return res.status(400).json({ error: 'User with this nickname already exists' });
    }

    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    //const token = jwt.sign({ id: savedUser._id }, 'yourSecretKey', { expiresIn: '1h' });

    res.json({ message: 'User registered!', user: savedUser.toObject()});//, token 
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ error: 'User with this email does not exist' });
    }
    if (user.password !== password) {
      return res.status(400).json({ error: 'Incorrect password' });
    }
    //const token = jwt.sign({ id: user._id }, 'yourSecretKey', { expiresIn: '1h' });
    res.json({ message: 'User logged in!', user: user.toObject() }); //, token
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

app.get('/leaderBoard', async (req, res) => {
  try {
    const users = await User.find().sort({ record: -1 }).limit(5);
    res.json(users);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

app.post('/gameHistory', async (req, res) => {
  const { nickname, date, score } = req.body;
  try {
    const gameHistory = new GameHistory({ nickname, date, score });
    await gameHistory.save();
    res.json({ message: 'Game history saved!' });
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

app.get('/userGames/:nickname', async (req, res) => {
  const { nickname } = req.params;
  try {
    const games = await GameHistory.find({ nickname: nickname }).sort({ date: -1 });
    res.json(games);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

app.get('/getUserRecord/:nickname', async (req, res) => {
  const { nickname } = req.params;
  try {
    const user = await User.findOne({ nickname: nickname });

    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    res.json({ record: user.record });
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

app.post('/updateUserRecord/:nickname', async (req, res) => {
  const { nickname } = req.params;
  const { record } = req.body;
  try {
    const user = await User.findOne({ nickname: nickname });

    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    user.record = record;
    await user.save();

    res.json({ message: 'Record updated!' });
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/addResponse', (req, res) => {
  const { email, text } = req.body; 

  const newResponse = new Response({ email, text });

  newResponse.save()
    .then(() => {
      res.status(201).send('Response added successfully');
    })
    .catch(error => {
      console.error('Error adding response:', error);
      res.status(500).send('Error adding response');
    });
});

/*const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

app.use(cors());

// Підключення до MongoDB
const uri = "mongodb+srv://troianvitalii:kilativ777@snakedb.yh9ecr0.mongodb.net/?retryWrites=true&w=majority&appName=snakeDB";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.post('/register', (req, res) => {
  client.connect(err => {
    const collection = client.db("snakeDB").collection("players");
    
    // Вставка користувача в базу даних
    collection.insertOne(req.body, (err, result) => {
      if (err) {
        res.status(500).send('Error inserting user');
      } else {
        res.status(200).send('User registered');
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/


/*const express = require('express');
const {connecctToDb, getDb} = require('./db')
const PORT = 3000;

const app = express();

connecctToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});*/


/*const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors()); 
const port = 3000;

// Підключення до MongoDB
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.post('/register', (req, res) => {
  client.connect(err => {
    const collection = client.db("snakeDB").collection("players");
    
    // Вставка користувача в базу даних
    collection.insertOne(req.body, (err, result) => {
      if (err) {
        res.status(500).send('Error inserting user');
      } else {
        res.status(200).send('User registered');
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/