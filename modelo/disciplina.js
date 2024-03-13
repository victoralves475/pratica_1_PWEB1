// 2. Desenvolver a classe Disciplina, contendo como atributos: código, nome e um array de alunos (da classe Aluno) e seus respectivos métodos get e set;

class Disciplina {
    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this.nome = nome;
    }

    get alunos() {
        return this._alunos;
    }

    set alunos(alunos) {
        this._alunos = alunos;
    }
}