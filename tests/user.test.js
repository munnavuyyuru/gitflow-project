const { createUser, getUsers } = require('../src/user');

console.log('Running user tests...');

function testCreateUser() {
  const user = createUser('John Doe', 'john@example.com');
  if (user.name === 'John Doe' && user.email === 'john@example.com') {
    console.log('✓ Create user test passed');
    return true;
  }
  return false;
}

function testGetUsers() {
  const users = getUsers();
  if (Array.isArray(users)) {
    console.log('✓ Get users test passed');
    return true;
  }
  return false;
}

const results = [testCreateUser(), testGetUsers()];
if (results.every(r => r === true)) {
  console.log('✅ User tests passed!');
} else {
  console.log('❌ User tests failed!');
  process.exit(1);
}
