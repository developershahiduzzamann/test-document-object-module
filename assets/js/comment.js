document.getElementById('btn-post')
.addEventListener('click',function(){
    const textArea = document.getElementById('text-post');
    const newComment = textArea.value;

    const commentContainer = document.getElementById('parent-container');

    const commentElement = document.createElement('p')
    commentElement.classList.add('comment');
    commentElement.innerText= newComment;
    commentContainer.appendChild(commentElement);

    textArea.value = '';


});