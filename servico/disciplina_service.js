// 1. Desenvolver as classes do padrão MVC para Disciplina, assim como fizemos para Aluno: classes DisciplinaRepositorio, DisciplinaServico, DisciplinaControlador. Além dos métodos de CRUD (inserir, pesquisar, atualizar e remover), similar a como foi feito com Aluno, você deve criar o método inserirAlunoNaDisciplina, que receberá um aluno e o colocará no array de alunos da Disciplina

class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(Number(codigo));
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new Disciplina(Number(codigo), nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    inserirAlunoNaDisciplina(codigo, aluno) {
        const disciplina = this.pesquisarPorCodigo(Number(codigo));
        if (disciplina.length === 0) {
            throw new Error('Disciplina não encontrada!');
        }
        disciplina[0].alunos.push(aluno);
    }
}