const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector("form");

form.addEventListener('submit', (e) =>{
    let enviarForm = true;

    if (!email.value.trim() || !password.value.trim()) {
        alert("Campos E-mail ou Senha estão vazios!");
        enviarForm = false;
    }
    console.log(email);
    console.log(password);
    if(!enviarForm){
       e.preventDefault(); 
    }

    
});

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `Solicitar acesso ao gNexus`
    modalBodyInput.value = recipient
  })
}