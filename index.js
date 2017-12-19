import Koa from 'koa';
import koaStatic from 'koa-static';

import scan from './scan';

const app = new Koa();

app.use(koaStatic(`${__dirname}/public`));
app.use(scan.routes()).use(scan.allowedMethods());

app.listen(process.env.PORT || 3030);

console.log(`Listening to ${process.env.PORT || 3030}`);
