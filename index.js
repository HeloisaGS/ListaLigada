//Crie uma lista encadeada em que cada elemento representa uma pessoa.

//Ela precisa conter informações como nome, idade e referência ao filho dela.
//Elemento
class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

//Nó
class No {
    constructor(Pessoa){
        this.Pessoa = Pessoa; //elementos
        this.proximo = null; 
        this.filho = null; //Para fazer referencia ao filho
    }
}

//Criando a lista

class ListaLigada {
    constructor(){
        this.cabeca = null;
    }
    //Função adicionar no fim
    addLast(nome, idade){
        const newPessoa = new Pessoa(nome, idade);
        const newNo = new No(newPessoa);
        if (!this.cabeca) {
            this.cabeca = newNo;
        } else {
            let current = this.cabeca;
            while(current.proximo){
                current = current.proximo
            }
            current.proximo = newNo;
        }
    }
    
    //Função mostrar
    print() {
        let current = this.cabeca;
        while (current) {
            console.log(`Nome: ${current.Pessoa.nome}, Idade: ${current.Pessoa.idade}`);
            if (current.filho){
                console.log(`Filho: Nome ${current.filho.Pessoa.nome}, Idade: ${current.filho.Pessoa.idade}`)
            }
            current = current.proximo;
        }
      }
    
}

//Adicionando elementos a lista
const listaLigada = new ListaLigada();
listaLigada.addLast("Laura", 27);
listaLigada.addLast("Miguel", 23);
listaLigada.addLast("Helena", 32);


//Adicionando um filho aos elementos da lista
listaLigada.cabeca.filho = new No(new Pessoa("João", 2))
listaLigada.cabeca.proximo.filho = new No(new Pessoa("Maria", 3))
listaLigada.cabeca.proximo.proximo.filho = new No(new Pessoa("Lucas", 8))


listaLigada.print();
