var contraste =()=>{
    let btn=document.getElementById('btnContraste')
   
    if(btn.value=='0'){
        let elements=document.getElementsByClassName('blanco')
        elements[0].classList.add('negro')
        elements[0].classList.remove('blanco')  
        btn.value=1;
    }
    else if(btn.value=='1'){
        let elements=document.getElementsByClassName('negro')
        elements[0].classList.add('blanco')
        elements[0].classList.remove('negro')  
        btn.value='0'
    }
}

var fuente =()=>{
    let btn = document.getElementById('btnFuente');
    if(btn.value=='0'){
        let elements=document.getElementsByClassName("small-letra")
        const medium=elements.length
        for (let i = 0; i< medium; i++) {
          const element = elements[0];
          element.classList.add("medium-letra")
          element.classList.remove("small-letra")
           
        }
        btn.value='1'
    }
   else if(btn.value=='1'){
        let elements=document.getElementsByClassName("medium-letra")
        const largo=elements.length
        for (let i = 0; i<largo; i++) {
        const element = elements[0];
        element.classList.add("large-letra")
        element.classList.remove("medium-letra")
        }
        btn.value='2'
    }
    else if(btn.value=='2'){
        let elements=document.getElementsByClassName("large-letra")
        const small=elements.length
        for (let i = 0; i< small; i++) {
            const element = elements[0];
            element.classList.add("small-letra")
            element.classList.remove("large-letra")
        }
        btn.value='0'
    }
}
document.getElementById('btnContraste').addEventListener('click',contraste)
document.getElementById('btnFuente').addEventListener('click',fuente)   
