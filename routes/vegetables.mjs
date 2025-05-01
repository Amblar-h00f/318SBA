import express from "express";
import Vegetable from "../models/vegetable.mjs";

const router = express.Router();

/// create
router.post("/", async (req, res) => {
  try {
    const newVeg = await Vegetable.create(req.body);
    res.status(201).json(newVeg);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//read
router.get("/", async (req, res) => {
  try {
    const { color } = req.query;
    const filter = color ? { color } : {};
    const vegetables = await Vegetable.find(filter);
    res.json(vegetables);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const updatedVeg = await Vegetable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVeg) {
      return res.status(404).json({ error: "Vegetable not found" });
    }
    res.json(updatedVeg);
  } catch (err) {
    res.status(400).json({ error: "Failed to update vegetable" });
  }
});

//delete

router.delete("/:id", async (req, res) => {
  try {
    const deleteVeg = await Vegetable.findByIdAndDelete(req.params.id);

    if (!deleteVeg) {
      return res.status(404).json({ error: "Vegetable not found" });
    }

    res.json({ msg: "Vegetable deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete vegetable" });
  }
});

export default router;
