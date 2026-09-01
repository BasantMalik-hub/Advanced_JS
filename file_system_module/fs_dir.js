const fs = require('fs');

fs.mkdir("./myfolder", { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Folder ready");

    fs.readdir("./myfolder", (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("directory content before writing:", files);

        fs.writeFile("./myfolder/hello.txt", "", (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("file created inside ./myfolder");
        });
    });
});
