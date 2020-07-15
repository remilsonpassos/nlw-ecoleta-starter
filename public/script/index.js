/* pega a tag do botão pesquisar */
const buttonSearch = document.querySelector("#page-home main a")

/* pega a pagina de pesquisa */
const modal = document.querySelector("#modal")

/* pega o botão "X" de fechar na pagina de pesquisa */
const butonClose = document.querySelector("#modal .header a")


/* ouve o evento de click no botão pagina inicial e executa 
a function de remover a class hide da pagina modal */
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})



butonClose.addEventListener("click", () => {
    modal.classList.toggle("hide")

})

