window.addEventListener('DOMContentLoaded', function () {

    function slider() {
        let sliders = document.querySelectorAll('._slider');

        for (let slider of sliders) {
            let items = slider.querySelectorAll('._slider > .grid__item'),
                overlay = slider.parentElement,
                width = 0;

            for (let item of items) {
                width = item.clientWidth;
            }

            let prev = document.createElement('div'),
                next = document.createElement('div');

            function arrows() {

                if (slider.dataset.overlay == 'true') {
                    overlay.insertBefore(prev, slider);
                    overlay.insertBefore(next, slider);
                } else {
                    slider.insertBefore(prev, items[0]);
                    slider.insertBefore(next, items[0]);
                }

                prev.className = 'control _prev';
                next.className = 'control _next';

                let controls = overlay.querySelectorAll('.control');

                for (let control of controls) {
                    control.addEventListener('click', function (event) {
                        event.preventDefault();
                        let target = event.target;
                        let itemShift = 0;

                        let item = slider.querySelectorAll('._slider > .grid__item'),
                            f = item[0],
                            s = item[item.length - 1],
                            cloneF = item[0].cloneNode(true), /*Order instead of cloning?*/
                            cloneS = item[item.length - 1].cloneNode(true);

                        if (target.classList.contains('_next')) {
                            itemShift -= width;
                            item[0].style.marginLeft = itemShift + 'px';
                            setTimeout(function() {
                                slider.insertBefore(cloneF, null);
                                slider.removeChild(f);
                            }, 200);
                        } else if (target.classList.contains('_prev')) {
                            itemShift -= width;
                            slider.insertBefore(cloneS, f);
                            cloneS.style.marginLeft = itemShift + 'px';
                            setTimeout(function () {
                                cloneS.style.marginLeft = 0 + 'px';
                                slider.removeChild(s);
                            }, 20);
                        } else {
                            return false;
                        }
                    })
                }

                prev.innerHTML = '&#8592;';
                next.innerHTML = '&#8594;';
            }

            arrows();

        }

    }


    slider();

});


