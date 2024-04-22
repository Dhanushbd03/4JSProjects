import express from "express";

const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
	return true;
});

app.listen(3000, () => {
	console.log("serve at http://localhost:3000");
});
