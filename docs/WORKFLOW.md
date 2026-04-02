# GitFlow Workflow Guide

## 🌊 Branch Strategy

### Main Branches
- **main** - Production-ready code only
- **develop** - Integration branch for features

### Supporting Branches
- **feature/** - New features
- **release/** - Release preparation
- **hotfix/** - Emergency production fixes

## 📋 Workflows

### 1. New Feature Development

```bash
# Start from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: description of feature"

# Push and create PR
git push origin feature/your-feature-name
# Create PR: feature/your-feature-name → develop
```


### 2. Release Process
```Bash
# Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/X.Y.0

# Update version and changelog
# Update package.json version
# Update CHANGELOG.md

git add .
git commit -m "chore(release): prepare version X.Y.0"
git push origin release/X.Y.0

# Create PR: release/X.Y.0 → main
# After merge, tag the release
git checkout main
git pull origin main
git tag -a vX.Y.0 -m "Release version X.Y.0"
git push origin vX.Y.0

# Merge back to develop
git checkout develop
git merge release/X.Y.0
git push origin develop
```

### 3. Hotfix Process
```bash
# Create from main
git checkout main
git pull origin main
git checkout -b hotfix/X.Y.Z-description

# Make fix and update version
git add .
git commit -m "fix: critical issue description"
git push origin hotfix/X.Y.Z-description

# Create PR: hotfix/X.Y.Z → main
# After merge, tag
git checkout main
git pull origin main
git tag -a vX.Y.Z -m "Hotfix version X.Y.Z"
git push origin vX.Y.Z

# Merge to develop too!
git checkout develop
git merge hotfix/X.Y.Z-description
git push origin develop
```

## 🚫 Common Mistakes
### ❌ DON'T
- Don't commit directly to main or develop
- Don't force push to shared branches
- Don't create features from main
- Don't forget to update version numbers
- Don't skip tests before pushing

### ✅ DO
- Always create PRs for review
- Write descriptive commit messages
- Keep branches short-lived (<1 week)
- Update documentation
- Run tests locally first

### 🔄 Version Bumping
- Semantic Versioning (MAJOR.MINOR.PATCH)
- MAJOR (1.0.0 → 2.0.0): Breaking changes
- MINOR (1.0.0 → 1.1.0): New features, backwards compatible
- PATCH (1.0.0 → 1.0.1): Bug fixes

#### Example:
```bash
# New feature
1.2.3 → 1.3.0

# Bug fix
1.2.3 → 1.2.4

# Breaking change
1.2.3 → 2.0.0
```

## 🆘 Emergency Procedures
### Rollback Production
```bash
# Option 1: Revert commit
git checkout main
git revert <commit-hash>
git push origin main

# Option 2: Deploy previous tag
git checkout v1.0.0
# Deploy this version
```

### Recover Deleted Branch
```Bash
# Find branch commit
git reflog
# Recreate branch
git checkout -b recovered-branch <commit-hash>
```


