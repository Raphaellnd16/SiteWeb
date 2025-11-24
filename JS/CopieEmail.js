function copierEmail(email) {
    const inputTemp = document.createElement("input");
    inputTemp.value = email;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);

    const message = document.getElementById("message-copie");
    message.textContent = "Adresse e-mail copiée";

    // Masque le message après 2 secondes
    setTimeout(() => {
        message.textContent = "";
    }, 2000);
}
