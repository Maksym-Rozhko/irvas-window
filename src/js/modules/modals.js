const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        function showModal() {
            modal.classList.add('show');
            document.body.classList.add('modal-open');
        };

        function closeModal() {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        };

        trigger.forEach(btn => {
            btn.addEventListener('click', e => {
                const target = e.target;

                if (target) {
                    e.preventDefault();
                };
                
                showModal();
            });
        });

        close.addEventListener('click', closeModal);

        modal.addEventListener('click', e => {
            const target = e.target;

            if (target === modal) {
                closeModal();
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