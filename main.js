const form = document.getElementById('agenda-contatos');
console.log(form);
linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();
    AdicionaContatos();
})

function AdicionaContatos(){
    const nomeContato = document.getElementById('nome-contato');
    const telContato = document.getElementById('telefone-contato');
    let linha = '';

        linha +='<tr>';
        linha += `<td> ${nomeContato.value}</td>`;
        linha += `<td> ${telContato.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;

}