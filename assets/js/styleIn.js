const sectionAll = document.querySelectorAll('section');
for(const section of sectionAll){
    section.style.border ='2px solid red';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '10px'
}
const country = document.getElementById('country');
country.style.backgroundColor = 'yellow';