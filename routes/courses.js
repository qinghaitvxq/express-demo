const express=require('express');
const router=express.Router();

const course=[
    { id:1,name:'math'},
    { id:2,name:'english'},
    {id:3,name:'test'},
    {
        id:4,
        name:'hello world'
    }
];

router.post('/',(req,res)=>{
    console.log(req.body.name);
   res.send(course);
});

module.exports=router;