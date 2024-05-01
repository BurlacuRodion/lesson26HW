const count = document.getElementById('counter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

let currentCount = localStorage.getItem('count') ? localStorage.getItem('count') : 0;
count.innerText = currentCount

function changeCount(action) {
    const value = action === 'plus' ? currentCount++ : currentCount--;
    count.innerText = value;
    localStorage.setItem('count', value)
}

plusBtn.addEventListener('click', ()=>{
    changeCount('plus')
})

minusBtn.addEventListener('click',()=>{
    changeCount('minus')
})