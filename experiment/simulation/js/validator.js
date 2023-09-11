import { getBoxOrder } from "./main.js";
export function isFilled() {
    // checking verilog module
    let moduleName = document.getElementById("module-name");
    let input1 = document.getElementById("input1-selector");
    let input2 = document.getElementById("input2-selector");
    let input3 = document.getElementById("input3-selector");
    let input4 = document.getElementById("input4-selector");
    let output1 = document.getElementById("output1-selector");
    let output2 = document.getElementById("output2-selector");
    let LHS00 = document.getElementById("00-LHS-selector");
    let LHS01 = document.getElementById("01-LHS-selector");
    let LHS10 = document.getElementById("10-LHS-selector");
    let LHS11 = document.getElementById("11-LHS-selector");
    let operator00 = document.getElementById("00-operator-selector");
    let operator01 = document.getElementById("01-operator-selector");
    let operator10 = document.getElementById("10-operator-selector");
    let operator11 = document.getElementById("11-operator-selector");
    let RHS1LEFT00 = document.getElementById("00-RHS1LEFT-selector");
    let RHS1LEFT01 = document.getElementById("01-RHS1LEFT-selector");
    let RHS1LEFT10 = document.getElementById("10-RHS1LEFT-selector");
    let RHS1LEFT11 = document.getElementById("11-RHS1LEFT-selector");
    let RHS1OPERATOR00 = document.getElementById("00-RHS1OPERATOR-selector");
    let RHS1OPERATOR01 = document.getElementById("01-RHS1OPERATOR-selector");
    let RHS1OPERATOR10 = document.getElementById("10-RHS1OPERATOR-selector");
    let RHS1OPERATOR11 = document.getElementById("11-RHS1OPERATOR-selector");
    let RHS1RIGHT00 = document.getElementById("00-RHS1RIGHT-selector");
    let RHS1RIGHT01 = document.getElementById("01-RHS1RIGHT-selector");
    let RHS1RIGHT10 = document.getElementById("10-RHS1RIGHT-selector");
    let RHS1RIGHT11 = document.getElementById("11-RHS1RIGHT-selector");
    let RHS2LEFT = document.getElementById("00-RHS2LEFT-selector");
    let RHS2OPERATOR = document.getElementById("00-RHS2OPERATOR-selector");
    let RHS2RIGHT = document.getElementById("00-RHS2RIGHT-selector");
    let LHS2 = document.getElementById("00-LHS2-selector");
    let OPERATOR2 = document.getElementById("00-operator2-selector");
    let error = "Highlighted part of the code is incomplete."
    if (moduleName.value.trim() == '') {
        printErrors(error, moduleName);
        return false;
    }
    if (input1.value === "") {
        printErrors(error, input1);
        return false;
    }
    if (input2.value === "") {
        printErrors(error, input2);
        return false;
    }
    if (input3.value === "") {
        printErrors(error, input3);
        return false;
    }
    if (input4.value === "") {
        printErrors(error, input3);
        return false;
    }
    if (output1.value === "") {
        printErrors(error, output1);
        return false;
    }
    if (output2.value === "") {
        printErrors(error, output2);
        return false;
    }
    if (LHS00.value === "") {
        printErrors(error, LHS00);
        return false;
    }
    if (LHS01.value === "") {
        printErrors(error, LHS01);
        return false;
    }
    if (LHS10.value === "") {
        printErrors(error, LHS10);
        return false;
    }
    if (LHS11.value === "") {
        printErrors(error, LHS11);
        return false;
    }
    if (operator00.value === "") {
        printErrors(error, operator00);
        return false;
    }
    if (operator01.value === "") {
        printErrors(error, operator01);
        return false;
    }
    if (operator10.value === "") {
        printErrors(error, operator10);
        return false;
    }
    if (operator11.value === "") {
        printErrors(error, operator11);
        return false;
    }
    if (RHS1LEFT00.value === "") {
        printErrors(error, RHS1LEFT00);
        return false;
    }
    if (RHS1LEFT01.value === "") {
        printErrors(error, RHS1LEFT01);
        return false;
    }
    if (RHS1LEFT10.value === "") {
        printErrors(error, RHS1LEFT10);
        return false;
    }
    if (RHS1LEFT11.value === "") {
        printErrors(error, RHS1LEFT11);
        return false;
    }
    if (RHS1OPERATOR00.value === "") {
        printErrors(error, RHS1OPERATOR00);
        return false;
    }
    if (RHS1OPERATOR01.value === "") {
        printErrors(error, RHS1OPERATOR01);
        return false;
    }
    if (RHS1OPERATOR10.value === "") {
        printErrors(error, RHS1OPERATOR10);
        return false;
    }
    if (RHS1OPERATOR11.value === "") {
        printErrors(error, RHS1OPERATOR11);
        return false;
    }
    if (RHS1RIGHT00.value === "") {
        printErrors(error, RHS1RIGHT00);
        return false;
    }
    if (RHS1RIGHT01.value === "") {
        printErrors(error, RHS1RIGHT01);
        return false;
    }
    if (RHS1RIGHT10.value === "") {
        printErrors(error, RHS1RIGHT10);
        return false;
    }
    if (RHS1RIGHT11.value === "") {
        printErrors(error, RHS1RIGHT11);
        return false;
    }
    if (RHS2LEFT.value === "") {
        printErrors(error, RHS2LEFT);
        return false;
    }
    if (RHS2OPERATOR.value === "") {
        printErrors(error, RHS2OPERATOR);
        return false;
    }
    if (RHS2RIGHT.value === "") {
        printErrors(error, RHS2RIGHT);
        return false;
    }
    if (LHS2.value === "") {
        printErrors(error, LHS2);
        return false;
    }
    if (OPERATOR2.value === "") {
        printErrors(error, OPERATOR2);
        return false;
    }


    // checking verilog testbench
    let tbName = document.getElementById("tb-name");
    let input1TB = document.getElementById("input1TB-selector");
    let input2TB = document.getElementById("input2TB-selector");
    let input3TB = document.getElementById("input3TB-selector");
    let input4TB = document.getElementById("input4TB-selector");
    let input5TB = document.getElementById("input5TB-selector");
    let input6TB = document.getElementById("input6TB-selector");
    let moduleNameTB = document.getElementById("module-name-tb");
    let arg1 = document.getElementById("argument1-selector");
    let arg2 = document.getElementById("argument2-selector");
    let arg3 = document.getElementById("argument3-selector");
    let arg4 = document.getElementById("argument4-selector");
    let arg5 = document.getElementById("argument5-selector");
    let arg6 = document.getElementById("argument6-selector");
    if (tbName.value.trim() == '') {
        printErrors(error, tbName);
        return false;
    }
    if (input1TB.value === "") {
        printErrors(error, input1TB);
        return false;
    }
    if (input2TB.value === "") {
        printErrors(error, input2TB);
        return false;
    }
    if (input3TB.value === "") {
        printErrors(error, input3TB);
        return false;
    }
    if (input4TB.value === "") {
        printErrors(error, input4TB);
        return false;
    }
    if (input5TB.value === "") {
        printErrors(error, input5TB);
        return false;
    }
    if (input6TB.value === "") {
        printErrors(error, input6TB);
        return false;
    }
    if (moduleNameTB.value.trim() == '') {
        printErrors(error, moduleNameTB);
        return false;
    }
    if (arg1.value === "") {
        printErrors(error, arg1);
        return false;
    }
    if (arg2.value === "") {
        printErrors(error, arg2);
        return false;
    }
    if (arg3.value === "") {
        printErrors(error, arg3);
        return false;
    }
    if (arg4.value === "") {
        printErrors(error, arg4);
        return false;
    }
    if (arg5.value === "") {
        printErrors(error, arg5);
        return false;
    }
    if (arg6.value === "") {
        printErrors(error, arg6);
        return false;
    }
    return true;
}

export function printErrors(errorMsg, errorID) {
    document.getElementById('result').innerHTML = errorMsg;
    document.getElementById('result').classList.remove('text-success');
    document.getElementById('result').classList.add('text-danger');
    if (errorID) {
        errorID.classList.add('highlight');
        setTimeout(function () {
            errorID.classList.remove('highlight');
        }, 3000);
    }
}

export function isValid() {

    // checking the order of the codeblocks
    const boxOrder1 = getBoxOrder('module');
    const boxOrder2 = getBoxOrder('tb');
    let container = document.getElementById("container");
    let containerTB = document.getElementById("containerTB");
    if (boxOrder1[0] !== "1" || boxOrder1[1] !== "2" || boxOrder1[2] !== "3") {
        let msg = "Please rearrange the code blocks of the Verilog Module in the correct order."
        printErrors(msg, container);
        return false;
    }
    if (boxOrder2[0] !== "1TB" || boxOrder2[1] !== "2TB" || boxOrder2[2] !== "3TB" || boxOrder2[3] !== "4TB" || boxOrder2[4] !== "5TB") {
        let msg = "Please rearrange the code blocks of the Verilog Testbench in the correct order."
        printErrors(msg, containerTB);
        return false;
    }


    // Checking if the module and testbench names are valid
    let tbName = document.getElementById("tb-name");
    let moduleNameTB = document.getElementById("module-name-tb");
    let moduleName = document.getElementById("module-name");
    var regex = /^[a-zA-Z][a-zA-Z0-9_]*$/;
    if (!regex.test(moduleName.value.trim())) {
        let msg = "Invalid Module Name.";
        printErrors(msg, moduleName);
        return false;
    }
    if (!regex.test(moduleNameTB.value.trim())) {
        let msg = "Invalid Module Name.";
        printErrors(msg, moduleNameTB);
        return false;
    }
    if (!regex.test(tbName.value.trim())) {
        let msg = "Invalid Testbench Name."
        printErrors(msg, tbName);
        return false;
    }

    // checking if module name matches in both code and tb
    if (moduleName.value.trim() !== moduleNameTB.value.trim()) {
        let msg = "There is no verilog module defined with the name " + moduleNameTB.value.trim();
        printErrors(msg, moduleNameTB);
        return false;
    }

    // checking if module name is not equal to the temporary function name used to call the module in the testbench
    if (moduleNameTB.value.trim() === "uut") {
        let msg = "The name of the module instantiated and the temporary function name (uut) used to instantiate the module in the testbench cannot be the same.";
        printErrors(msg, moduleNameTB);
        return false;
    }

    // checking the input and output argument declaration in the module
    let input1 = document.getElementById("input1-selector");
    let input2 = document.getElementById("input2-selector");
    let input3 = document.getElementById("input3-selector");
    let input4 = document.getElementById("input4-selector");
    let output1 = document.getElementById("output1-selector");
    let output2 = document.getElementById("output2-selector");

    args_inputs = [input1, input2, input3, input4, output1, output2]
    arr = [input1.value, input2.value, input3.value, input4.value, output1.value, output2.value]

    for (let i = 0; i < arr.length - 1; i++) {
        const currentElement = arr[i];
        const nextElements = arr.slice(i + 1);

        if (nextElements.includes(currentElement)) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, args_inputs[i]);
            return false;
        }
    }

    // checking assign block
    let LHS00 = document.getElementById("00-LHS-selector");
    let LHS01 = document.getElementById("01-LHS-selector");
    let LHS10 = document.getElementById("10-LHS-selector");
    let LHS11 = document.getElementById("11-LHS-selector");
    let operator00 = document.getElementById("00-operator-selector");
    let operator01 = document.getElementById("01-operator-selector");
    let operator10 = document.getElementById("10-operator-selector");
    let operator11 = document.getElementById("11-operator-selector");
    let RHS1LEFT00 = document.getElementById("00-RHS1LEFT-selector");
    let RHS1LEFT01 = document.getElementById("01-RHS1LEFT-selector");
    let RHS1LEFT10 = document.getElementById("10-RHS1LEFT-selector");
    let RHS1LEFT11 = document.getElementById("11-RHS1LEFT-selector");
    let RHS1OPERATOR00 = document.getElementById("00-RHS1OPERATOR-selector");
    let RHS1OPERATOR01 = document.getElementById("01-RHS1OPERATOR-selector");
    let RHS1OPERATOR10 = document.getElementById("10-RHS1OPERATOR-selector");
    let RHS1OPERATOR11 = document.getElementById("11-RHS1OPERATOR-selector");
    let RHS1RIGHT00 = document.getElementById("00-RHS1RIGHT-selector");
    let RHS1RIGHT01 = document.getElementById("01-RHS1RIGHT-selector");
    let RHS1RIGHT10 = document.getElementById("10-RHS1RIGHT-selector");
    let RHS1RIGHT11 = document.getElementById("11-RHS1RIGHT-selector");
    let RHS2LEFT = document.getElementById("00-RHS2LEFT-selector");
    let RHS2OPERATOR = document.getElementById("00-RHS2OPERATOR-selector");
    let RHS2RIGHT = document.getElementById("00-RHS2RIGHT-selector");
    let LHS2 = document.getElementById("00-LHS2-selector");
    let OPERATOR2 = document.getElementById("00-operator2-selector");
    if (LHS00.value === input1.value || LHS00.value === input2.value || LHS00.value === input3.value || LHS00.value === input4.value) {
        let msg = 'Inputs of a verilog module cannot be assigned values directly within the module itself.'
        printErrors(msg, LHS00);
        return false;
    }
    if (LHS01.value === input1.value || LHS01.value === input2.value || LHS01.value === input3.value || LHS01.value === input4.value) {
        let msg = 'Inputs of a verilog module cannot be assigned values directly within the module itself.'
        printErrors(msg, LHS01);
        return false;
    }
    if (LHS10.value === input1.value || LHS10.value === input2.value || LHS10.value === input3.value || LHS10.value === input4.value) {
        let msg = 'Inputs of a verilog module cannot be assigned values directly within the module itself.'
        printErrors(msg, LHS10);
        return false;
    }
    if (LHS11.value === input1.value || LHS11.value === input2.value || LHS11.value === input3.value || LHS11.value === input4.value) {
        let msg = 'Inputs of a verilog module cannot be assigned values directly within the module itself.'
        printErrors(msg, LHS11);
        return false;
    }
    if (operator00.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator00);
        return false;
    }
    if (operator01.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator01);
        return false;
    }
    if (operator10.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator10);
        return false;
    }
    if (operator11.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator11);
        return false;
    }

    // checking i/o and function call arguments in test bench
    let input1TB = document.getElementById("input1TB-selector");
    let input2TB = document.getElementById("input2TB-selector");
    let input3TB = document.getElementById("input3TB-selector");
    let input4TB = document.getElementById("input4TB-selector");
    let input5TB = document.getElementById("input5TB-selector");
    let input6TB = document.getElementById("input6TB-selector");
    args_inputs = [input1TB, input2TB, input3TB, input4TB, input5TB, input6TB]
    arr = [input1TB.value, input2TB.value, input3TB.value, input4TB.value, input5TB.value, input6TB.value]

    for (let i = 0; i < arr.length - 1; i++) {
        const currentElement = arr[i];
        const nextElements = arr.slice(i + 1);

        if (nextElements.includes(currentElement)) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, args_inputs[i]);
            return false;
        }
    }

    let arg1 = document.getElementById("argument1-selector");
    let arg2 = document.getElementById("argument2-selector");
    let arg3 = document.getElementById("argument3-selector");
    let arg4 = document.getElementById("argument4-selector");
    let arg5 = document.getElementById("argument5-selector");
    let arg6 = document.getElementById("argument6-selector");
    if (arg5.value === "A" || arg5.value === "B" || arg5.value === "S0" || arg5.value === "S1") {
        let msg = "Output port of a module cannot be connected to a reg type in its test bench."
        printErrors(msg, arg5);
        return false;
    }
    if (arg6.value === "A" || arg6.value === "B" || arg6.value === "S0" || arg6.value === "S1") {
        let msg = "Output port of a module cannot be connected to a reg type in its test bench."
        printErrors(msg, arg6);
        return false;
    }
    if (arg1.value === "Out" || arg1.value === "Cout") {
        let msg = "Incorrect order of module instantiation ports.";
        printErrors(msg, arg1);
        return false;
    }
    if (arg2.value === "Out" || arg2.value === "Cout") {
        let msg = "Incorrect order of module instantiation ports.";
        printErrors(msg, arg2);
        return false;
    }
    if (arg3.value === "Out" || arg3.value === "Cout") {
        let msg = "Incorrect order of module instantiation ports.";
        printErrors(msg, arg3);
        return false;
    }
    if (arg4.value === "Out" || arg4.value === "Cout") {
        let msg = "Incorrect order of module instantiation ports.";
        printErrors(msg, arg4);
        return false;
    }
    return true;
}

export function printObsTable() {
    let arg1 = document.getElementById("argument1-selector").value;
    let arg2 = document.getElementById("argument2-selector").value;
    let arg3 = document.getElementById("argument3-selector").value;
    let arg4 = document.getElementById("argument4-selector").value;
    let arg5 = document.getElementById("argument5-selector").value;
    let arg6 = document.getElementById("argument6-selector").value;
    let input1 = document.getElementById("input1-selector").value;
    let input2 = document.getElementById("input2-selector").value;
    let input3 = document.getElementById("input3-selector").value;
    let input4 = document.getElementById("input4-selector").value;
    let output1 = document.getElementById("output1-selector").value;
    let output2 = document.getElementById("output2-selector").value;
    let LHS00 = document.getElementById("00-LHS-selector").value;
    let LHS01 = document.getElementById("01-LHS-selector").value;
    let LHS10 = document.getElementById("10-LHS-selector").value;
    let LHS11 = document.getElementById("11-LHS-selector").value;
    let RHS1LEFT00 = document.getElementById("00-RHS1LEFT-selector").value;
    let RHS1LEFT01 = document.getElementById("01-RHS1LEFT-selector").value;
    let RHS1LEFT10 = document.getElementById("10-RHS1LEFT-selector").value;
    let RHS1LEFT11 = document.getElementById("11-RHS1LEFT-selector").value;
    let RHS1OPERATOR00 = document.getElementById("00-RHS1OPERATOR-selector").value;
    let RHS1OPERATOR01 = document.getElementById("01-RHS1OPERATOR-selector").value;
    let RHS1OPERATOR10 = document.getElementById("10-RHS1OPERATOR-selector").value;
    let RHS1OPERATOR11 = document.getElementById("11-RHS1OPERATOR-selector").value;
    let RHS1RIGHT00 = document.getElementById("00-RHS1RIGHT-selector").value;
    let RHS1RIGHT01 = document.getElementById("01-RHS1RIGHT-selector").value;
    let RHS1RIGHT10 = document.getElementById("10-RHS1RIGHT-selector").value;
    let RHS1RIGHT11 = document.getElementById("11-RHS1RIGHT-selector").value;
    let RHS2LEFT = document.getElementById("00-RHS2LEFT-selector").value;
    let RHS2OPERATOR = document.getElementById("00-RHS2OPERATOR-selector").value;
    let RHS2RIGHT = document.getElementById("00-RHS2RIGHT-selector").value;
    let LHS2 = document.getElementById("00-LHS2-selector").value;
    let arr = { "A": [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], "B": [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1], "S1": [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1], "S0": [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], "Out": [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0], "Cout": [0, "x", "x", "x", 0, "x", "x", "x", 0, "x", "x", "x", 1, "x", "x", "x",] };
    let body = "";
    let isCorrect = true;
    for (let i = 0; i < 16; ++i) {
        let ALU = {};
        ALU[input1] = arr[arg1][i];
        ALU[input2] = arr[arg2][i];
        ALU[input3] = arr[arg3][i];
        ALU[input4] = arr[arg4][i];
        ALU[output1] = "x";
        ALU[output2] = "x";

        let first="x", second="x";

        if (ALU["S0"] === 0 && ALU["S1"] === 0) {

            if (RHS1OPERATOR00 === "|") {
                if (ALU[RHS1LEFT00] === 1 || ALU[RHS1RIGHT00] === 1)
                    first = 1;
                else if (ALU[RHS1LEFT00] === "x" || ALU[RHS1RIGHT00] === "x")
                    first = "x";
                else
                    first = 0;
            }

            else if (RHS1OPERATOR00 === "&") {
                if (ALU[RHS1LEFT00] === 0 || MUX[RHS1RIGHT00] === 0)
                    first = 0;
                else if (ALU[RHS1LEFT00] === "x" || ALU[RHS1RIGHT00] === "x")
                    first = "x";
                else
                    first = 1;
            }

            else {

                if (ALU[RHS1LEFT00] === "x" || ALU[RHS1RIGHT00] === "x")
                    first = "x";
                else if (ALU[RHS1LEFT00] === ALU[RHS1RIGHT00])
                    first = 0;
                else
                    first = 1;
            }

            if (RHS2OPERATOR === "|") {
                if (ALU[RHS2LEFT] === 1 || ALU[RHS2RIGHT] === 1)
                    second = 1;
                else if (ALU[RHS2LEFT] === "x" || ALU[RHS2RIGHT] === "x")
                    second = "x";
                else
                    second = 0;
            }

            else if (RHS2OPERATOR === "&") {
                if (ALU[RHS2LEFT] === 0 || ALU[RHS2RIGHT] === 0)
                    second = 0;
                else if (ALU[RHS2LEFT] === "x" || ALU[RHS2RIGHT] === "x")
                    second = "x";
                else
                    second = 1;
            }

            else {

                if (ALU[RHS2LEFT] === "x" || ALU[RHS2RIGHT] === "x")
                    second = "x";
                else if (ALU[RHS2LEFT] === ALU[RHS2RIGHT])
                    second = 0;
                else
                    second = 1;
            }
            ALU[LHS00] = first;
            ALU[LHS2] = second;
        }

        else if (ALU["S0"] === 1 && ALU["S1"] === 0) {

            if (RHS1OPERATOR01 === "|") {
                if (ALU[RHS1LEFT01] === 1 || ALU[RHS1RIGHT01] === 1)
                    first = 1;
                else if (ALU[RHS1LEFT01] === "x" || ALU[RHS1RIGHT01] === "x")
                    first = "x";
                else
                    first = 0;
            }

            else if (RHS1OPERATOR01 === "&") {
                if (ALU[RHS1LEFT01] === 0 || MUX[RHS1RIGHT01] === 0)
                    first = 0;
                else if (ALU[RHS1LEFT01] === "x" || ALU[RHS1RIGHT01] === "x")
                    first = "x";
                else
                    first = 1;
            }

            else {

                if (ALU[RHS1LEFT01] === "x" || ALU[RHS1RIGHT01] === "x")
                    first = "x";
                else if (ALU[RHS1LEFT01] === ALU[RHS1RIGHT01])
                    first = 0;
                else
                    first = 1;
            }
            ALU[LHS01] = first;
        }

        else if (ALU["S0"] === 0 && ALU["S1"] === 1) {

            if (RHS1OPERATOR10 === "|") {
                if (ALU[RHS1LEFT10] === 1 || ALU[RHS1RIGHT10] === 1)
                    first = 1;
                else if (ALU[RHS1LEFT10] === "x" || ALU[RHS1RIGHT10] === "x")
                    first = "x";
                else
                    first = 0;
            }

            else if (RHS1OPERATOR10 === "&") {
                if (ALU[RHS1LEFT10] === 0 || MUX[RHS1RIGHT10] === 0)
                    first = 0;
                else if (ALU[RHS1LEFT10] === "x" || ALU[RHS1RIGHT10] === "x")
                    first = "x";
                else
                    first = 1;
            }

            else {

                if (ALU[RHS1LEFT10] === "x" || ALU[RHS1RIGHT10] === "x")
                    first = "x";
                else if (ALU[RHS1LEFT10] === ALU[RHS1RIGHT10])
                    first = 0;
                else
                    first = 1;
            }
            ALU[LHS10] = first;
        }

        else if (ALU["S0"] === 1 && ALU["S1"] === 1) {

            if (RHS1OPERATOR11 === "|") {
                if (ALU[RHS1LEFT11] === 1 || ALU[RHS1RIGHT11] === 1)
                    first = 1;
                else if (ALU[RHS1LEFT11] === "x" || ALU[RHS1RIGHT11] === "x")
                    first = "x";
                else
                    first = 0;
            }

            else if (RHS1OPERATOR11 === "&") {
                if (ALU[RHS1LEFT11] === 0 || MUX[RHS1RIGHT11] === 0)
                    first = 0;
                else if (ALU[RHS1LEFT11] === "x" || ALU[RHS1RIGHT11] === "x")
                    first = "x";
                else
                    first = 1;
            }

            else {

                if (ALU[RHS1LEFT11] === "x" || ALU[RHS1RIGHT11] === "x")
                    first = "x";
                else if (ALU[RHS1LEFT11] === ALU[RHS1RIGHT11])
                    first = 0;
                else
                    first = 1;
            }
            ALU[LHS11] = first;
        }

        let tb = {"Out":"x", "Cout":"x"};
        tb[arg5] = ALU[output1];
        tb[arg6] = ALU[output2];
        if (tb["Out"] !== arr["Out"][i] || tb["Cout"] !== arr["Cout"][i] ) {
            isCorrect = false;
            body += `<tr class="bold-table"><th>${i}</th><th>${arr["A"][i]}</th><th>${arr["B"][i]} </th><th>${arr["S1"][i]}</th><th>${arr["S0"][i]}</th><td class="failure-table"> ${arr["Out"][i]} </td><td class="failure-table"> ${arr["Cout"][i]} </td><td class="failure-table"> ${tb["Out"]}</td><td class="failure-table"> ${tb["Cout"]}</td>`;
        }
        else {
            body += `<tr class="bold-table"><th>${i}</th><th>${arr["A"][i]}</th><th>${arr["B"][i]} </th><th>${arr["S1"][i]}</th><th>${arr["S0"][i]}</th><td class="success-table"> ${arr["Out"][i]} </td><td class="success-table"> ${arr["Cout"][i]} </td><td class="success-table"> ${tb["Out"]}</td><td class="success-table"> ${tb["Cout"]}</td>`;
        }
    }
    document.getElementById("table-body").innerHTML = body;
    if (isCorrect) {
        document.getElementById("result").innerHTML = "<span>&#10003;</span> Success"
        document.getElementById("result").className = "text-success";
    }
    else {
        document.getElementById("result").innerHTML = "<span>&#10007;</span> Fail";
        document.getElementById("result").className = "text-danger";
    }
    return;
}
