const headerMenuIcon = document.querySelector('.menu-icon');
const headerMenu = document.querySelector('.menu__body');
    if (headerMenuIcon){
        headerMenuIcon.addEventListener("click", function(e){
            document.body.classList.toggle('_lock')
            headerMenuIcon.classList.toggle('_active');
            headerMenu.classList.toggle("_active");
        });
    };

    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
     if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                if(headerMenuIcon.classList.contains('_active')) {
                    document.body.classList.remove('_lock')
                    headerMenuIcon.classList.remove('_active');
                    headerMenu.classList.remove("_active");
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
     }