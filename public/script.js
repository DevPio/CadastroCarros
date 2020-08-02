const input = document.querySelector('input')

const corpo = document.querySelector('body')

input.addEventListener('click',()=>{
    
    if(input.value == 'BUSCA por um veículo'){
        input.value = ''
    }
})

corpo.addEventListener('click',(e)=>{
    if(e.target != input){
        input.value = 'BUSCA por um veículo'
    }
})



///modal 



const modal = document.querySelector('.modal-overlay')

const bt = document.querySelector('#bt')

bt.addEventListener('click',()=>{
    modal.classList.add('ativo')
})

const btf = document.querySelector('.btf')



btf.addEventListener('click',(e)=>{
    e.preventDefault()
    modal.classList.remove("ativo")
})



const cards = document.querySelectorAll('.card')

let desc = document.querySelector('.descInt')


for(let card of cards){


    card.addEventListener('click',()=>{

      let marca =  card.querySelector('#marca').innerText
      let veiculo = card.querySelector('#veiculo').innerText
      let ano = card.querySelector('#ano').innerText
      let id = card.querySelector('#id').value

    
      const ht = `

      <h4>Detalhes</h4>
      <div class="cartDes">
      <input type="hidden" class="edit" name="id"  value="${id}">
          <h4>${marca}</h4>
          <div class="marc">
          <h6>Marca</h6>  
          <h6>Ano</h6>
          <p>${veiculo}</p>
          <p>${ano}</p>
      
      
          
          </div>
      
      </div>
      <div class="buts">
            
                <button id="btMe" onclick="myFunction()" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                    Editar
                </button>
      
      
      `


      desc.innerHTML = ht



       

    })





}



const btEd = document.querySelectorAll('.card')




function myFunction(){
    let inp = document.querySelector('.edit').value



    window.location.href = `http://localhost:8080/index/${inp}`   
    


  



}

for(let bt of btEd){

    bt.addEventListener('click',()=>{

        const inp = bt.querySelector('input').value
        const btAm = document.querySelector('#btA')
       

    })



}


function modalS(){

        

}

