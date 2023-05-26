var navElements = {
    links : [
        {
            title: 'About me',
            url: '#about_me'
        },
        {
            title: 'My recent work',
            url: '#My_projects'
        },
        {
            title: 'Get my CV',
            url: 'public/documents/CV_davidQuintero_2023.pdf'
        },
        {
            title: 'Contact',
            url: '#contact'
        }
    ],
    render: function(){
        var ulElement = document.createElement("ul"); //crea el elemento ul
        ulElement.classList.add('nav-list-container');//añade clase al elemento
        ulElement.setAttribute('id', 'menu');//añade atributo al elemento 
        this.links.forEach(link => { //ciclo; para cada atributo, haz lo siguiente: 
            var liElement = document.createElement("li");//crea un elemento li
            var aElement = document.createElement("a");//crea un elemento a
            aElement.textContent = link.title; // crea text content 
            aElement.href = link.url; // crea link
            aElement.classList.add("nav-section"); 
            liElement.classList.add('nav-list-section')
            aElement.setAttribute("onclick", "menuColapse()");
            liElement.appendChild(aElement); // introduce en el elemento li al a como su hijo
            ulElement.appendChild(liElement); //introuce al elemento li en ul 
            if(link.title == 'Get my CV'){
                aElement.setAttribute("download", "CV david quintero 2023")
            }
        });
        var navElementsContainer = document.getElementById("nav")
        navElementsContainer.appendChild(ulElement)
    }
}
navElements.render();

const toggleBtn = document.querySelector('#toggle_btn');
const iconMenu = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');
const hmobile = document.getElementById('hmobile');

var menuColapse = () => {
    menu.classList.toggle('active');
    hmobile.classList.toggle('d-fix');
    const isopen = menu.classList.contains('active');
    iconMenu.classList = isopen
    ? 'fa-solid fa-xmark fa-2xl'
    : 'fa-solid fa-bars fa-2xl'
}

const noform = document.getElementById('buttonSend');
var alertNoForm = () =>{
    alert('This section is currently under construction, but feel free to reach out to me through my social media channels.')
}