const itemsName = document.querySelector('#item-name');

const itemAmount  = document.querySelector('#item-amount');
const addBtn = document.querySelector('#add');
const  clearBtn = document.querySelector("#clear");
const itemList = document.querySelector(".item-list");
const total= document.querySelector(".total")
 

// function to add item 

const addItem = ()=>{
   let currentAmount= [];
     let item = itemsName.value.trim();
     let amount =parseFloat(itemAmount.value.trim());
     if(item.length<= 0 || isNaN(amount)){
        prompt`Please Enter the value first`;
        return;
     }
    
   // creatin a new list item
     li= document.createElement("li");
     li.setAttribute('data-amount', amount);
     li.innerHTML =` ${item}: Rs${amount}`;
     itemList.appendChild(li);

     
            // calculating total amount
      let totalAmount = 0;
      itemList.querySelectorAll('li').forEach((li) => {
          totalAmount += parseFloat(li.getAttribute('data-amount'));
      });

      
      total.innerHTML = `Rs${totalAmount.toFixed(2)}`;
      addToLs(item, amount);
      itemsName.value='';
      itemAmount.value="";
     
}

 // function for clear All 

 const clearAll = ()=>{
   // one way 
   // while(itemList.firstChild){
   //    itemList.removeChild(itemList.firstChild);
   // }

//  second way 
   itemList.innerHTML= '';

   localStorage.clear();

   total.innerHTML =`0.00`;
 }

//  function for adding the item to the local storage 

const addToLs = (item , amount)=>{
let items = JSON.parse(localStorage.getItem('items'))|| [];

items.push({item: item, amount: amount});

localStorage.setItem('items', JSON.stringify(items));


}

//  get item from local storage

const itemFromLs = ()=>{
   let items ;
   if(JSON.parse(localStorage.getItem('items')==null)){
items=[];
   }
   else{
      items = JSON.parse(localStorage.getItem('items'))
      items.forEach((item=>{

          
   // creatin a new list item
     li= document.createElement("li");
     li.setAttribute('data-amount', item.amount);
     li.innerHTML =` ${item.item}: Rs${item.amount}`;
     itemList.appendChild(li);

     
            // calculating total amount
      let totalAmount = 0;
      itemList.querySelectorAll('li').forEach((li) => {
          totalAmount += parseFloat(li.getAttribute('data-amount'));
      });

      
      total.innerHTML = `Rs${totalAmount.toFixed(2)}`;
   

      }));

   }

}

// functin for deleting all item from localStorage 

const removeItemFromLs = ()=>{

}
document.addEventListener('DOMContentLoaded',itemFromLs)
addBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click' , clearAll)
