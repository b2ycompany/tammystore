// Exemplo: Função de envio de formulário 
document.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); alert('Mensagem enviada! Entraremos em contato em breve.'); });
// Função para adicionar produto ao carrinho 
document.querySelectorAll('.add-to-cart').forEach(button => { button.addEventListener('click', () => { alert('Produto adicionado ao carrinho!'); }); });
