// funções construtoras
function Calculadora() {
    //captura o elemento html e exibe o valor digitado
    this.display = document.querySelector('.display');
    
    //inicia 
    this.inicia = () => { 
        this.getClick();
        this.getEnter();
    };

    // trata a interação com a tecla enter
    this.getEnter = () => {
       document.addEventListener('keypress', e =>{
            if(e.keyCode === 13){
                this.realizaConta();
            }

        })
    }

    // identifica o click do botão da calculadora
    this.getClick = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    // faz a operação  matemática
    this.realizaConta =()=>{
        try {
            const conta = eval(this.display.value);
            if(!conta){
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
        } catch (error) {
            alert('Conta inválida');
            return;
        }
    };

    // exibe o valor clicado no display
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    // limpa o display
    this.clear = () => this.display.value = '';

    // apaga um valor da direita para a  esquerda
    this.del = () => this.display.value = this.display.value.slice(0,-1);

    
}

//cria uma instância do objeto calculadora
const calculadora = new Calculadora();

// roda a função 
calculadora.inicia();