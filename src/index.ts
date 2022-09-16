const func = require("./func");
const config_file = require("../config/config.json").command;

const map: Map<string, string> = new Map<string, string>();

for (const key in config_file) {
    if (!func.is_string(key)) {
        throw new Error("key is not a string");
    }

    const value: any = config_file[key];
    if (!func.is_string(value)) {
        throw new Error("value is not a string");
    }

    map.set(key, value);
}

const arg: string | undefined = process.argv[2];

if (arg === undefined) {
    throw new Error("no argument");
}
if (!func.is_string(arg)) {
    throw new Error("argument is not a string");
}

if (arg === "ls") {
    func.list(map);
} else {
    func.run_command(arg, map);
}

// exit
process.exit(0);