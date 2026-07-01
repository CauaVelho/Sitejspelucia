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





// ====================== CARRINHO DE COMPRAS ======================
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Atualiza o número no ícone do carrinho
function atualizarContadorCarrinho() {
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    const cartCounts = document.querySelectorAll('#cart-count');
    cartCounts.forEach(el => {
        el.textContent = totalItens;
    });
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(nome, preco, imgUrl) {
    const itemExistente = carrinho.find(item => item.nome === nome);
    
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({
            nome: nome,
            preco: parseFloat(preco.replace('R$', '').replace(',', '.')),
            img: imgUrl,
            quantidade: 1
        });
    }
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    
    alert(`${nome} adicionado ao carrinho!`);
}

// ====================== GALERIA (mantida) ======================
let currentImageIndex = 0;

function updateGallery() {
    const thumbs = document.querySelectorAll('.thumb');
    if (thumbs.length === 0) return;
    document.getElementById('mainProductImage').src = thumbs[currentImageIndex].src;
    thumbs.forEach((t, i) => t.classList.toggle('active', i === currentImageIndex));
}

function changeImage(i) { currentImageIndex = i; updateGallery(); }
function nextImage() { 
    const thumbs = document.querySelectorAll('.thumb');
    currentImageIndex = (currentImageIndex + 1) % thumbs.length;
    updateGallery();
}
function prevImage() { 
    const thumbs = document.querySelectorAll('.thumb');
    currentImageIndex = (currentImageIndex - 1 + thumbs.length) % thumbs.length;
    updateGallery();
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    atualizarContadorCarrinho();
    updateGallery();
});
