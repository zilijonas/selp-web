const fs = require('fs');
const path = require('path');

// Function to recursively find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === '.html') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix asset paths in HTML files
function fixAssetPaths(htmlFile) {
  let content = fs.readFileSync(htmlFile, 'utf8');
  
  // Fix double slashes in paths
  content = content.replace(/\.\/\/_next\//g, './_next/');
  
  // Fix paths for Next.js assets
  content = content.replace(/(\s)(href|src)="\/_next\//g, '$1$2="./_next/');
  
  // Fix paths for script sources
  content = content.replace(/"(\/_next\/static\/chunks\/[^"]+)"/g, '"./$1"');
  
  // Fix paths for CSS
  content = content.replace(/"(\/_next\/static\/css\/[^"]+)"/g, '"./$1"');
  
  // Fix paths for images
  content = content.replace(/"(\/_next\/static\/media\/[^"]+)"/g, '"./$1"');
  
  // Fix paths for JSON data
  content = content.replace(/"(\/_next\/static\/[^"]+\.json)"/g, '"./$1"');
  
  // Fix paths in JavaScript
  content = content.replace(/\(\"\/_next\//g, '("./_next/');
  
  // Fix favicon path
  content = content.replace(/href="\/favicon.ico"/g, 'href="./favicon.ico"');
  
  // Fix other absolute paths that should be relative
  content = content.replace(/href="\//g, 'href="./');
  content = content.replace(/src="\//g, 'src="./');
  
  fs.writeFileSync(htmlFile, content, 'utf8');
  console.log(`Fixed: ${htmlFile}`);
}

// Function to find all JS files
function findJsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findJsFiles(filePath, fileList);
    } else if (path.extname(file) === '.js') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix asset paths in JS files
function fixJsAssetPaths(jsFile) {
  let content = fs.readFileSync(jsFile, 'utf8');
  
  // Fix paths in JavaScript files
  content = content.replace(/"\/_next\//g, '"./_next/');
  content = content.replace(/'\/_next\//g, "'./_next/");
  content = content.replace(/\(\"\/_next\//g, '("./_next/');
  content = content.replace(/\('\/_next\//g, "('./_next/");
  
  // Fix double slashes
  content = content.replace(/\.\/\/_next\//g, './_next/');
  
  fs.writeFileSync(jsFile, content, 'utf8');
  console.log(`Fixed JS: ${jsFile}`);
}

// Copy favicon to the root directory
function copyFaviconToRoot(outDir) {
  const faviconPath = path.join(outDir, 'favicon.ico');
  const publicFaviconPath = path.join(__dirname, 'public', 'favicon.ico');
  
  if (fs.existsSync(publicFaviconPath) && !fs.existsSync(faviconPath)) {
    fs.copyFileSync(publicFaviconPath, faviconPath);
    console.log('Copied favicon.ico to root directory from public folder');
  }
}

// Main function
function main() {
  const outDir = path.join(__dirname, 'out');
  
  // Copy favicon to root if needed
  copyFaviconToRoot(outDir);
  
  // Process HTML files
  const htmlFiles = findHtmlFiles(outDir);
  console.log(`Found ${htmlFiles.length} HTML files to process`);
  htmlFiles.forEach(fixAssetPaths);
  
  // Process JS files in _next/static/chunks directory
  const jsChunkDir = path.join(outDir, '_next', 'static', 'chunks');
  if (fs.existsSync(jsChunkDir)) {
    const jsFiles = findJsFiles(jsChunkDir);
    console.log(`Found ${jsFiles.length} JS files to process in chunks directory`);
    jsFiles.forEach(fixJsAssetPaths);
  }
  
  // Process JS files in _next/static/[buildId] directory
  const staticDir = path.join(outDir, '_next', 'static');
  if (fs.existsSync(staticDir)) {
    const buildDirs = fs.readdirSync(staticDir)
      .filter(file => {
        const filePath = path.join(staticDir, file);
        return fs.statSync(filePath).isDirectory() && file !== 'chunks' && file !== 'css' && file !== 'media';
      })
      .map(dir => path.join(staticDir, dir));
    
    buildDirs.forEach(buildDir => {
      if (fs.existsSync(buildDir)) {
        const jsFiles = findJsFiles(buildDir);
        console.log(`Found ${jsFiles.length} JS files to process in build directory ${path.basename(buildDir)}`);
        jsFiles.forEach(fixJsAssetPaths);
      }
    });
  }
  
  console.log('All files processed successfully');
}

main(); 