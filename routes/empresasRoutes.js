import express from "express";
const router = express.Router();

router.get("/",(req, res) =>{
  res.send("desde Api")
});

export default router;
