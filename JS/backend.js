const form = document.getElementById("formAluno");
const tabela = document.querySelector("#tabelaAlunos tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const matricula = document.getElementById("matricula").value;
  const curso = document.getElementById("curso").value;
  const email = document.getElementById("email").value;

  const novaLinha = tabela.insertRow();
  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${matricula}</td>
    <td>${curso}</td>
    <td>${email}</td>
  `;

  form.reset();
});