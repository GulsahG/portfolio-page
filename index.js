const projects = document.querySelectorAll('.project');
const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');
const firstProject = document.querySelector('.first');
const lastProject = document.querySelector('.last');
const discord = document.querySelector('#discord');
const instagram = document.querySelector('#instagram');
const codepen = document.querySelector('#codepen');
const github = document.querySelector('#github');

projects.forEach(project => {
    project.classList.contains('first') ? project.classList.add('active')
    : project.classList.add('hidden');
});

nextButtons.forEach(button => {
    const project = button.parentElement.parentElement;
    
    button.addEventListener("click", function(){
        project.classList.toggle('active');
        project.classList.add('hidden');

        let nextProject = project.nextElementSibling ? project.nextElementSibling : firstProject;
        nextProject.classList.toggle('hidden');
        nextProject.classList.add('active');
    });
});

prevButtons.forEach(button => {
    const project = button.parentElement.parentElement;
    
    button.addEventListener("click", function(){
        project.classList.toggle('active');
        project.classList.add('hidden');
        
        let prevProject = project == firstProject ? lastProject : project.previousElementSibling;
        prevProject.classList.toggle('hidden');
        prevProject.classList.add('active');
    });
});

discord.addEventListener("click", function(){
    window.open("https://discord.bio/p/gulsahgenc");
});

instagram.addEventListener("click", function(){
    window.open("https://www.instagram.com/gulshgnc/");
});

github.addEventListener("click", function(){
    window.open("https://github.com/GulsahG/");
});

codepen.addEventListener("click", function(){
    window.open("https://codepen.io/GulsahG/#");
});