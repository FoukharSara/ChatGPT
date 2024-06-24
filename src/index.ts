import Fastify, { FastifyInstance } from 'fastify';
import mongoose from 'mongoose';
import index from './routes/index';



const app:FastifyInstance = Fastify({ logger: true });

//connect to db
mongoose.connect('mongodb://127.0.0.1:27017/crud')
.then(()=>{
    app.log.info("BD Connected yey");
}).catch(()=>{
    app.log.error("Not Connected");
})

//routes
app.register(index);


const start = ()=>{
    try{
        app.listen({port:8080});
        app.log.info("Running on http://localhost:8080");
    }catch(err){
        app.log.error(err);
        process.exit(1);

    }
}
start();
