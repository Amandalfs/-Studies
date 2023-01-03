const pets = [
    {
        name: "rex",
        type: "dog",
        age: 10,
        weight: 6
    },
    {   
        name: "miau",
        type: "cat",
        age: 2,
        weight: 5
    },
    {
        name: "gulp",
        type: "fish",
        age: 1, 
        weight: 1
    },
    {
        name: "Pe de pano",
        type: "horse",
        age: 5, 
        weight: 1
    },
    {
        name: "pupy",
        type: "dog",
        age: 10, 
        weight: 15
    }
] 

const totalWeitght = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0})

console.log(totalWeitght)