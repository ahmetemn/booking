import express  from "express" ; 
import {updateUser , deleteUser , getUser , allUser} from "../controllers/user.js"
import {verifyAdmin, verifyToken , verifyUser} from "../utils/verifyToken.js"
const router = express.Router() ; 
///CREATE 


router.get("/checkauthentication" , verifyToken , (req,res,next)=>{
    res.send("Hello user , you are logged in ")
})
router.get("/checkuser/:id" , verifyUser , (req,res,next)=>{
    res.send("Hello user , you are logged in and you can delete you account  ")
})
router.get("/checkadmin/:id" , verifyAdmin , (req,res,next)=>{
    res.send("Hello admin , you are logged in and you can delete all account  ")
})

///UPDATE 

router.put("/:id",updateUser)

///DELETE 

router.delete("/:id", deleteUser)

///GET 
router.get("/:id", getUser)

///GET ALL 
router.get("/", allUser)




export default router;