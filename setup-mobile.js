
import { execSync } from 'child_process';
import fs from 'fs';
import readline from 'readline';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Workout Planner Hub Mobile Setup');
console.log('================================\n');

const runCommand = (cmd, errorMsg) => {
  try {
    execSync(cmd, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Error: ${errorMsg || error.message}`);
    return false;
  }
};

const setupProcess = async () => {
  console.log('Installing dependencies...');
  
  if (!runCommand('npm install', 'Failed to install dependencies')) {
    process.exit(1);
  }

  console.log('\nInstalling Capacitor...');
  
  if (!runCommand('npm install @capacitor/core @capacitor/cli', 'Failed to install Capacitor')) {
    process.exit(1);
  }

  console.log('\nWhich platform would you like to set up?');
  console.log('1. iOS');
  console.log('2. Android');
  console.log('3. Both');
  
  rl.question('Enter your choice (1-3): ', (choice) => {
    let installAndroid = false;
    let installIOS = false;
    
    switch(choice) {
      case '1':
        installIOS = true;
        break;
      case '2':
        installAndroid = true;
        break;
      case '3':
        installIOS = true;
        installAndroid = true;
        break;
      default:
        console.log('Invalid choice. Exiting setup.');
        rl.close();
        process.exit(1);
    }
    
    if (installIOS) {
      console.log('\nInstalling iOS platform...');
      if (!runCommand('npm install @capacitor/ios', 'Failed to install iOS platform')) {
        console.log('iOS setup failed.');
      } else {
        console.log('iOS platform installed successfully!');
      }
    }
    
    if (installAndroid) {
      console.log('\nInstalling Android platform...');
      if (!runCommand('npm install @capacitor/android', 'Failed to install Android platform')) {
        console.log('Android setup failed.');
      } else {
        console.log('Android platform installed successfully!');
      }
    }
    
    console.log('\nBuilding the web application...');
    if (!runCommand('npm run build', 'Failed to build the web application')) {
      console.log('Web build failed. Cannot continue with mobile setup.');
      rl.close();
      process.exit(1);
    }
    
    console.log('\nInitializing Capacitor...');
    if (!runCommand('npx cap init "Workout Planner Hub" "dev.lovable.workoutplannerhub" --web-dir="dist"', 'Failed to initialize Capacitor')) {
      console.log('Capacitor initialization failed.');
      rl.close();
      process.exit(1);
    }
    
    if (installIOS) {
      console.log('\nAdding iOS platform...');
      if (!runCommand('npx cap add ios', 'Failed to add iOS platform')) {
        console.log('iOS platform addition failed.');
      }
    }
    
    if (installAndroid) {
      console.log('\nAdding Android platform...');
      if (!runCommand('npx cap add android', 'Failed to add Android platform')) {
        console.log('Android platform addition failed.');
      }
    }
    
    console.log('\nSyncing Capacitor...');
    runCommand('npx cap sync', 'Failed to sync Capacitor');
    
    console.log('\n=================================');
    console.log('Setup completed!');
    console.log('\nTo run your app:');
    
    if (installIOS) {
      console.log('iOS: npx cap open ios');
    }
    
    if (installAndroid) {
      console.log('Android: npx cap open android');
    }
    
    console.log('\nFor future builds:');
    console.log('1. npm run build');
    console.log('2. npx cap sync');
    console.log('3. npx cap open ios/android');
    
    rl.close();
  });
};

setupProcess();
