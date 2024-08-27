const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDescriptografar = document.querySelector(".btn-descriptografar");

function btnEcriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    atualizarVisibilidadeBoneco(); // Atualiza a visibilidade do boneco
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptarcriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    atualizarVisibilidadeBoneco(); // Atualiza a visibilidade do boneco
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function atualizarVisibilidadeBoneco() {
    if (mensagem.value.trim() === "") {
        mensagem.classList.remove("ocultar-boneco"); // Mostra a imagem do boneco se não houver texto
    } else {
        mensagem.classList.add("ocultar-boneco"); // Oculta a imagem do boneco se houver texto
    }
}

// Adiciona event listeners aos botões
btnEncriptar.addEventListener("click", btnEcriptar);
btnDescriptografar.addEventListener("click", btnDesencriptarcriptar);




