#!/bin/bash

# Change to your branch name if it's not 'main' (e.g., 'master')
BRANCH="main"

echo "Starting auto-push every 30 seconds to branch: $BRANCH"
echo "Press Ctrl+C to stop."

while true; do
  # Add all changed files
  git add .
  
  # Check if there are actually changes to commit
  if git diff-index --quiet HEAD --; then
    echo "[$(date +'%H:%M:%S')] No changes detected. Waiting 30s..."
  else
    # Commit with a timestamp
    git commit -m "Auto-commit at $(date +'%Y-%m-%d %H:%M:%S')"
    
    # Push to GitHub
    git push origin $BRANCH
    echo "[$(date +'%H:%M:%S')] Changes pushed successfully!"
  fi
  
  # Wait for 30 seconds
  sleep 30
done
