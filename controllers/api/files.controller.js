


const FilesSchema = require('../../database/schemas/files.schema');
const FilesModel = require('../../database/models/files.model');
const FoldersAndFileModel = require('../../database/models/folders_and_file.model');

/*
exports.findAll = function (req, res) {
    FilesModel
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
    
    FilesModel
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
*/

exports.findSeveral = function (req, res) {

    const several = req.body.several;
    console.log(several);
    FoldersAndFileModel
        .findAll({
            where: {id: several, type: 'jpg'}
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(e => {
            res.status(500).send(e.original.sqlMessage || e.original || e);
        });
};



exports.add = function (req, res) {

    const { error, value } = FilesSchema.validate(req.body);

    //console.log(error);
    if (error === undefined) {
        value.hash = 'randomvalue';
        FilesModel
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