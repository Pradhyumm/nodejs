const ex = require("express")
const { route } = require("express/lib/application");
const Course = require("../models/course")
const router = ex.Router();


router.get("/", async (req,res)=>{
    try{
    const courses =await Course.find();
    res.json(courses);
    }
    catch(err)
    {
        res.json(err);
    }
});


module.exports = router;