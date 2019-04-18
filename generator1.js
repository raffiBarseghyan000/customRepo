let gen = function* pseudoGen(value) {
    let i = 0;
    while (i < 4) {
        yield value
        value = value * 16807 % 2147483647
        i++
    }
    return 1
}(1)

let i = gen.next();
while(i.done === false) {
    console.log(i.value)
    i = gen.next();
}
