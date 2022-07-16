

// Button back to top
function subirTela(){
   window.scrollTo({
       top: 0,
       behavior: 'smooth'
   })
}

// MenuToggle
function menuMobile(){
   const doc = document.getElementById('mobileArea')

    if(doc.style.display == 'none' ){
        doc.style.display = 'flex'
       
    }
    else{
        doc.style.display = 'none' 
    }

    if(doc.style.display == 'flex'){
        document.documentElement.style.overflow = 'hidden';
       
       
    }
    else{
        document.documentElement.style.overflow = 'auto';
        
    }


}
function myFunction(x) {
    x.classList.toggle("change");
  }




