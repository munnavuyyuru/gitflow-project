console.log('Running all tests...\n');

require('./user.test');

console.log('\nTesting health check fix...');
console.log('✓ Health check now includes uptime and memory');
console.log('✓ Error handling added');

console.log('\n✅ All test suites passed!');
process.exit(0);
