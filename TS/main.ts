import * as fs from "fs";

import touch from "./utils/touch";

async function processArgument() {
    process.argv.forEach(argument => console.log(argument));
};
// processArgument();

async function fsWriteFile() {

    const data: string = "My name is Nitsh";

    fs.writeFile("./.Extra/newFile.txt", data, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("File created successfully");
        }
    })
}
// fsWriteFile();

async function bashScript() {
    const command = process.argv[2];
    const path = process.argv[3];

    if (command && path) {
        switch (command) {
            case "touch": {
                touch(path);
                break;
            }
            default: {
                console.log("Unkonwn command"0;)
            }
        }
    } else {
        console.log("Command missing");
    }
}