const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy user for login validation
const validUser = {
	username: "root",
	password: "password123",
};

// Login API
app.post("/api/login", (req, res) => {
	const { username, password } = req.body;

	if (username === validUser.username && password === validUser.password) {
		return res.json({ success: true, message: "Login successful!" });
	} else {
		return res
			.status(401)
			.json({ success: false, message: "Invalid credentials" });
	}
});

// Start server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
