let btn=document.getElementById('btn');
let p=document.querySelector('p');

let arr=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
btn.addEventListener('click',()=>{
    let s='#';
    for(let j=0;j<6;j++){
        let random=Math.floor(Math.random()*arr.length);
        let val=arr[random];
        s+=val;    
    }
    
        p.innerHTML=s;
      document.body.style.backgroundColor=s;
    
})