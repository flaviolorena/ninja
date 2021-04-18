//container do texto
const corpo = document.querySelector(".wrapper")
// criar a barrinha
let bar = document.createElement('div');

//estilo da barrinha 
bar.style.height = '3px';
bar.style.width = '0px';
bar.style.backgroundColor = '#ED1E24';
bar.style.borderBottom = '1px solid #FFFFFF';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.zIndex = '9999';
bar.style.transition = '0.5s'


//inserir barra na pagina
document.body.append(bar);

//atualizar a barra na pagina

//verificar movimento do scroll
document.addEventListener('scroll', () => {
    // altura total do corpo
    const alturaCorpo = corpo.offsetHeight
    // pegar posição atual
    const posicaoAtualY = window.pageYOffset
    //regra de 3
    const porcentagemPosicao = posicaoAtualY * 100 / alturaCorpo
    
    console.log(porcentagemPosicao)

    bar.style.width = porcentagemPosicao + "%"
    
})

