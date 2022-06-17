import http from 'http';
import { envConfig } from './common/config';

const port = envConfig.SERVER_PORT;

const server = http.createServer((req, res) => {});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
