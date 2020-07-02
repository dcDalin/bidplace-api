import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

// eslint-disable-next-line no-console
app.listen(5000, () => console.log(`App listening on port 5000`));
