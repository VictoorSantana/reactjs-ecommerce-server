


const FoldersSchema = require('../../database/schemas/folders.schema');
const FoldersModel = require('../../database/models/folders.model');
const FoldersAndFileModel = require('../../database/models/folders_and_file.model');

exports.findAll = function (req, res) {
    FoldersModel
        .findAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(e => {
            res.status(500).send(e.original.sqlMessage || e.original || e );
        });
};


exports.findByParent = function (req, res) {

    const id_folder = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
    
    FoldersAndFileModel
        .findAll({
            where: { id_folder }
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(e => {
            res.status(500).send(e.original.sqlMessage || e.original || e );
        });
};



exports.add = function (req, res) {

    const { error, value } = FoldersSchema.validate(req.body);

    //console.log(error);
    if (error === undefined) {
        FoldersModel
            .create(value)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(e => {
                res.status(500).send(e);
            });
    } else {
        res.status(500).send(error);
    }

};