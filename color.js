let p=document.querySelector('p');
let btn=document.getElementById('btn');
let stringlength=6;

let number=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function getrandomvalue(){
    let randomvalue=Math.floor(Math.random()*number.length);
    let value=number[randomvalue];
    return value;    
}
function takevaluesix(getrandomvalue){
    let stringvalue=0;
      for(let i=0;i<stringlength-1;i++){
        console.log(getrandomvalue);
        
      stringvalue+=getrandomvalue();
      }

      return '#'+stringvalue;
      
}
btn.addEventListener('click',()=>{
   let ans= takevaluesix(getrandomvalue)
    p.innerHTML= ans;  
    document.body.style.backgroundColor=ans;     
})