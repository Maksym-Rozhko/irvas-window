const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal');

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

                windows.forEach(item => item.classList.remove('show'));
                
                showModal();
            });
        });

        close.addEventListener('click', () => {
            closeModal();
            windows.forEach(item => item.classList.remove('show'));
        });

        modal.addEventListener('click', e => {
            const target = e.target;

            if (target === modal && closeClickOverlay) {
                windows.forEach(item => item.classList.remove('show'));
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
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000 );
};

export default modals;