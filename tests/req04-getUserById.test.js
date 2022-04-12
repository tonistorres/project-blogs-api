const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('4 - Sua aplicação deve ter o endpoint GET `/user/:id`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate $');
    shell.exec('npx sequelize-cli db:seed:all $');
  });
// validado
  it('Será validado que é possível listar um usuário específico com sucesso', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'lewishamilton@gmail.com',
          password: '123456',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/user/1`)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.id).toBe(1);
        expect(result.displayName).toBe('Lewis Hamilton');
        expect(result.email).toBe('lewishamilton@gmail.com');
        expect(result.image).toBe('https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg');
      });
  });
// validado
  it('Será validado que não é possível listar um usuário inexistente', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'lewishamilton@gmail.com',
          password: '123456',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

    await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/user/9999`)
      .expect('status', 404)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('User does not exist');
      });
  });
// middleware já colocado na rota
  it('Será validado que não é possível listar um determinado usuário sem o token na requisição', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: '',
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/user/1`)
      .expect('status', 401)
      .then((responseSales) => {
        const { json } = responseSales;
        expect(json.message).toBe('Token not found');
      });
  });
// meddleware colocado na rota
  it('Será validado que não é possível listar um determinado usuário com o token inválido', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: 'mo3183bfbahaf',
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/user/1`)
      .expect('status', 401)
      .then((responseSales) => {
        const { json } = responseSales;
        expect(json.message).toBe('Expired or invalid token');
      });
  });
});
