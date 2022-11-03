new Promise((resolve, reject) => {

    let a = 10
    let b = 20

    resolve(a + c) // b é necessário estar no lugar de C para o código rodar direito

}).then(res => {
    console.log("RESULTADO: ",res)
}).catch((reject)=>{
    console.log("Erro!", reject)
}).finally(() => {
    console.log('Fim da execução!');
})