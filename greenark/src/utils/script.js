const loginAdmin = "usuario_admin";
const senhaAdmin = "senha_admin123";

export const validarLogin = (event) => {
    event.preventDefault();

    const login = document.getElementById("Login").value;
    const senha = document.getElementById("Senha").value;

    if (login === loginAdmin && senha === senhaAdmin) {
        alert("Logado com sucesso!");
        window.location.href = "./Home-usuario/usuario.html";
    } else {
        alert("Senha errada, tente novamente.");
    }
};

export const autoCarrossel = (textos) => {
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % textos.length;
        selecionar(textos[currentIndex]);
    }, 4000);
};

export const selecionar = (id) => {
    document.querySelectorAll('.conteudo').forEach(item => {
        item.classList.remove('ativo');
    });

    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.classList.remove('dot-ativo');
    });

    document.getElementById(id).classList.add('ativo');
    document.getElementById(`dot-${id}`).classList.add('dot-ativo');

    const numeroId = id.replace('texto', '');
    document.getElementById(`imagem${numeroId}`).classList.add('ativo');
};