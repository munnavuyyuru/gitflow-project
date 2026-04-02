# Troubleshooting Guide

## 🔧 Common Issues
#### 1. Issue: Merge Conflicts
#### Symptoms: Git says "CONFLICT" during merge

#### Solution:
```bash 
# 1. See conflicted files
git status

# 2. Open file and look for markers
# <<<<<<< HEAD
# Your changes
# =======
# Their changes
# >>>>>>> branch-name

# 3. Edit file to combine changes

# 4. Mark as resolved
git add <file>
git commit -m "chore: resolve merge conflict"
```

#### 2. Issue: Accidentally Committed to Wrong Branch
#### Solution:
```bash
# If not pushed yet
git reset HEAD~1  # Undo last commit
git stash  # Save changes
git checkout correct-branch
git stash pop  # Apply changes

# If already pushed
# Contact repo maintainer immediately
```

#### 3. Issue: CI Pipeline Failing
#### Symptoms: PR checks show red X

#### Solution:
```bash
# 1. Check logs in GitHub Actions tab

# 2. Run tests locally
npm test

# 3. Fix issues and push
git add .
git commit -m "fix: resolve CI failures"
git push
```

#### 4.Issue: Can't Push to Branch
- Error: branch is protected

#### Solution:

- You're trying to push to main/develop directly
- Create a feature branch instead
- Submit a PR for review

#### 5.Issue: Hook Rejection
- Error: pre-commit hook failed

#### Solution:

```Bash
# Fix the issues mentioned
# OR bypass (emergency only!)
git commit --no-verify -m "message"
```

## 🔍 Debug Commands
```bash
# See what changed
git diff

# See commit history
git log --oneline --graph

# See branch relationships
git log --all --decorate --oneline --graph

# See remote branches
git branch -r

# See where HEAD is
git status
```
