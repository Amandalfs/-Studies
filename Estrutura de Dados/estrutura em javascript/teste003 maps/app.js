const resultData = new Map();

resultData.set("average", 1.53);
resultData.set("lastResult", null);

const Germany = {name: "Germany", population: 82};

resultData.set(Germany, 0.89);

for (const el of resultData) {
    console.log(el);
}

resultData.set("average", 33.89);

console.log(resultData.get("Germany"))
resultData.delete("Germany");
console.log(resultData)