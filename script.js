`use strict`;
const result = document.querySelector('.result'),
      button = document.querySelector('#clickButton'),
      buttony = document.querySelectorAll('.calc_button--working'),
      clear_button = document.querySelector('#clear');

buttony.forEach(button=>{
    button.addEventListener('click',el=>{
        result.textContent+=el.target.id;
    })
})
clear_button.addEventListener('click',()=>{
    result.textContent='';
})
const calculate = ()=>{
    return new Promise((resolve,reject)=>{
        if (typeof eval(result.textContent) == 'number'){
            resolve(eval(result.textContent));
        }
    })
}


button.addEventListener('click',()=>{
    calculate().then(data=>{
        result.textContent = `${data}`
    })
});