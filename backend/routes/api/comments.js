const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json({ comments });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndRemove(req.params.id);
        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});
