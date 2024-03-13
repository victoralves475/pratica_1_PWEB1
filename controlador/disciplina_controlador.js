// 1. Desenvolver as classes do padrão MVC para Disciplina, assim como fizemos para Aluno: classes DisciplinaRepositorio, DisciplinaServico, DisciplinaControlador. Além dos métodos de CRUD (inserir, pesquisar, atualizar e remover), similar a como foi feito com Aluno, você deve criar o método inserirAlunoNaDisciplina, que receberá um aluno e o colocará no array de alunos da Disciplina

class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaServico();
    }

    inserir() {
        const codElemento = document.querySelector("#codDisciplina");
        const nomeElemento = document.querySelector("#disciplina");
        const listaDisciplinaElemento = document.querySelector("#listaDisciplinas");

        const disciplinaInserida = this.servico.inserir(codElemento.value, nomeElemento.value);
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinaElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplinaInserida, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Cod: ${disciplinaInserida.codigo} - Disciplina: ${disciplinaInserida.nome}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

    pesquisarPorCodigo(codigo) {
        return this.servico.pesquisarPorCodigo(codigo);
    }

    remover(codigo) {
        this.servico.remover(codigo);
    }

    listar() {
        return this.servico.listar();
    }

    inserirAlunoNaDisciplina() {
        const codElemento = document.querySelector("#codDisciplinaPsq");
        const nomeElemento = document.querySelector("#nomeAlunoPsq");
        const listaDisciplinaElemento = document.querySelector("#listaAlunosDisciplina");
        const disciplinaNomeElemento = this.servico.pesquisarPorCodigo(Number(codElemento.value))[0].nome;
        this.servico.inserirAlunoNaDisciplina(Number(codElemento.value), nomeElemento.value);
        this.inserirAlunoNaDisciplinaNoHtml(disciplinaNomeElemento, nomeElemento.value, listaDisciplinaElemento);
    }

    inserirAlunoNaDisciplinaNoHtml(disciplina, aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Cadastro Efetuado: aluno: ${aluno} - disciplina: ${disciplina}`;
        elementoDestino.appendChild(alunoElemento);
        }

}   