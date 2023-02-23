/*  Scripts version Movil */ 

const oldBs =  "10px 10px 5px #888888";
const newBoxShadow = "0px 0px 0px black";
const dmImgSha = document.getElementById("img_main");
const buttons = document.querySelectorAll('.btns');

//DarkMode general
function functionTheme() {
  const dmBody = document.body; 
  
  dmBody.classList.toggle("dark-mode"); 
};

//Btn dark mode movil + cambios particular

const btnDm = document.querySelector('#darkbtn');


btnDm.addEventListener('click', () => {
  const btnOn = document.getElementById('mode_on');
  const btnOff = document.getElementById('mode_off');

   if (btnOn.style.display === 'inline-block') {
     btnOn.style.display = 'none';
     btnOff.style.display = 'inline-block';
     dmImgSha.style.boxShadow = oldBs;  
        
     
     buttons.forEach(button => {
       button.classList.add('button');
       button.classList.remove('button-dark-mode');
     });
   } else {
     btnOn.style.display = 'inline-block';
     btnOff.style.display = 'none';    
     dmImgSha.style.boxShadow = newBoxShadow;
 
     buttons.forEach(button => {
       button.classList.add('button-dark-mode');
       button.classList.remove('button');
     });
 
   }
 }); 

 
// Btn dark mode pc 

const btnDmPc = document.querySelector('#darkbtnPc');


btnDmPc.addEventListener('click', () => {
  const btnOnPc = document.getElementById('mode_onPc');
  const btnOffPc = document.getElementById('mode_offPc');
  
 
   if (btnOnPc.style.display === 'inline-block') {
     btnOnPc.style.display = 'none';
     btnOffPc.style.display = 'inline-block';
   } else {
     btnOnPc.style.display = 'inline-block';
     btnOffPc.style.display = 'none';   
    }
 }); 

 
//Modal Sobre Mi 

const modal = document.getElementById("myModal");
const btn = document.getElementById('btnsobreMi');
const span = document.getElementsByClassName('close')[0];



btn.onclick = function() {
  modal.style.display = "block";
  btn.style.display = "none";
}


span.onclick = function() {
  modal.style.display = "none";
  btn.style.display = "block";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    btn.style.display = "block";
  }
}


//formulario de contacto

const openFormBtn = document.querySelector('#openFormBtn');
const myForm = document.querySelector('#myForm');
const contact = document.querySelector('#contact');
const reemplazar = document.querySelector('#reemplazo');
const cancelar = document.getElementById('cancel')

openFormBtn.addEventListener('click', () => {
  if (myForm.style.display === 'none') {
    myForm.style.display = 'block';
    reemplazar.style.display = 'none';
  } else {
    myForm.style.display = 'none';
    
  }
});


/* Contact btn*/

contact.addEventListener('click', () => {
  if (myForm.style.display === 'block') {
    myForm.style.display = 'none';
    reemplazar.style.display = 'block';
  } else {
    myForm.style.display = 'block';
    reemplazar.style.display = 'none';
  }
}); 

/* Cancel btn */

cancelar.addEventListener('click', () => {
    myForm.style.display = 'none';
    reemplazar.style.display = 'block';
})

/* Collapsible para experiencia y estudios*/

const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
