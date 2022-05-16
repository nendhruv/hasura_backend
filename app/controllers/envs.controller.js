const db = require("../models");
const Envs = db.envs;
exports.add = (req, res) => {
    // Validate request
    if (!req.body.variables) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    const envs = new Envs({
      modifiedBy: req.body.user,
      variables: req.body.variables,
      id: req.body.id
    });
  
    // Save new Envs in the database
    envs
      .save(envs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating new Variables"
        });
      });
  };


// Update Envs 
exports.update = (req, res) => {
  const user = req.body.user
  const variables = req.body.variables
  const id = req.body.id
  Envs.update({ id: id }, {variables: variables, modifiedBy: user})
    .then(data => {
      res.status(200).send({message: 'Variables updated successfully'})
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating variables."
      });
    });
};

exports.fetch = (req, res) => {
  const id = req.params.id
  Envs.find({ id: id })
    .then(data => {
      res.status(200).send({message: data})
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating variables."
      });
    });
};
