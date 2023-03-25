const express=require("express")
const router=new express.Router()
const MensRanking=require("../models/men")
router.get("/", async (req,res)=>{
    res.send("Hello from Bishal")
})
router.post("/mens",async (req,res)=>{
    try
    {
        const addNewRecord=new MensRanking(req.body)
        console.log(addNewRecord)
        const result= await addNewRecord.save()
        res.status(201).send(result)
    }
    catch(e)
    {
       res.status(400).send("ERROR")
    }
})
router.get("/mens", async (req,res)=>{
    try
    {
        const result= await MensRanking.find({},{}).sort({"ranking":1})
        res.status(201).send(result)
        console.log(result)
    }
    catch(e)
    {
        res.status(400).send("ERROR")
    }
})
router.get("/mens/:id", async (req,res)=>{
    try{
        const _id=req.params.id 
        const result=await MensRanking.findById({_id:_id})
        console.log(result)
        res.status(201).send(result)
    }
    catch(e)
    {
        res.status(400).send("ERROR")
    }
})
router.patch("/mens/:id", async (req,res)=>{
    try{
        const _id=req.params.id 
        const result=await MensRanking.findByIdAndUpdate({_id:_id}, 
            req.body,{new:true})
        console.log(result)
        res.status(201).send(result)
    }
    catch(e)
    {
        res.status(400).send("ERROR")
    }
})
router.delete("/mens/:id", async (req,res)=>{
    try{
        const _id=req.params.id 
        const result=await MensRanking.findByIdAndDelete({_id:_id})
        console.log(result)
        res.status(201).send(result)
    }
    catch(e)
    {
        res.status(400).send("ERROR")
    }
})
module.exports=router