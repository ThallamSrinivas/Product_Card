const pos_counters= document.querySelectorAll('.pos_counter')
const neg_counters= document.querySelectorAll('.neg_counter')
let total_items= document.getElementById('total_items')

pos_counters.forEach(counter=>{addevent(counter,1)})
neg_counters.forEach(counter=>{addevent(counter,0)})


function addevent(counter,flag){
    counter.addEventListener('click',function(e){
        let target = e.target.parentElement.querySelector('.item-count') 
        if (flag){
            target.innerText=Number(target.innerText)+1
            total_items.innerText=Number(total_items.innerText)+1
        }
        else{
            if(target.innerText>0){
                total_items.innerText=Number(total_items.innerText)-1
                target.innerText=Number(target.innerText)-1
            }
        }
    })
}
