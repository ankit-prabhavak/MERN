const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const routes = require('./Routes/routes');
app.use('/cyberganj', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
