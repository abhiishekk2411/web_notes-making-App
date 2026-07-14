const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    fs.readdir(path.join(__dirname, "files"), function (err, files) {
        if (err) return res.status(500).send("Error reading files");
        res.render("index", { files: files });
    });
});

app.get('/files/:filename', function (req, res) {
    fs.readFile(path.join(__dirname, "files", req.params.filename), "utf-8", function (err, filedata) {
        if (err) return res.status(500).send("Error reading file");
        res.render("show", { filename: req.params.filename, filedata: filedata });
    });
});

app.post('/create', function (req, res) {
    fs.writeFile(
        path.join(__dirname, "files", `${req.body.title.split(' ').join('')}.txt`),
        req.body.details,
        function (err) {
            if (err) return res.status(500).send("Error creating file");
            res.redirect('/');
        }
    );
});

app.post('/delete/:filename',function(req,res){
    fs.unlink(`./files/${req.params.filename}`,function(err){
        if(err) return res.status(500).send("Error Deleting file");
        res.redirect('/');
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});