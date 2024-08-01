// Adicionar evento de click nos links do menu
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Adicionar evento de envio no formulário
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensagem = document.querySelector('textarea').value;
    console.log(`Nome: ${nome}, E-mail: ${email}, Mensagem: ${mensagem}`);
});