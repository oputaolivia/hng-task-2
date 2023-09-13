const User = require("../models/userModel");

// Create or Add User
const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        data: {},
        message: `Person already Exists`,
        status: 1,
      });
    } else {
      let user = new User({
        name,
        email,
        age,
      });

      const createdPerson = await user.save();
      res.status(201).send({
        data: createdPerson,
        message: `${name} created`,
        status: 0,
      });
    }
  } catch (error) {
    res.status(500).send({
      data: {},
      message: `Error: ${error.message}`,
      status: 1,
    });
  }
};

// Retrieve a User
const retrieveUser = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await User.findById(id);

    if (existingUser) {
      res.status(200).send({
        data: existingUser,
        message: `Details found`,
        status: 0,
      });
    }
  } catch (error) {
    res.status(500).send({
      data: {},
      message: `Error: ${error.message}`,
      status: 1,
    });
  }
};

// Retrieve all Users
const getUsers = async (req, res) =>{
  try {
    const persons = await User.find({})

    res.status(200).send({
      data: persons,
      message: `All persons fetched`,
      status: 0,
    })
  } catch (error) {
    res.status(500).send({
      data: {},
      message: `Error: ${error.message}`,
      status: 1,
    });
  }
}

// Update User
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await User.findById(id);

  if (existingUser){
      const updatedperson = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(201).send({
        data: updatedperson,
        message: `${id} has been updated`,
        status: 0,
      });
  }else{
    res.status(400).send({
      data: {},
      message: `${id} does not exist`,
      status: 1,
    });
  }
    
  } catch (error) {
    res.status(500).send({
      data: {},
      message: `Error: ${error.message}`,
      status: 1,
    });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
  const existingUser = await User.findById(id);

  if (existingUser) {
    const deletedPerson = await User.findByIdAndDelete(id);
    res.status(200).send({
      message: `${id} deleted`,
      status: 0,
    });
  } else {
    res.status(400).send({
      message: `${id} does not exist`,
      status: 1,
    });
  }
  } catch (error) {
    res.status(500).send({
      data: {},
      message: `Error: ${error.message}`,
      status: 1,
    });
  }
};

module.exports = {
  createUser,
  updateUser,
  retrieveUser,
  deleteUser,
  getUsers,
};
