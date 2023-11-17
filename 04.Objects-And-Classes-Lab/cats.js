function catsSayMeow(catsInfo) {
    let cats = []

    class Cat {
        constructor (name, age) {
            this.name = name
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (const element of catsInfo) {
        let [name, age] = element.split(" ")
        const newCat = new Cat(name, age)
        newCat.meow()
        cats.push(newCat)
        
    }
    
}

catsSayMeow(['Mellow 2', 'Tom 5'])