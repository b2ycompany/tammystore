// Função para adicionar produto ao carrinho 
document.querySelectorAll('.add-to-cart').forEach(button => { button.addEventListener('click', () => { alert('Produto adicionado ao carrinho!'); }); }); 
// Efeito hover nos produtos e categorias 
const productCards = document.querySelectorAll('.product-card'); productCards.forEach(card => { card.addEventListener('mouseenter', () => { card.style.transform = 'scale(1.05)'; card.style.boxShadow = '0 0 15px gold'; }); card.addEventListener('mouseleave', () => { card.style.transform = 'scale(1)'; card.style.boxShadow = 'none'; }); }); const categories = document.querySelectorAll('.category'); categories.forEach(category => { category.addEventListener('mouseenter', () => { category.style.transform = 'scale(1.1)'; category.style.boxShadow = '0 0 15px gold'; }); category.addEventListener('mouseleave', () => { category.style.transform = 'scale(1)'; category.style.boxShadow = 'none'; }); }); 
// Função para envio do formulário de contato 
document.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); alert('Mensagem enviada! Entraremos em contato em breve.'); }); 
// Função para manter o carrinho com itens (Simulação) 
const cart = []; document.querySelectorAll('.add-to-cart').forEach((button, index) => { button.addEventListener('click', () => { const productName = button.closest('.product-card').querySelector('h3').innerText; const productPrice = button.closest('.product-card').querySelector('p').innerText; cart.push({ name: productName, price: productPrice }); console.log(cart); 
// Para fins de debug, você pode verificar o carrinho no console 
}); });
