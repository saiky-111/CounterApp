const count= document.getElementById('count');
const add= document.getElementById('add');
const reset= document.getElementById('reset');

add.addEventListener('click',() => {
count.innerHTML++;
}
);

reset.addEventListener('click',() => {
    count.innerHTML = 0;
    }
    );
    
