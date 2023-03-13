//Creo gli array di oggetti per le icone e la select

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

const arraySelect = [
    {
        value: 'none',
        text: 'none'
    },
    {
        value: 'all',
        text: 'all'
    },
    {
        value: 'animal',
        text: 'animal'
    },
    {
        value: 'vegetable',
        text: 'vegetable'
    },
    {
        value: 'user',
        text: 'user'
    }
];

//Creo le variabili utili

const containerDom = document.getElementById('container');
const newSelect = document.createElement('select');
newSelect.id = 'selectType';
const cntDom = document.querySelector('.cnt-select');

//Popolo la select creata

arraySelect.forEach( element => {

    const newOption = document.createElement('option');
    newSelect.appendChild(newOption);

    newOption.value = `${element.value}`
    newOption.innerHTML = `${element.text}`
})

cntDom.append(newSelect)

//Creo l'evento per la comparsa delle icone in base al tipo

newSelect.addEventListener('change', function(){

    containerDom.innerHTML = '';

    if(this.value == 'all'){
        
        arrayAnimals.forEach( Element => {

            createCard(Element);

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

            createCard(Element);
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

            createCard(Element);
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

            createCard(Element);
        })
    }
})

//Creo le funzioni utili per la creazione degli elementi
            
function createDiv(){

    const newDiv = document.createElement('div');
    newDiv.classList.add('icon-cnt');

    return newDiv
}

function createIcon(){
    
    const newI = document.createElement('i');
    return newI

}

function createCard(Element){
    const divDom = createDiv();
    const iconDom = createIcon();

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    Element.color = '#'+ randomColor

    iconDom.classList.add('fa-solid');
    iconDom.classList.add(`${Element.prefix}${Element.name}`);
    iconDom.style.color = `${Element.color}`
    divDom.innerHTML = `<p>${Element.name}</p>`;

    containerDom.append(divDom); 
    divDom.append(iconDom);
    
}







