#!/bin/bash

echo "Branch Cleanup Utility"
echo "=========================="
echo ""

# Fetch latest
git fetch --prune

echo "Branch Statistics:"
echo "-------------------"
echo "Total branches: $(git branch -a | wc -l)"
echo "Local branches: $(git branch | wc -l)"
echo "Remote branches: $(git branch -r | wc -l)"
echo ""

echo " Merged branches (safe to delete):"
echo "-----------------------------------"
git branch --merged develop | grep -v "main\|develop\|\*" || echo "None found"
echo ""

echo "Stale branches (30+ days old):"
echo "---------------------------------"
for branch in $(git branch | grep -v "main\|develop\|\*"); do
  last_commit=$(git log -1 --format=%ct $branch)
  current_time=$(date +%s)
  days_old=$(( ($current_time - $last_commit) / 86400 ))
  
  if [ $days_old -gt 30 ]; then
    echo "  $branch - $days_old days old"
  fi
done
echo ""

echo "  To delete a branch:"
echo "  Local:  git branch -d branch-name"
echo "  Remote: git push origin --delete branch-name"
