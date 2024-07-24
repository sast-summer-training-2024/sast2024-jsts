import { getFuCount } from "./lib";

const TEST_CASES: [string, number][] = [
    ["123m333p44556677s",  24],
    ["567m233334p234s11z", 26],
    ["111222m344556p77s",  32],
    ["345m111222p456s11z", 34],
    ["112233m111123p22z",  30],
    ["111122223333m11z",   38],
    ["111222333m123p33z",  36],
    ["11112345678999m",    28],
    ["11122233344477z",    54],
    ["11223355778899m",    20],
    ["123456789m123p22z",  22],
    ["11224455667799m",    -1],
    ["19m19p19s12345677z", -1],
    ["1123344566m1234z",   -1],
];

let pass = true;
TEST_CASES.forEach((test, ind) => {
    const result = getFuCount(test[0]);
    if (result !== test[1]) {
        pass = false;
        console.log(`Test case #${ind} failed. Hand: ${test[0]}, you gave: ${result}, answer: ${test[1]}`);
    }
});

if (pass) console.log("PASSED!");
else console.log("Something went wrong :(");
