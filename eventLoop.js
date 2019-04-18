(()=> {
    console.log("1");
    setTimeout(()=> console.log("2"), 0);
    new Promise( (resolve, reject) => {
        setTimeout(()=> console.log("3"), 0);
        resolve(Promise.resolve(console.log("4")));
        console.log("5");
        reject()
    }).then(()=> {
        console.log("6")
    })
    console.log("7");

})();