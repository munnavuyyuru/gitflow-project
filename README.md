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
## 🧹 Branch Management

### Cleanup Stale Branches
```bash
# Check for stale branches
./scripts/cleanup-branches.sh

# Delete merged local branches
git branch --merged develop | grep -v "main\|develop" | xargs git branch -d

# Prune remote tracking branches
git fetch --prune
```

### Branch Naming Convention
- feature/description - New features
- bugfix/description - Bug fixes
- hotfix/version-description - Production hotfixes
- release/version - Release preparation
