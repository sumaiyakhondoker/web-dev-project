
const applyBtn = document.getElementById('apply-btn');
applyBtn.setAttribute('disabled', true)
const allBtn = document.getElementsByClassName('Economy');
for(const btn of allBtn){
    btn.addEventListener('click', function(e){
      

        const seat = e.target.innerText;
        const className = e.target.classList[1];
        const price = getConvertedValue('price');
        


        const selectedTicketContainer = document.getElementById('selected-ticket-container');
 
        const firstSeatCount = getConvertedValue('seat-number') + 1;
        
        
        if(firstSeatCount > 4){
            alert('You have already booked 4 seats.');
            return;
        }
        
        
       


        btn.style.backgroundColor = '#1DD100';
        btn.style.color = 'white'
        

        const seatLeft = getConvertedValue('seat-left');
          document.getElementById('seat-left').innerText = seatLeft - 1;
;

        const seatNum = getConvertedValue('seat-number');
         const updateSeatNum = document.getElementById('seat-number').innerText = seatNum + 1;
         if(updateSeatNum === 4){
            applyBtn.removeAttribute('disabled')

        }





        
        
        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between')

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = seat;
        p2.innerText = className;
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedTicketContainer.appendChild(div);

        getTotalPrice('total-price', price);
        getGrandTotalPrice();
        
        
        
    })
}

function getConvertedValue(id){
    const value = document.getElementById(id).innerText;
    const convertedToInt = parseInt(value);
    return convertedToInt;
}

function getTotalPrice(id, value){
    const price = getConvertedValue(id);
   
    const sum = price + value;
    const totalPrice = document.getElementById(id);
     totalPrice.innerText = sum; 
}

function getGrandTotalPrice(parameter){
    const totalPrice = getConvertedValue('total-price');
    const inputField = document.getElementById('input-field');
    if(parameter == undefined ){
      document.getElementById('grand-total').innerText = totalPrice;
    }
    else{
        const couponValue = document.getElementById('coupon').value;
        if(couponValue.toUpperCase() == 'NEW15'){
          

            
            inputField.classList.add('hidden');
            const discount = totalPrice * 0.15;
       
            document.getElementById('grand-total').innerText = totalPrice - discount;
            
        }
        else if(couponValue.toLowerCase() == 'couple20'){
            inputField.classList.add('hidden');
            const discount = totalPrice * 0.2;
            document.getElementById('grand-total').innerText = totalPrice - discount;
            
            
        }
        else{
            alert('Please enter a valid coupon code.');
            document.getElementById('coupon').value = '';

        }
    }
    
}



