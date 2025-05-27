const express = require('express');
const app = express();
const flipcardApp = require('./apps/flipcards');
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use('/flipcard', flipcardApp);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Main server running on port ${PORT}`);
});
