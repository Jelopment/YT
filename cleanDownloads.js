const fs = require('fs');
const path = require('path');

function makedir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true});
    }
}

function mvFile(oldPath, newPath) {
    fs.rename(oldPath, newPath , () => {});
}

function sortDir(folder) {
    fs.readdirSync(folder).forEach (file => {
        let ext = path.extname(file);
        let mkdir = folder + '/_' + ext;
        let oldPath = folder + '/' + file;
        let newPath = mkdir + '/' + file;
        makedir(mkdir);
        mvFile(oldPath, newPath);
    });
}

setInterval(() => {
    sortDir('/home/yt/Downloads');
}, 1000);
