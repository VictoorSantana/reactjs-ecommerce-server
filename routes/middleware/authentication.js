const jwt = require('jsonwebtoken');
const AccessModel = require('../../database/models/access.model');

module.exports = {

    verify: (endpoint = '-1') => {
        return (req, res, next) => {
            const bearerHeader = req.headers['authorization'];

            if (typeof bearerHeader !== 'undefined') {

                const bearer = bearerHeader.split(' ');
                const bearerToken = bearer[1];

                jwt.verify(bearerToken, process.env.SERVER_KEY, (err, decoded) => {
                    if (err) {
                        if (endpoint === 'public') {
                            return next();
                        }

                        res.status(401).send('Você precisa está autenticado para receber essa resposta.');
                    } else {

                        if (endpoint === 'public') {
                            req.decoded = decoded._id;
                            return next();
                        } else {
                            return AccessModel
                                .findAll({
                                    where: {
                                        id_user: decoded._id,
                                        endpoint
                                    }
                                })
                                .then(result => {
                                    if (result.length > 0) {
                                        req.decoded = decoded._id;
                                        next();
                                    } else {
                                        return res.status(403).send('Pedido de [' + endpoint + '] não está disponivel para o usuário!');
                                    }
                                })
                                .catch(e => {
                                    console.log('AUTH', e);
                                    return res.status(500).send({});
                                });
                        }

                    }
                });
            } else {
                if (endpoint === 'public') {
                    return next();
                } else {
                    return res.status(401).send('Pedido não permitido! ' + endpoint);
                }
            }

        }

    }
}