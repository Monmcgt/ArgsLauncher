const child_process = require("child_process");

function is_string(value: any): boolean {
    return typeof value === "string";
}

function run_command(command: string, map: Map<string, string>): void {
    const value: string | undefined = map.get(command);
    if (value === undefined) {
        throw new Error("no value");
    }

    child_process.spawn(value, [], {stdio: "pipe"});
    console.log("success: " + value);
}

function list(map: Map<string, string>): void {
    for (const key of map.keys()) {
        // key -> value
        console.log("\"" + key + "\" -> \"" + map.get(key) + "\"");
    }
}

export { is_string, run_command, list };