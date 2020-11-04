const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const logger=require('./middleware/logger');
const courses=require('./routes/courses');
const home=require('./routes/home');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(helmet());
app.use(morgan('tiny'));
app.use(logger);

app.use('/',home);
app.use('/api/courses',courses);


app.listen(3000,()=>{console.log('listening to port 3000')});