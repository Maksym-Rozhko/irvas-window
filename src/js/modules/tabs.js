const tabs = (parentSelector, tabSelector, contentSelector, activeClass, animatedClass) => {
    const parent = document.querySelector(parentSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => item.classList.remove('show', 'animated', animatedClass));

        tab.forEach(item => item.classList.remove(activeClass));
    };

    function showTabConent(i = 0) {
        content[i].classList.add('show', 'animated', animatedClass);

        tab[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabConent();

    parent.addEventListener('click', e => {
        const target = e.target;

        if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            
            tab.forEach((item, i) => {
                if (target === item || target.parentNode === item) {
                    hideTabContent();
                    showTabConent(i);
                };
            });
        };
    });
};

export default tabs;