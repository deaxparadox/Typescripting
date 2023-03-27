import * as fs from "fs";
import * as util from "util";

const writeFile = util.promisify(fs.writeFile);