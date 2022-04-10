const { User } = require('../models');

const usuario = { displayName: 'toniss', email: 'sisvendaf2011@gmail.com', password: '123f4678', image: 'dafasdfasdfasdfasdfas' };

// const create = async (usuario) => {
//     try {
//         // desestruturando 
// const { displayName, email, password, image } = usuario;

//         await User.create(usuario);

//     } catch (error) {
//      console.log(error);
//     }
// };

async function main() {
await User.create(usuario);
}

main();

module.exports = { 
    // createServiceUser,
};