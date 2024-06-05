function Aluno(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const Nota1 = parseFloat(document.getElementById('nota1').value);
    const Nota2 = parseFloat(document.getElementById('nota2').value);
    const media = (Nota1 + Nota2) / 2;
    const situacao = media >= 5 ? "Aprovado" : "Reprovado"; 
    const linha = criarLinhaTabela(nome, matricula, Nota1, Nota2, media, situacao);
    adicionarLinhaTabela(linha);
}

function criarLinhaTabela(nome, matricula, Nota1, Nota2, media, situacao) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${Nota1}</td>
        <td>${Nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td>${situacao}</td>
    `;
    return linha;
}

function adicionarLinhaTabela(linha) {
    const tbody = document.querySelector('#tabela tbody');
    tbody.appendChild(linha);
}

document.getElementById('formulario').addEventListener('submit', Aluno);
localStorage.setItem("tabela", JSON.stringify(tabela))
/*function enviar(event){
        event.preventDefault();

        var nome = event.target[0].value
        var matricula = event.target[1].value
        var Nota1 = event.target[2].value
        var Nota2 = event.target[2].value

        console.log({nome, matricula, Nota1, Nota2});

        if(!nome || !matricula || !Nota1 || !Nota2 ){
            alert("Insira os valores obrigatórios!");
            return;
        }
       

        var tr = document.createElement("tr");
        var td_nome = document.createElement("td");
        td_nome.innerHTML = nome;
        var td_matricula = document.createElement("td");
        td_matricula.innerHTML = matricula;
        var td_nota = document.createElement("td");
        td_nota.innerHTML = nota;
        var td_situação = document.createElement("td");
        td_situação.innerHTML = `
            <button>Remover</button>
        `
        if(nota < 5){
            td_nota.style.backgroundColor = "red";
        }
        tr.appendChild(td_nome);
        tr.appendChild(td_matricula);
        tr.appendChild(td_Nota1);
        tr.appendChild(td_Nota2);
        tr.appendChild(td_situação);

        document.querySelector("body > section:nth-child(4) > table > tbody").appendChild(tr);

        var aluno = {nome, nota1, nota2}

        localStorage.setItem("nomeA", JSON.stringify())

    */
