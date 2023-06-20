var repairModel = require('../models/repair')

module.exports.list = () => {
    return repairModel.find()
      .then((values) => {
        return values;
      })
      .catch((error) => {
        return error;
      });
  };

  module.exports.getById = (id) => {
    return repairModel.find({ _id: id })
      .then((values) => {
        return values;
      })
      .catch((error) => {
        return error;
      });
  };

  module.exports.listByYear = (year) => {
    const regexPattern = new RegExp(`^${year}-`);
    return repairModel.find({ data: { $regex: regexPattern } })
      .then((values) => {
        return values;
      })
      .catch((error) => {
        return error;
      });
  };

  module.exports.listByMarca = (marca) => {
    return repairModel.find({ "viatura.marca": marca })
      .then((values) => {
        return values;
      })
      .catch((error) => {
        return error;
      });
  };
  
  module.exports.listMatriculas = () => {
    return repairModel.find()
      .distinct("viatura.matricula")
      .then((values) => {
        return values;
      })
      .catch((error) => {
        return error;
      });
  };

  

  module.exports.listInterv = async () => {
        try {
          const interventions = await repairModel.aggregate([
            { $unwind: "$intervencoes" },
            { $group: { _id: "$intervencoes.codigo", nome: { $first: "$intervencoes.nome" }, descricao: { $first: "$intervencoes.descricao" } } },
            { $sort: { _id: 1 } }
          ]);
          return interventions;
        } catch (error) {
          throw error;
        }
};

module.exports.delete = (id) => {
return repairModel.deleteOne({ _id: id })
    .then((doc) => {
    return doc;
    })
    .catch((err) => {
    return err;
    });
};

module.exports.add = (newEntry) => {
    return repairModel.create(newEntry)
      .then((doc) => {
        return doc;
      })
      .catch((err) => {
        return err;
      });
  };