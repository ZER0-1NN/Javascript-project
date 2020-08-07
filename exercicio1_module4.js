const checaIdade = (idade => new Promise((resolve, reject) => {
    setTimeout(() => {
        idade >= 18 ? resolve() : reject();
    }, 2000);
}));

checaIdade(17)
    .then(() => console.log("Maior que 18"))
    .catch(() => console.log("Menor que 18"));
