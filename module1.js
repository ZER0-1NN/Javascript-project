// 1º exercício
const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

const printEndereco = ((end) => {
    const {rua, numero, bairro, cidade, uf} = end;

    return console.log(`O usuário mora em ${cidade}/${uf}, no bairro ${bairro}, na rua "${rua}" com nº ${numero}.`)
});

// 2º exercício
const pares = ((x, y) => {
    for (var c=x; c<y; c++) {
        c%2 === 0 ? console.log(c) : null;
    }
})

pares(32, 321);

// 3º exercício
const temHabilidade = (skills => skills.indexOf('Javascript') !== -1 ? console.log(true) : console.log(false));

temHabilidade(["Javascript", "ReactJS", "React Native"]); // true ou false

// 4º exercício
const experiencia = (anos => {
    if (anos >= 0 && anos <= 1) console.log("Iniciante")
    else if (anos > 1 && anos<=3) console.log("Intermediario")
    else if (anos > 3 && anos<=6) console.log("Avançado")
    else if (anos >= 7) console.log("Jedi Master")
});

experiencia(1);

//5º exercício
const printUsers = (users => {
    for (var user of users) {
        console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}`);
    }
});

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

printUsers(usuarios);
