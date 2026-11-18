document.getElementById('currentYear').textContent = new Date().getFullYear();
const input = document.getElementById('input');
const output = document.getElementById('output');
const action = document.getElementById('action');
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click',()=>{input.value=''; output.textContent='';});
action.addEventListener('click',()=>{const m=input.value.trim().match(/^(-?\d+(?:\.\d+)?)\s*([CFK])$/i);if(!m){output.textContent='Enter value and unit, e.g. 25 C';return;}let v=+m[1],u=m[2].toUpperCase(),c=u==='C'?v:u==='F'?(v-32)*5/9:v-273.15;output.textContent=`${c.toFixed(2)} °C | ${(c*9/5+32).toFixed(2)} °F | ${(c+273.15).toFixed(2)} K`;});
