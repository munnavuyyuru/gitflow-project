// User management module
const users = [];

function createUser(name, email) {
  const user = {
    id: users.length + 1,
    name,
    email,
    createdAt: new Date()
  };
  users.push(user);
  return user;
}

function getUsers() {
  return users;
}

module.exports = { createUser, getUsers };
