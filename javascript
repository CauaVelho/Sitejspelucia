const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImgSrc = document.getElementById('modalImgSrc');
const modalPriceBtn = document.getElementById('modalPriceBtn');

function abrirJanelaFlutuante(nome, preco, imgUrl, descricao, Urlproduto) {
    modalTitle.textContent = nome;
    modalDescription.textContent = descricao;
    modalImgSrc.src = imgUrl;
    modalPriceBtn.textContent = `Ver detalhes - ${preco}`;
    modalPriceBtn.onclick = function() {
        window.location.href=Urlproduto;
    };
    modal.classList.add('active');
}

function fecharJanelaFlutuante(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
}

function forçarFechar() {
    modal.classList.remove('active');
}
