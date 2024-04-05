import express from 'express'
import ejs from "ejs"
import os from 'os';
import { readFileSync } from 'fs';
const router = express.Router();
const port = 3000
const app = express()

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

const __dirname = process.cwd()

app.engine('html', ejs.renderFile);

router.get('/', function (req, res) {
  const payload = {
    host: os.hostname(),
    version: packageJson.version
  }
  res.render(__dirname + '/index.ejs', { payload });
})

app.use(router)

app.listen(port, () => {
  console.log(`${process.env.NODE_ENV} api on port ${port}`)
})

