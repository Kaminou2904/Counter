console.log('Hello World!');

let count = 0;
const cc= document.querySelector('.cc');

const increment = ()=>{
  count = count + 1 ;
  
  cc.innerHTML = count;
}

const reset = ()=>{
    count = 0;
    cc.innerHTML = 0;
}
