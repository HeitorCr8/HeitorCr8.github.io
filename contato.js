// Lógica para a validação do formulário de contato
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      event.preventDefault();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um email válido.');
      event.preventDefault();
      return;
    }

    alert('Mensagem enviada com sucesso! (Simulação)');
    event.preventDefault(); //Estrutura pronta para integração futura com backend, se necessário.
  });
});
