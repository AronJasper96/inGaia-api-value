import 'dotenv/config';
import expressServer from './rest-api/express-server';

const init = async () =>{
  try {
    const server = await expressServer();
    const port = process.env.PORT_API || 3001
    server.listen(port, () =>{
      console.log(`API run on http://localhost:${port}`);
    })
  } catch (error) {
    console.error(error);
  }
};

init();