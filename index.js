const projects = document.querySelectorAll('.project');
const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');
const firstProject = document.querySelector('.first');
const lastProject = document.querySelector('.last');
const discord = document.querySelector('#discord');
const instagram = document.querySelector('#instagram');
const codepen = document.querySelector('#codepen');
const github = document.querySelector('#github');
const secondLine = document.querySelector('.second-line');
const firstLine = document.querySelector('.first-line');
let projectImgs = document.querySelectorAll('.project-img');

// fixes the typewriter effect animations
window.setTimeout(() => {
    secondLine.style.display = "block";
    firstLine.style.border = "0vw solid black";
}, 2000);

// makes the next project active on button click
nextButtons.forEach(button => {
    const project = button.parentElement.parentElement;

    button.addEventListener("click", function () {
        project.classList.toggle('active');
        project.classList.add('hidden');

        let nextProject = project.nextElementSibling ? project.nextElementSibling : firstProject;
        nextProject.classList.toggle('hidden');
        nextProject.classList.add('active');
    });
});

// makes the prev project active on button click
prevButtons.forEach(button => {
    const project = button.parentElement.parentElement;

    button.addEventListener("click", function () {
        project.classList.toggle('active');
        project.classList.add('hidden');

        let prevProject = project == firstProject ? lastProject : project.previousElementSibling;
        prevProject.classList.toggle('hidden');
        prevProject.classList.add('active');
    });
});

/* opens the related social medias on click */
discord.addEventListener("click", function () {
    window.open("https://discord.bio/p/gulsahgenc");
});

instagram.addEventListener("click", function () {
    window.open("https://www.instagram.com/gulshgnc/");
});

github.addEventListener("click", function () {
    window.open("https://github.com/GulsahG/");
});

codepen.addEventListener("click", function () {
    window.open("https://codepen.io/GulsahG/#");
});


// visits the project link on image click
projectImgs.forEach(image => {
    image.addEventListener("click", function () {
        let targetElement = image.parentElement.parentElement.children[1].firstElementChild.firstElementChild;
        const projectLink = targetElement.getAttribute("href");
        window.open(projectLink);
    });
});
