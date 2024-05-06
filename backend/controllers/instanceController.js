const MongoInstance = require('../models/MongoInstance');

// Add a new MongoDB instance
const addInstance = async (req, res) => {
  const { name, connectionString } = req.body;

  try {
    const instance = new MongoInstance({ name, connectionString });
    await instance.save();

    res.status(201).json({ message: 'Instance added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding instance', error });
  }
};

// List all MongoDB instances
const listInstances = async (req, res) => {
  try {
    const instances = await MongoInstance.find({});
    res.status(200).json(instances);
  } catch (error) {
    res.status(500).json({ message: 'Error listing instances', error });
  }
};

module.exports = { addInstance, listInstances };
