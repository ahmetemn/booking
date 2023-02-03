import express from "express";
import { allHotel, createHotel, deleteHotel, getHotel, updateHotel } from "../controllers/hotel.js";

const router = express.Router();
import Hotel from "../models/Hotel.js";
///CREATE 
router.post("/",createHotel );

///UPDATE 

router.put("/:id",updateHotel)

///DELETE 

router.delete("/:id", deleteHotel)

///GET 
router.get("/:id", getHotel)

///GET ALL 
router.get("/", allHotel)





export default router; 