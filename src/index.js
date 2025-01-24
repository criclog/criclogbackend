const express = require("express");
const cors = require("cors");
const connection = require("./config/connection");

// Route imports
const auth1Route = require("./routes/auth1.routes");
const adminauthRoute = require("./routes/adminauth.routes");
const marketRoute = require("./routes/market.route");
const newsRoute = require("./routes/news.route");
const internationalRoute = require("./routes/international.route");
const LookingRouter = require("./routes/Looking.router");
const TournamentRouter = require("./routes/Tournament.routers");
const matchliveRoute = require("./routes/matchlive.route");
const matchRoute = require("./routes/match.route");
const playerofmatchRoute = require("./routes/playerofmatch.routers");
const Commentary = require("./routes/Commertary.routes");
const bowlingRoute = require("./routes/bowlingdata.route");
const bowlingData2Route = require("./routes/bowlingdata2.route");
const battingData1Route = require("./routes/battingdata1.route");
const battingData2Route = require("./routes/battingdata2.route");

// Initialize Express app
const app = express();
const port = 7000;

// Middleware setup
app.use(
  cors({
    origin: [
      "https://criclog-admin87.web.app",
      "https://criclog057.web.app",
    ],
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(express.json()); // Parse JSON requests

// Connect to database
connection();


// API routes
app.use("/v1", auth1Route);
app.use("/admin", adminauthRoute);
app.use("/view", express.static("src/upload"));
app.use(marketRoute);
app.use(newsRoute);
app.use(internationalRoute);
app.use(LookingRouter);
app.use(TournamentRouter);
app.use(matchliveRoute);
app.use(matchRoute);
app.use(playerofmatchRoute);
app.use(Commentary);
app.use(bowlingRoute);
app.use(bowlingData2Route);
app.use(battingData1Route);
app.use(battingData2Route);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
