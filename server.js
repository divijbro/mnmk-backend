app.post("/send", (req, res) => {
    console.log("Received data:", req.body);
    res.json({ success: true });
});
