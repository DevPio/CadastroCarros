const fs = require('fs')

const dadosC = require('./listac.json')


const lista = require('./listac.json')



exports.id = (req,res)=>{

    id = req.query.id

    const idv = lista.carros.find((item)=>{

        return item.id == id


    })

    if(!idv){

        return res.send('Instrutor não encontrado')

    }


    return res.render('detalhes',{idv:item})


}

exports.ex = (req,res)=>{

    let {id} = req.body

    let index = 0;
    const founid = dadosC.carros.find((item,pos)=>{

        if(item.id == id){

            index = pos
            return item
        }


    })
   

    lista.carros.splice(index,1)


    fs.writeFile('./listac.json', JSON.stringify(lista,null,2),(erro,resposta)=>{


        if(erro){

          return res.send('Deu erro')

        }

        return res.redirect("index")

    })





}



exports.put = (req, res) =>{

    let {id} = req.body

    let index = 0;
    const founid = dadosC.carros.find((item,pos)=>{

        if(item.id == id){

            index = pos
            return item
        }


    })
   
    let inst = {

        ...founid,
        ...req.body

    }
   

    lista.carros[index] = inst


    fs.writeFile('./listac.json', JSON.stringify(lista,null,2),(erro,resposta)=>{


        if(erro){

          return res.send('Deu erro')

        }

        return res.redirect("index")

    })
   








}










exports.show = (req, res)=>{

    let {id} = req.params

    const founid = dadosC.carros.find((item)=>{

        return item.id == id


    })
   
    if(!founid){
        
        return res.send("Instrutor não encontrado")

    }

        return res.render('layout',{item:founid,lista})

}
















exports.post = (req,res)=>{

    const valores = Object.keys(req.body)

    for(let valor of valores){

        if(req.body[valor]==""){

            return res.send('Preencha todos os campos')
                
        }



    }
   const {veiculo, marca,ano,vendido } = req.body
    let id  = lista.carros.length +1
    
    lista.carros.push(
        {
            id,
            ...req.body
            

        }

        
        )

    fs.writeFile('./listac.json', JSON.stringify(lista,null,2),(erro,resposta)=>{


        if(erro){

          return res.send('Deu erro')

        }

        return res.redirect('index')

    })
   
    


    
}