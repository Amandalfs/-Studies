const name = ["Max", "Alice", "Pedro", "Bryan", "Julie "];
// Index starta em zero
console.log(name[3])
console.log(name.length)

function exibir(){
    for (const i of name) {
        console.log(i)
    }
}

name.push("mariana")

const julieIndex = names.findIndex(el => el === "Julie");