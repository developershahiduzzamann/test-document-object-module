document.getElementById('btn-update-title')
.addEventListener('click',function (){
    // console.log('button click')
    const pageTitle = document.getElementById('page-title');
    pageTitle.innerText = 'Update Page Title text';
});

document.getElementById('btn-login')
.addEventListener('click',function(){
    const loginPage = document.getElementById('btn-log');
    loginPage.innerText = 'LogOut'
});

document.getElementById('btn-update')
.addEventListener('click',function(){
    const inputName = document.getElementById('input-name');
    const name = inputName.value
    const nName = document.getElementById('your-name');
    nName.innerText = name;


})