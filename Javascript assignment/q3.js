function groupObjectsBy(arr, key) {
    let groupTitles = new Set(arr.map(ele => ele[key]));
    let res = {};
    for(title of groupTitles) {
        res[title] = arr.filter(ele => ele[key] === title);
    }
    return res;
}

const arr = [
    {
        "channel": "A",
        "name": "shoe"
    },
    {
        "channel": "A",
        "name": "electronics"
    },
    {
        "channel": "B",
        "name": "apparel"
    },
    {
        "channel": "C",
        "name": "electronics"
    }
];

console.log(groupObjectsBy(arr, 'channel'));
