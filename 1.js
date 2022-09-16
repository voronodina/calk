let a = '';
let b = '';
let sing = '';
let finish = false;

const sufra = ['0', '1','2', '3','4','5','6','7','8','9','.'];
const znak = ['-','+','*','/'];

const vuvud = document.querySelector('.dis p');



function clearAll() {
    a = '';
    b = '';
    sing = '';
    finish = false;
    vuvud.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;


document.querySelector('.boton').onclick = (Event) =>{
    if(!Event.target.classList.contains('coo')) return;
    if(Event.target.classList.contains('as')) return;
    if(Event.target.classList.contains('pm')) return;
    if(Event.target.classList.contains('pr')) return;

    vuvud.textContent = '0';

    const key = Event.target.textContent;

    if (sufra.includes(key)) {
        if(b === '' && sing ===''){
        a += key;
        
        vuvud.textContent = a;
        }
        else if (a!== '' && b!=='' && finish ){
            b = key
            finish = false
            vuvud.textContent = b

        }
        else {
            b += key
            vuvud.textContent = b

        }
        console.log(a, b , sing);
        return
    }

    if (znak.includes(key)) {
        sing = key;
        
        vuvud.textContent = sing;
        return;
    }
   
    if(key === '=') {
        if (b === '') b = a ;
        switch(sing){
            case '+':
                a = (+a) + (+b)
                break;
             case '-':
                a = a - b
                break;
             case '*':
                a = a * b
                break;
            case '/':
                if (b === '0'){
                    vuvud.textContent = 'ထ';
                    a = ' ';
                    b = '';
                    sing = '';
                    return
                }
                 a = a / b 
                break;
        }
        finish = true
        vuvud.textContent = a
        console.log(a, b , sing)

    }

}
function zminaZnaka(){
    a = - a 
    b = - b
    
    vuvud.textContent = a , b , znak;

}
document.querySelector('.pm').onclick = zminaZnaka;


