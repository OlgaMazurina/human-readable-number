module.exports = function toReadable(number) {
    let str = "";
    let arr = [];
    let strN = number.toString();
    for (let i = 0; i < strN.length; i++) {
        if (strN[i] == 0) {
            arr.push("zero");
        } else if (strN[i] == 1) {
            arr.push("one");
        } else if (strN[i] == 2) {
            arr.push("two");
        } else if (strN[i] == 3) {
            arr.push("three");
        } else if (strN[i] == 4) {
            arr.push("four");
        } else if (strN[i] == 5) {
            arr.push("five");
        } else if (strN[i] == 6) {
            arr.push("six");
        } else if (strN[i] == 7) {
            arr.push("seven");
        } else if (strN[i] == 8) {
            arr.push("eight");
        } else {
            arr.push("nine");
        }
    }

    if (arr.length == 4) {
        str += `${arr[0]} thousand `;
        arr.splice(0, 1);

        strN = strN.slice(1);
    }

    if (arr.length == 3) {
        if (strN[0] == 0) {
            arr.splice(0, 1);
            strN = strN.slice(1);
        } else {
            str += `${arr[0]} hundred `;
            arr.splice(0, 1);
            strN = strN.slice(1);
        }
    }

    if (arr.length == 2) {
        if (strN[0] == "0") {
        } else if (strN[0] == 1) {
            if (strN[1] == 0) {
                str += "ten ";
                return str.trim();
            } else if (strN[1] == 1) {
                str += "eleven ";
                return str.trim();
            } else if (strN[1] == 2) {
                str += "twelve ";
                return str.trim();
            } else if (strN[1] == 3) {
                str += "thirteen ";
                return str.trim();
            } else if (strN[1] == 5) {
                str += "fifteen ";
                return str.trim();
            } else if (strN[1] == 8) {
                str += "eighteen ";
                return str.trim();
            } else {
                str += `${arr[1]}teen `;
                return str.trim();
            }
        } else if (strN[0] == 2) {
            str += "twenty ";
        } else if (strN[0] == 3) {
            str += "thirty ";
        } else if (strN[0] == 4) {
            str += "forty ";
        } else if (strN[0] == 5) {
            str += "fifty ";
        } else if (strN[0] == 8) {
            str += "eighty ";
        } else {
            str += `${arr[0]}ty `;
        }

        if (strN[1] !== "0") {
            str += `${arr[1]}`;
            return str.trim();
        } else {
            return str.trim();
        }

        // arr.splice(0, 1);
        // str = str.slice(1);
    }

    if (arr.length == 1) {
        str += `${arr[0]}`;
    }

    return str.trim();
};
