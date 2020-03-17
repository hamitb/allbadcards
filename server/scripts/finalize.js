'use strict';
const path = require('path');
const fs = require('fs-extra');

const appDirectory = fs.realpathSync(process.cwd());
const resolve = relativePath => path.resolve(appDirectory, relativePath);
const clientBuild = resolve("client/build");
const clientOutput = resolve("output/client");

function copyOutput() {
    fs.copySync(clientBuild, clientOutput, {
        dereference: true
    });
}

const finalize = () => {
    copyOutput();
};

module.exports = {
    finalize
};