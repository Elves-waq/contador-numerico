function contador(){
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let inter = document.getElementById('Intervalo');
    let msg = document.getElementById('msg')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || inter.value.length == 0){
        window.alert("[ERRO] Faltam dados!");
    }else{
       msg.innerHTML = "Contando:"
       let i = Number(inicio.value);
       let f = Number(fim.value);
       let p = Number(inter.value);

       if (p <= 0){
           window.alert("intervalo invalido considere o valor 1");
           p = 1 ;
       }

       if(i < f){
             for(let c = i ; c <= f ; c += p){
            msg.innerHTML += ` ${c} , `;

                }
       
       }else{
           for(let c = i ; c >= f ; c -= p){
               msg.innerHTML += ` ${c},`;

           }
       }
          msg.innerHTML += " Fim."
       
    }
   
      
}