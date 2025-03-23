// Função que adiciona um novo post à página
function addPost(title, content) {
    // Criação de um novo post
    const post = document.createElement('div');
    post.classList.add('post');
    
    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    // Adiciona o post na lista de posts
    document.getElementById('posts').prepend(post);
}

// Lida com o envio do formulário
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém o título e conteúdo do post
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Se ambos os campos estiverem preenchidos, cria o post
    if (title && content) {
        addPost(title, content);

        // Limpa os campos do formulário após a publicação
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    } else {
        alert("Por favor, preencha ambos os campos.");
    }
});


