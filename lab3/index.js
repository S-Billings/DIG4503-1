const Express = require("express");
const App = Express();
const port = 80;

App.use("/public", Express.static("public"));

App.get("/", (req, res) => {
    res.send("Hello, world!");
});

App.listen(port, () => {
    console.log("Server running!");
});
