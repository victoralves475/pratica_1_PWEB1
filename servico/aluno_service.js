class AlunoService {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        // 1. Altere o código atual para inserir a lógica de negócio: não permitir inserir aluno menor de idade. Em qual camada deveria ter essa alteração?
        if (idade < 18) {
            throw new Error('Aluno menor de idade!');
        }
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length > 0) {
            throw new Error('Aluno já cadastrado!');
        }
        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorio.inserir(alunoNovo);
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula) {
        return this.repositorio.listar().filter(
            aluno => aluno.matricula === matricula);
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    listarMenoresIdade() {
        return this.repositorio.listar().filter(aluno => aluno.idade < 18);
    }
}
