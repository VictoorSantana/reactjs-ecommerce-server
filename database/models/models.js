const UserModel = require('./user.model'); 
const AccessModel = require('./access.model'); 
const FolderModel = require('./folder.model'); 
const FileModel = require('./file.model'); 
const ProductfileModel = require('./productfile.model'); 
const ProductModel = require('./product.model'); 

UserModel.belongsTo(FileModel, { as: 'File', foreignKey: 'id_file' });
AccessModel.belongsTo(UserModel, { as: 'User', foreignKey: 'id_user' });
FolderModel.hasMany(FolderModel, { as: 'Folder', foreignKey: 'id_folder' });
FileModel.belongsTo(FolderModel, { as: 'Folder', foreignKey: 'id_folder' });
ProductfileModel.belongsTo(ProductModel, { as: 'Product', foreignKey: 'id_product' });
ProductfileModel.belongsTo(FileModel, { as: 'File', foreignKey: 'id_file' });
ProductModel.belongsTo(FileModel, { as: 'File', foreignKey: 'id' });

module.exports = { UserModel, AccessModel, FolderModel, FileModel, ProductfileModel, ProductModel,  }; 