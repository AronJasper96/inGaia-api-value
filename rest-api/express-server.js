import http from 'http';
var express = require('express');
var indexRouter = require('../routes/root');
var app = express();
const swaggerUI = require('swagger-ui-express');

const swaggerDocument = require('../utils/swagger/swagger.json');

export default async () => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use('/', indexRouter);
        
  return http.createServer(app);

};