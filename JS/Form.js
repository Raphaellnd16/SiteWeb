var form = document.getElementById("myForm");
var btnSubmit = document.querySelector(".btn_submit"); 

async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);

    btnSubmit.textContent = "Envoi en cours...";
    btnSubmit.disabled = true;

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            btnSubmit.textContent = "Envoyé";
            form.reset();
            setTimeout(() => {
                btnSubmit.textContent = "Envoyer";
                btnSubmit.disabled = false; 
            }, 2000);
        } else {
            response.json().then(data => {
                btnSubmit.textContent = "Erreur"; 
                setTimeout(() => {
                    btnSubmit.textContent = "Envoyer"; 
                    btnSubmit.disabled = false; 
                }, 2000);
            });
        }
    }).catch(error => {
        btnSubmit.textContent = "Erreur"; 
        setTimeout(() => {
            btnSubmit.textContent = "Envoyer"; 
            btnSubmit.disabled = false; 
        }, 2000);
    });
}

form.addEventListener("submit", handleSubmit);
