# GitFlow Project

## 🎯 Project Purpose
Demonstrate production-grade GitFlow implementation with CI/CD

## 🏗️ Architecture
- Simple Node.js REST API
- Automated testing pipeline
- GitFlow branching strategy
- Semantic versioning

## 🚀 Quick Start
```bash
npm install
npm start
npm test
```

##  Git Hooks Setup
```bash
# Install hooks locally
./scripts/install-hooks.sh

<type>(scope): <message>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- test: Testing
- chore: Maintenance
- ci: CI/CD changes
```


### **VERIFICATION TASK :**
```bash
# Install hooks locally
./scripts/install-hooks.sh

# Try invalid commit (should fail)
echo "test" > test.txt
git add test.txt
git commit -m "bad commit"  # Should fail!

# Try valid commit
git commit -m "test: verify commit hook working"  # Should pass!

# Clean up test
git reset HEAD~1
rm test.txt
```
