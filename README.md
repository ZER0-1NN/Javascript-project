# Javascript-project

## Exercícios: Módulo 01

#### 1º exercício

Crie uma função que dado o objeto a seguir:

    var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    };

Retorne o seguinte conteúdo:

    O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.

#### 2º exercício

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

    function pares(x, y) {
        // código aqui
    }
    
    pares(32, 321);
    
#### 3º exercício

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

    function temHabilidade(skills) {
        // código aqui
    }
    var skills = ["Javascript", "ReactJS", "React Native"];
    temHabilidade(skills); // true ou false

Dica: para verificar se um vetor contém um valor, utilize o método indexOf.

#### 4º exercício

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

    function experiencia(anos) {
        // código aqui
    }
    var anosEstudo = 7;
    experiencia(anosEstudo);
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master
    
#### 5º exercício

Dado o seguinte vetor de objetos:

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
    
Escreva uma função que produza o seguinte resultado:

    O Diego possui as habilidades: Javascript, ReactJS, Redux
    O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join.


## Exercícios: Módulo 04

#### 1º exercício

Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2 segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de idade o resultado deve cair no .then, caso contrário, no .catch.

    function checaIdade(idade) {
      // Retornar uma promise
    }
    checaIdade(20)
      .then(function() {
        console.log("Maior que 18");
      })
      .catch(function() {
        console.log("Menor que 18");
      });
 
#### 2º exercício

Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/diego3g/repos

Basta alterar "diego3g" pelo nome do usuário.

    <input type="text" name="user">
    <button onclick="">Adicionar</button>
    
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

    <ul>
       <li>repo1</li>
       <li>repo2</li>
       <li>repo3</li>
       <li>repo4</li>
       <li>repo5</li>
    </ul>

#### 3º exercício
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar da lista apenas enquanto a requisição estiver acontecendo:

    <li>Carregando...</li>

Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.

Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.
