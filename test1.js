const bar = () => console.log('bar')

const foo = () => {
    console.log('foo')
    setTimeout(bar, 0)
    await new Promise((resolve, reject) =>
        resolve('should be right after baz, before bar')
    ).then(resolve => console.log(resolve))
    console.log('baz')
}

foo()