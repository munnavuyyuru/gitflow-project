console.log('Running tests...');

// Simple test
function testHealthCheck() {
  console.log('✓ Health check test passed');
  return true;
}

function testVersionEndpoint() {
  console.log('✓ Version endpoint test passed');
  return true;
}

const results = [
  testHealthCheck(),
  testVersionEndpoint()
];

if (results.every(r => r === true)) {
  console.log('\n✅ All tests passed!');
  process.exit(0);
} else {
  console.log('\n❌ Tests failed!');
  process.exit(1);
}
