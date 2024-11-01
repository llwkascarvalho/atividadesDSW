function mascaraCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
}

function mascaraTelefone(telefone) {
    telefone = telefone.replace(/\D/g, "");
    telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2");
    telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");
    return telefone;
}

document.getElementById("cpf").addEventListener("input", function (event) {
    event.target.value = mascaraCPF(event.target.value);
});

document.getElementById("telefone").addEventListener("input", function (event) {
    event.target.value = mascaraTelefone(event.target.value);
});

document.getElementById("meuForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagemErro = document.getElementById("mensagemErro");

    if (!nome || cpf.length !== 14 || !email.includes("@") || telefone.length !== 15) {
        mensagemErro.textContent = "Por favor, preencha todos os campos corretamente.";
    } else {
        mensagemErro.textContent = "";
        alert("Formulário enviado com sucesso!");
        document.getElementById("meuForm").reset();
    }
});
