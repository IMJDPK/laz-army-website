const fs = require('fs');
const path = require('path');

// Configuration
const rootDir = __dirname;
const outputFile = path.join(rootDir, 'site-index.md');
const excludeDirs = ['.git', 'node_modules', '.next', 'dist', 'build'];
const excludeFiles = ['.DS_Store', '.env', '.env.local', '.gitignore'];

// Function to create index
async function generateIndex() {
  let indexContent = `# Laz Army Site Index\n\nGenerated on ${new Date().toLocaleString()}\n\n`;
  
  // Function to recursively traverse directory
  function traverseDirectory(dirPath, level = 0) {
    const indent = '  '.repeat(level);
    const relativePath = path.relative(rootDir, dirPath);
    const dirName = relativePath || '/';
    
    indexContent += `${indent}- 📁 **${dirName}/**\n`;
    
    const items = fs.readdirSync(dirPath);
    
    // Process directories first
    items
      .filter(item => {
        const itemPath = path.join(dirPath, item);
        return fs.statSync(itemPath).isDirectory() && !excludeDirs.includes(item);
      })
      .sort()
      .forEach(item => {
        const itemPath = path.join(dirPath, item);
        traverseDirectory(itemPath, level + 1);
      });
    
    // Then process files
    items
      .filter(item => {
        const itemPath = path.join(dirPath, item);
        return fs.statSync(itemPath).isFile() && !excludeFiles.includes(item);
      })
      .sort()
      .forEach(item => {
        indexContent += `${indent}  - 📄 ${item}\n`;
      });
  }
  
  traverseDirectory(rootDir);
  
  // Write index to file
  fs.writeFileSync(outputFile, indexContent);
  console.log(`Index generated at: ${outputFile}`);
}

generateIndex().catch(console.error);
