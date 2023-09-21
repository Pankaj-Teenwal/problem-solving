let table = {
    85: {
        50: 97,
        52: 1.01,
        54: 1.06,
        56: 1.11,
    },

    86: {
        50: 0.94,
        52: 0.98,
        54: 1.02,
    },

    87: {
        50: 0.91,
        52: 0.95,
        54: 0.99,
        56: 1.03,
    },
};

console.log(table[85]);

console.log(table.hasOwnProperty([85]));
console.log("table.hasOwnProperty nested", table[85].hasOwnProperty(50));



const findTableValue = (disctemp, wetBulb) => {
    return table?.[disctemp]?.[wetBulb] || null
}

const findTbleValueV2 = (disctemp, wetBulb) => {
    if (!table.hasOwnProperty([disctemp])) {
        return null
    }

    return table[disctemp][wetBulb] || null
}
console.log(findTbleValueV2(88, 50));