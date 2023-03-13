const arrayAnimals = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const containerDom = document.getElementById('container');
const selectDom = document.getElementById('selectType');

selectDom.addEventListener('change', function(){

    containerDom.innerHTML = '';

    if(this.value == 'all'){
        
        arrayAnimals.forEach( Element => {

            containerDom.innerHTML += `<div class='icon-cnt'>
                                      
                                        <i class='fa-solid ${Element.prefix}${Element.name} ${Element.color}'></i>
                                        <div>${Element.name}</div>
            
                                       </div>`;
        })
    }

    if(this.value == 'animal'){
        const animal = arrayAnimals.filter(element => {

            if(element.type == 'animal'){
                return true;
            }else{
                return false;
            }
        })
        animal.forEach( Element => {

            containerDom.innerHTML += `<div class='icon-cnt'>
                                      
                                        <i class='fa-solid ${Element.prefix}${Element.name} ${Element.color}'></i>
                                        <div>${Element.name}</div>
            
                                       </div>`;
        })
    }

    if(this.value == 'vegetable'){
        const vegetable = arrayAnimals.filter(element => {

            if(element.type == 'vegetable'){
                return true;
            }else{
                return false;
            }
        })
        vegetable.forEach( Element => {

            containerDom.innerHTML += `<div class='icon-cnt'>
                                      
                                        <i class='fa-solid ${Element.prefix}${Element.name} ${Element.color}'></i>
                                        <div>${Element.name}</div>
            
                                       </div>`;
        })
    }

    if(this.value == 'user'){
        const user = arrayAnimals.filter(element => {

            if(element.type == 'user'){
                return true;
            }else{
                return false;
            }
        })
        user.forEach( Element => {

            containerDom.innerHTML += `<div class='icon-cnt'>
                                      
                                        <i class='fa-solid ${Element.prefix}${Element.name} ${Element.color}'></i>
                                        <div>${Element.name}</div>
            
                                       </div>`;
        })
    }


})
    /*if(this.value = 'animal'){
        const animal = arrayAnimals.filter(element => {

            if(element.type == 'animal'){
                return true;
            }else{
                return false;
            }
        })
        animal.forEach( Element => {

            containerDom.innerHTML += `<div class='icon-cnt'>
                                      
                                        <i class='fa-solid ${Element.prefix}${Element.name} ${Element.color}'></i>
                                        <div>${Element.name}</div>
            
                                       </div>`;
        })
  
    }
    if(this.value = 'vegetable'){
        const vegetable = arrayAnimals.filter(element => {

            if(element.type == 'vegetable'){
                return true;
            }else{
                return false;
            }
        })
        vegetable.forEach( Element => {

            containerDom.innerHTML += `<div class='icon-cnt'>
                                      
                                        <i class='fa-solid ${Element.prefix}${Element.name} ${Element.color}'></i>
                                        <div>${Element.name}</div>
            
                                       </div>`;
        })
  
    }
    if(this.value = 'user'){
        const user = arrayAnimals.filter(element => {

            if(element.type == 'user'){
                return true;
            }else{
                return false;
            }
        })
        user.forEach( Element => {

            containerDom.innerHTML += `<div class='icon-cnt'>
                                      
                                        <i class='fa-solid ${Element.prefix}${Element.name} ${Element.color}'></i>
                                        <div>${Element.name}</div>
            
                                       </div>`;
        })
  
    }







/*\arrayAnimals.forEach( Element => {

            containerDom.innerHTML += `<div class='icon-cnt'>
                                      
                                        <i class='fa-solid ${Element.prefix}${Element.name} ${Element.color}'></i>
                                        <div>${Element.name}</div>
            
                                       </div>`;
})*/