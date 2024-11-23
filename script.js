// Seleciona os elementos
const specialButton = document.getElementById('specialButton');
const hiddenMessage = document.getElementById('hiddenMessage');

// Adiciona evento de clique ao botão
specialButton.addEventListener('click', () => {
    hiddenMessage.classList.toggle('hidden');
});
