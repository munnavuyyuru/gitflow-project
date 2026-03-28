#!/bin/bash

echo "Installing Git hooks.."

# Copy hooks to .git/hooks
cp scripts/git-hooks/pre-commit .git/hooks/pre-commit
cp scripts/git-hooks/commit-msg .git/hooks/commit-msg

chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/commit-msg

echo "Git hooks installed successfully! ✔"
echo ""
echo "Hooks installed:"
echo "  - pre-commit: Runs tests and checks before commit"
echo "  - commit-msg: Validates commit message format"
