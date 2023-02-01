
    let esconderText_btn = document.getElementById('esconderText_btn');

    let esconderText = document.getElementById('esconderText');

    esconderText_btn.addEventListener('click', toggleText);

    function toggleText(){
        esconderText.classList.toggle('contacto_on');
    }