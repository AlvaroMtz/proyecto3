const mongoose = require('mongoose');
const  dbURL  = require('../config');
const User = require('../models/User');
const Publication = require('../models/Publication');

mongoose.connect(dbURL).then(() => console.log('db running'));

function getRandomUser() {
    Publication.find().exec((err, result) => {
        let publication = new Publication({
            title: "Quijote Ipsum",
            text: `En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.
            El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino.
            Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera.
            Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza.
            Quieren decir que tenía el sobrenombre de Quijada, o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben; aunque por conjeturas verosímiles se deja entender que se llamaba Quijana.
            Pero esto importa poco a nuestro cuento: asta que en la narración dél no se salga un punto de la verdad.`,
            userId : "5a9696fb0589a05d1ebec18",
        })
        publication.save((err) => {
            if (err) {
                throw err;
            }
            console.log(`event added by ${publication.userId}`)
            //cierra la conexion
            mongoose.connection.close();
        });
    });
};

getRandomUser();