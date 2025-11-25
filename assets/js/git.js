document.getElementById('input-delete')
.addEventListener('keyup',function(event){
    const text = event.target.value;
    const btnDelete = document.getElementById('btn-delete');
    if(text === 'delete'){
        btnDelete.removeAttribute('disabled');
    }
    else{
        btnDelete.setAttribute('disabled',true);
    }
});