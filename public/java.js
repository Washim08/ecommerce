function toogleHide(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display != 'none' ){
        para.style.display='none';
    }else{
    para.style.display = 'block';
    }
}
console.log("hello2");

let cart = document.querySelectorAll(".addToCart");
console.log(cart);

let products=[
	{
		name:'Black Suit',
		price:2000,
		inCart:0
	},
	{
		name:'Girl t-shirt',
		price:5000,
		inCart:0
	},
    {
		name:'Blazer',
		price:6000,
		inCart:0
	},
    {
		name:'Blue t-shirt',
		price:500,
		inCart:0
	}


]



for(let i = 0; i<cart.length;i++){

	cart[i].addEventListener('click',()=>{
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}

function totalCost(product){
	let cartCost = localStorage.getItem('totalCost');
	if(cartCost!=null){
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost',cartCost + product.price);
	}else{
		
	localStorage.setItem('totalCost',product.price);
	}
}


function cartNumbers(product){

	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	if(productNumbers)
	{
		localStorage.setItem('cartNumbers',productNumbers+1);
		document.querySelector('.countItem').textContent = productNumbers+1;
	}else{

	


	localStorage.setItem('cartNumbers',1);
	// console.log(document.querySelector('.countItem'));

	document.querySelector('.countItem').textContent = 1;
	}
}

let total=document.querySelector('#total')

total.textContent=localStorage.getItem('totalCost')

