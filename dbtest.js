const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
.then((data)=>console.log('Connect to MongoDB'))
.catch(err=>console.log('Could not connect to Mongodb...',err));

const courseSchema=new mongoose.Schema({
    name:{type:String,required:true},
    author:String,
    tags:[String],
    data:{type:Date,default:Date.now},
    isPublished:Boolean,
});
const Course=mongoose.model('Course',courseSchema);


async function createCourse(){
    const course=new Course({
        // name:'Angular Course',
        author:'Mosh',
        tags:['angular','fronend'],
        isPublished:true
    });
    try{
        const result= await course.save();
        console.log(result);
    }
    catch(ex){
        console.log(ex.message);
    }

}
async function findCourse(){
    const result = await Course.find().select({name:1,tags:1});
    console.log(result);
}
 createCourse();

//findCourse();















