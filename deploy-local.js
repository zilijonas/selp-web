const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

console.log(`${colors.bright}${colors.cyan}Starting local deployment process...${colors.reset}`);

// Step 1: Build the Next.js app
console.log(`\n${colors.yellow}Step 1: Building Next.js app...${colors.reset}`);
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Build completed successfully${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}✗ Build failed: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Step 2: Add .nojekyll file
console.log(`\n${colors.yellow}Step 2: Adding .nojekyll file...${colors.reset}`);
try {
  fs.writeFileSync(path.join(__dirname, 'out', '.nojekyll'), '');
  console.log(`${colors.green}✓ Added .nojekyll file${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}✗ Failed to add .nojekyll file: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Step 3: Copy CNAME file
console.log(`\n${colors.yellow}Step 3: Copying CNAME file...${colors.reset}`);
try {
  fs.copyFileSync(
    path.join(__dirname, 'public', 'CNAME'),
    path.join(__dirname, 'out', 'CNAME')
  );
  console.log(`${colors.green}✓ Copied CNAME file${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}✗ Failed to copy CNAME file: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Step 4: Fix asset paths for GitHub Pages
console.log(`\n${colors.yellow}Step 4: Fixing asset paths for GitHub Pages...${colors.reset}`);
try {
  execSync('node fix-nextjs-gh-pages.js', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Fixed asset paths${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}✗ Failed to fix asset paths: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Step 5: Deploy to GitHub Pages
console.log(`\n${colors.yellow}Step 5: Deploying to GitHub Pages...${colors.reset}`);
ghpages.publish('out', {
  dotfiles: true,
  message: 'Deploy: Manual deployment',
  callback: function(err) {
    if (err) {
      console.error(`${colors.red}✗ Deployment failed: ${err}${colors.reset}`);
      process.exit(1);
    } else {
      console.log(`${colors.bright}${colors.green}✓ Deployment completed successfully!${colors.reset}`);
      console.log(`${colors.cyan}Your site should be available at: https://selp.life${colors.reset}`);
    }
  }
}); 