import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.name} added to the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (name) user.name = name;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;
  res.send(`user with ${id} has been updated`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User with ${id} successfully deleted `);
};

export const retrieveUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const retrieveUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};
