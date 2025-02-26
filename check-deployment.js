// check-deployment.js
const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const domain = 'selp.life';
const url = `https://${domain}`;

console.log(`Checking deployment at: ${url}`);

// Function to check if a URL is accessible
function checkUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, data });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Function to check if JavaScript files are accessible
async function checkJsFiles(baseUrl, htmlContent) {
  const jsFiles = [];
  const regex = /src="(\.\/)?(_next\/static\/chunks\/[^"]+)"/g;
  let match;
  
  while ((match = regex.exec(htmlContent)) !== null) {
    jsFiles.push(match[2]);
  }
  
  console.log(`Found ${jsFiles.length} JavaScript files referenced in HTML`);
  
  for (const jsFile of jsFiles.slice(0, 3)) { // Check first 3 files only
    const jsUrl = `${baseUrl}/${jsFile}`;
    try {
      const { statusCode } = await checkUrl(jsUrl);
      console.log(`${jsFile}: ${statusCode === 200 ? 'Accessible ✅' : 'Not accessible ❌'} (${statusCode})`);
    } catch (err) {
      console.log(`${jsFile}: Error accessing file ❌ - ${err.message}`);
    }
  }
}

// Main function
async function main() {
  try {
    const { statusCode, data } = await checkUrl(url);
    
    console.log(`Status code: ${statusCode}`);
    
    if (statusCode === 200) {
      console.log('Deployment is accessible! ✅');
      
      // Check if the page contains Next.js scripts
      if (data.includes('_next/static/chunks/')) {
        console.log('Next.js scripts are present in the HTML ✅');
        
        // Check if there are any script errors
        if (data.includes('Error loading')) {
          console.log('WARNING: There might be script loading errors in the page ⚠️');
        } else {
          console.log('No obvious script loading errors detected in HTML ✅');
        }
        
        // Check if JavaScript files are accessible
        await checkJsFiles(url, data);
        
        // Check for double slashes in paths
        if (data.includes('.//_next/')) {
          console.log('WARNING: Double slashes detected in paths ⚠️');
        } else {
          console.log('No double slashes detected in paths ✅');
        }
        
        // Check for favicon
        if (data.includes('href="/favicon.ico"')) {
          console.log('WARNING: Favicon has absolute path ⚠️');
        } else if (data.includes('href="./favicon.ico"')) {
          console.log('Favicon has correct relative path ✅');
        }
      } else {
        console.log('WARNING: Next.js scripts are missing from the HTML ❌');
      }
    } else {
      console.log('Deployment is not accessible or returned an error ❌');
    }
  } catch (err) {
    console.error(`Error checking deployment: ${err.message}`);
  }
}

main(); 