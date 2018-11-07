import koa from 'koa'
import Router from 'koa-router'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'

//路由文件
import router from './routes/index'
//数据库连接文件
import query from './utils/query'

const app = new koa();

app.use(cors());
app.use(bodyParser());
app.use(router.routes())
app.use(cors()).use(bodyParser()).use(router.routes());

app.listen(3000,()=>{
  console.log('node is ddfgbb')
});
