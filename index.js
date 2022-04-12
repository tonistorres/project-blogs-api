const express = require('express');

const routeUser = require('./routes/route.user');
const routeLogin = require('./routes/route.login');
const routeCategory = require('./routes/route.category');

const app = express();
app.use(express.json());
app.use('/user', routeUser);
app.use('/login', routeLogin);
app.use('/categories', routeCategory);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
