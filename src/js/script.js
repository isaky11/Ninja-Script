const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    addAndRemoveClassButtons(botao)

    addAndRemoveClassCharacters(botao);
  });
});

function addAndRemoveClassButtons(botao) {
  const botaoComSelecionado = document.querySelector(".botao.selecionado");

  botaoComSelecionado.classList.remove("selecionado");

  if (!botao.classList.contains("selecionado")) {
    botao.classList.add("selecionado");
  }
}

function addAndRemoveClassCharacters(botao) {
  const personagemComSelecionado = document.querySelector(
    ".personagem.selecionado"
  );

  personagemComSelecionado.classList.remove("selecionado");

  const idButton = botao.id;

  const personagemParaAbrir = document.getElementById(`personagem-${idButton}`);

  personagemParaAbrir.classList.add("selecionado");
}