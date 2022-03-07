const images = (parentSelector, imageSelector) => {
    const workSection = document.querySelector(parentSelector),
        imgPopup = document.createElement('div'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.append(imgPopup);

    imgPopup.classList.add('flex-center');
    imgPopup.append(bigImage);

    workSection.addEventListener('click', e => {
        e.preventDefault();

        const target = e.target;

        if (target && target.classList.contains(imageSelector)) {
            imgPopup.classList.add('flex-block');
            document.body.classList.add('modal-open');

            const path = target.parentNode.href;

            bigImage.src = path;
        };

        if (target && target.matches('div.popup')) {
            imgPopup.classList.remove('flex-block');
            document.body.classList.remove('modal-open');
        };
    });
};

export default images;