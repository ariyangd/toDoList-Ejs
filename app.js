const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();

const items = ["Buy food", "cook food", "eat food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {

    let day = date.getDate();

    res.render("list", { listTitle: day, newListItems: items });

});


app.post("/", (req, res) => {
    console.log(req.body);
    let item = req.body.newItem;

    if (req.body.list === " Work ") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});






app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work", newListItems: workItems });
})

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(3000, () => {
    console.log("Server Running");
});

// if (req.body.newItem === "work") {
//     items.push(item);
//     res.redirect("/work");
// } else {
//     items.push(item);
//     res.redirect("/");
// }


// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.set('view engine', 'ejs');

// app.get("/", function (req, res) {

//     var today = new Date();
//     var currentDay = today.getDay();
//     var day = "";

//     if (currentDay === 6 || currentDay === 0) {
//         day = "Weekend";
//     } else {
//         day = "Weekday";
//     }

//     res.render("list", {  KindOfDay: day });
// });

// app.listen(3000, function () {
//     console.log("Server started on port 3000");
// });
