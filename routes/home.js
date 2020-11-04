const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('即使身在泥潭，仍有人仰望星空');
});
module.exports=router;