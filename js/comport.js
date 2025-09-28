const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector("form");

form.addEventListener('submit', (e) =>{
    let enviarForm = true;

    if (!email.value.trim() || !password.value.trim()) {
        alert("Campos E-mail ou Senha estão vazios!");
        enviarForm = false;
    }

    if(!enviarForm){
       e.preventDefault();
       
    }
    else {
        // Se passar na validação, redireciona
        e.preventDefault(); // evita reload automático do form
        window.location.href = "index.html";
    }

    
});

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {

    const button = event.relatedTarget
    
    const recipient = button.getAttribute('data-bs-whatever')
  

    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `Solicitar acesso ao gNexus`
    modalBodyInput.value = recipient
  })
}

