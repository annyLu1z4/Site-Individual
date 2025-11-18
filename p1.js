const botoesErro = document.querySelectorAll('#erro1, #erro2, #erro3');
botoesErro.forEach(botao => {
  botao.addEventListener('click', function() {
    window.location.href = 'errado.html';
  });
});

const botaoCerto = document.getElementById('certo');
botaoCerto.addEventListener('click', function() {
  window.location.href = 'p2.html';
});