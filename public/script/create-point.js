/* document.querySelector("select[name=uf")
        .addEventListener("change", (event) => {
            console.log("mudei")
        }) */

    

   /*  function populateUfs(){
        const ufSelect = document.querySelector("select[name=uf]")

        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then( states => console.log(states))
    }

    populateUfs(); */

    function populateuf(){

        const ufSelect = document.querySelector("select[name=uf")

        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => {return res.json()})
        .then(  states => { 

            for( let state of states){

            ufSelect.innerHTML = ufSelect.innerHTML + `<option value = ${state.id}>${state.nome}</option>`
            }

        })
    }

    populateuf();


/*         Função de popular o select das cidades
 */        function getCity(event){

        const citySelect = document.querySelector("select[name=city")
        const stateInput = document.querySelector("input[name=state")


        const ufValue = event.target.value;

        const indexOfselectedState = event.target.selectedIndex
        stateInput.value = event.target.options[indexOfselectedState].text

        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

        citySelect.innerHTML = "<option>Selecione a Cidade</option>"; /* zera o valor da cidade quando muda o estado novamente */
        citySelect.disabled = true;

        fetch(url)
        .then(res => {return res.json()})
        .then(  cities => { 

            for( const city of cities){

            citySelect.innerHTML = citySelect.innerHTML + `<option value = ${city.nome}>${city.nome}</option> `
            }

            citySelect.disabled = false;

        })


        }



    document.querySelector("select[name=uf]")
            .addEventListener("change", getCity)


        /* Itens de coleta */
/* pegar todos os "li's" */

const itemsToCollcet = document.querySelectorAll(" .items-grid li")

for(const item of itemsToCollcet ){
    item.addEventListener("click", handleSelectedItem);
}




const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){

    itemLi = event.target

    /* add or remove class with Js */

    itemLi.classList.toggle("selected")


    const itemId = itemLi.dataset.id


    const alreadySelected = selectedItems.findIndex( function(item){
        const itemFound = item == itemId
        return itemFound;
    })
    /* se ja estiver selecionado */
    if (alreadySelected >=0 )  {

        /* tirar da seleção */
        const filteredItems = selectedItems.filter( function(item){
            const itemDifferent = item != itemId
            return itemDifferent
        })

        selectedItems = filteredItems;        

    }else{ /* se não estiver selecionado, adicionar a  seleção */
        selectedItems.push(itemId)
    }
        collectedItems.value = selectedItems;

}



             

            

  

