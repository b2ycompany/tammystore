// Função para adicionar produto ao carrinho 
document.querySelectorAll('.add-to-cart').forEach(button => { button.addEventListener('click', () => { alert('Produto adicionado ao carrinho!'); }); }); 
// Função para envio do formulário de contato 
document.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); alert('Mensagem enviada! Entraremos em contato em breve.'); }); 
// Função para manter o carrinho com itens (Simulação) 
const cart = []; document.querySelectorAll('.add-to-cart').forEach((button, index) => { button.addEventListener('click', () => { const productName = button.closest('.product-card').querySelector('h3').innerText; const productPrice = button.closest('.product-card').querySelector('p').innerText; cart.push({ name: productName, price: productPrice }); console.log(cart); 
// Para fins de debug, você pode verificar o carrinho no console 
}); });
