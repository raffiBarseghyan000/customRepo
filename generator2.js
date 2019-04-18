let gen = function* pseudoGen(value) {
    let i = 0;
    while (i < 4) {
        yield value
        value = value * 16807 % 2147483647
        i++
    }
    return 1
}(1)


for(let i of gen) {
    console.log(i)
}
