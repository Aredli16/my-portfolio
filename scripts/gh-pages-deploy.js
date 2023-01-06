const { execSync } = require("child_process");
const fs = require('fs')

console.log("Building started...");
execSync('git checkout --orphan gh-pages');
execSync('yarn run build')
fs.renameSync('dist', 'build')
execSync('git rm --cached * -f')
execSync('git add build/*')
console.log("Pushing to gh-pages...");
execSync('git push origin HEAD:gh-pages --force')
execSync('git rm -r build')
execSync('git checkout main -f')
execSync('git branch -D gh-pages')
console.log('Successful deployed')