import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };
    
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: 'POST',
            body: data,
        });

        return await res.text();
    };

    const clearFormInputs = () => {
        inputs.forEach(input => input.value = '');
    };

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let statusMessage = document.createElement('p');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if (item.dataset.calc === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                };
            };

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                    statusMessage.classList.add('success');
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                    statusMessage.classList.add('failure');
                })
                .finally(() => {
                    clearFormInputs();

                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                })
        });
    });
};

export default forms;