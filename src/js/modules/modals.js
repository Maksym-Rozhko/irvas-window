const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        trigger.forEach(btn => {
            btn.addEventListener('click', e => {
                const target = e.target;

                if (target) {
                    e.preventDefault();
                };
    
                modal.classList.add('show');
                document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', e => {
            const target = e.target;

            if (target === modal) {
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
            }
        });
    };

    function showModalByTime(modalSelector, time) {
        const modal = document.querySelector(modalSelector);
        setTimeout(() => {
            modal.classList.add('show');
            document.body.classList.add('modal-open');
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000 );
};

export default modals;