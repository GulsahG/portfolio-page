const projects = document.querySelectorAll('.project');
const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');
const firstProject = document.querySelector('.first');
const lastProject = document.querySelector('.last');

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


