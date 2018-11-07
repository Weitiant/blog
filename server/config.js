//数据库的配置文件
export const db = {
  host:'localhost',
  port:'3306',
  user:'root',
  password:'123456',
  multipleStatements:true
//  必须加上这句话，不然的话就无法执行多条sql语句
}
export const dbName = {
  database:'w_blog'
}

export const base_API = '/api/';

//对数据库进行加密
export const secret = 'w_blog'
