
// Aqui é pra armazenar registro de aula
const records = [];

// Elementos do DOM(HTML)
const listRecords = document.getElementById('records');
const btnAdd = document.getElementById('btn-add')

// renderização da lista
function render() {
    // Isso é para limpar a lista antes de renderizar(para n repetir os itens)
    listRecords.innerHTML = '';

    // Cria um li para cada elemento(tipo um v-for)
    records.forEach((r, index) => {
        // Const para criar a li
        const li = document.createElement('li');
        // Cria uma classe para o li
        li.className = ('record');
        // Cria o conteudo do li
        li.textContent = `${r.title} - ${r.duration} min`;
        //cria um li para cada item do array
        listRecords.appendChild(li);
    });
};

//Função para caso a lista esteja vazia
function empty(){
    listRecords.innerHTML = '<li class="vazio"><img src="assets/img/vazio.webp"><br>A lista esta vazia no momento'
}

// Botao de adicionar itens na lista com prompt e atualizar a lista
btnAdd.addEventListener('click', () => {
    const title = prompt('Insira o titulo da aula');
    // Cancela se o prompt estiver vazio
    if(!title) return 

    const duration = Number(prompt('Duração em minutos(exemplo: 30)'));
    // Cancela se o prompt tiver vazio
    if(!duration) return
    // Faz o push a lista(Um Number não tem trim)
    records.push({ title: title.trim(), duration: duration })
    // Re-renderiza a lista
    render()
})

// Faz uma verificação se a lista esta vazia ou cheia
if(records.length == 0){
    empty()
}else{
    render()
}