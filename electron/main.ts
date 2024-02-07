import { app, BrowserWindow } from 'electron'
import path from 'node:path'
import { spawn, exec } from 'child_process';
import { GetPid } from './GetPID';


// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')

const server = spawn('yarn', ['run', 'start:dev'], { cwd: 'C:\\Users\\usuario\\Desktop\\Dev\\AppVuelto2\\AppVueltoDesk\\back-vuelto', shell: true });


let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', async() => {
  console.log("CErrando");
  
  const pid = await GetPid();
  console.log('PID', pid);  

  exec(`taskkill /F /PID ${pid}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`No se pudo matar el proceso: ${error}`);
    } else {
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }
  });
  

  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})



 

app.whenReady().then(async () => {
 
  server.stdout.on('data', (data) => {
     console.log(`stdout: ${data}`);
     if (data.toString().includes('Nest application successfully started')) {
       createWindow();
     }
  });
 
  server.stderr.on('data', (data) => {
     console.error(`stderr: ${data}`);
  });
 
  server.on('close', (code) => {
     console.log(`El servidor NestJS ha terminado con el código: ${code}`);
  });

  server.on('error', (error) => {
    console.error(`Ocurrió un error al iniciar el servidor NestJS: ${error}`);
   });
   
 });
 

app.on('before-quit', async () => {  
  const pid = await GetPid();

  if (!pid) return 0;

  exec(`taskkill /F ${pid} /PID `, (error, stdout, stderr) => {
    if (error) {
      console.error(`No se pudo matar el proceso: ${error}`);
    } else {
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }
  });
  
 });