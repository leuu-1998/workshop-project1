import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

//Server static resources
app.use(express.static(join(__dirname, "../public")));

//middlewares
app.use(express.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

// First get
app.get("/", (req, res) => {
	res.sendFile(join(__dirname, "../public/index.html"));
});

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";

// Start server
const start = async () => {
	app.listen(port, () => {
		console.log("Listening on http://" + hostname + ":" + port);
	});
}

start();