import { exec } from 'child_process';

export const GetPid = () => {
  return new Promise((resolve, reject) => {
    const port = 3001;

    exec(`netstat -ano | findstr :${port}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al ejecutar netstat: ${error}`);
        reject(error);
      } else {
        const lines = stdout.split('\n');
        for (const line of lines) {
          const parts = line.trim().split(/\s+/);
          const pid = parts[parts.length - 1];
          if (pid) {
            console.log(`El PID del proceso que está escuchando en el puerto ${port} es ${pid}`);
            resolve(pid);
            break;
          }
        }
      }
    });
  });
}

