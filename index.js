(function () {
    const form = document.querySelector('#form-text');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const msg = document.querySelector('#msg')
        const feedback = document.querySelector('.feedback')
        const msgContent = document.querySelector('.content')

        if (msg.value === '') {
            feedback.classList.add('show');
            setTimeout(() => {
                feedback.classList.remove('show')
            }, 4000)
        }
        else {
            msgContent.textContent = msg.value;
            msg.value = '';
        }
    })
})()