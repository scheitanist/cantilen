window.addEventListener('DOMContentLoaded', function () {

    function inputs () {
        let input = document.querySelectorAll('.c-input');

        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener('change', function (event) {
                event.preventDefault();
                if (input[i].value !== '') {
                    input[i].classList.add('_filled');
                } else {
                    input[i].classList.remove('_filled');
                }
            })
        }
    }

    inputs();

    function subNavImgWidth() {
        let subNavImg = document.querySelectorAll('._aligner');

        for (let overlay of subNavImg) {
            let img = overlay.getElementsByTagName('img')[0],
                imgWidth = img.clientWidth;

            img.style.left = 'calc(50% - ' + (imgWidth / 2) + 'px)';
        }
    }

    subNavImgWidth();

    function sliderBrands() {
        let sliders = document.querySelectorAll('._slider-b');

        for (let slider of sliders) {
            let sSlider = slider.querySelector('._slider-s'),
                items = sSlider.querySelectorAll('._slider-s > .grid__item'),
                width = 0;

            for (let item of items) {
                width = item.clientWidth;
            }

            // let prev = document.createElement('div'),
            //     next = document.createElement('div');

            function arrows() {
                // slider.insertBefore(prev, items[0]);
                // slider.insertBefore(next, items[0]);
                //
                // prev.className = 'control _prev';
                // next.className = 'control _next';

                let controls = slider.querySelectorAll('.control');

                for (let control of controls) {
                    control.addEventListener('click', function (event) {
                        event.preventDefault();
                        let target = event.target;
                        let itemShift = 0;

                        let item = sSlider.querySelectorAll('._slider-s > .grid__item'),
                            f = item[0],
                            s = item[item.length - 1],
                            cloneF = item[0].cloneNode(true), /*Order instead of cloning?*/
                            cloneS = item[item.length - 1].cloneNode(true);

                        if (target.classList.contains('_next')) {
                            itemShift -= width;
                            item[0].style.marginLeft = itemShift + 'px';
                            setTimeout(function() {
                                sSlider.insertBefore(cloneF, null);
                                sSlider.removeChild(f);
                            }, 200);
                        } else if (target.classList.contains('_prev')) {
                            itemShift -= width;
                            sSlider.insertBefore(cloneS, f);
                            cloneS.style.marginLeft = itemShift + 'px';
                            setTimeout(function () {
                                cloneS.style.marginLeft = 0 + 'px';
                                sSlider.removeChild(s);
                            }, 20);
                        } else {
                            return false;
                        }
                    })
                }

            }

            arrows();

        }

    }

    sliderBrands();

    function searchM() {
        let search = document.querySelector('.mob-subnav__item._search'),
            imgF = search.querySelector('._common'),
            imgS = search.querySelector('._colored'),
            input = search.querySelector('.mob-search');

        search.addEventListener('click', function (event) {
            event.preventDefault();
            let target = event.target;

            console.log(target);

            if (target === imgF) {
                imgF.classList.remove('_show');
                imgF.classList.add('_hide');
                imgS.classList.remove('_hide');
                imgS.classList.add('_show');
                input.classList.remove('_hide');
                input.classList.add('_show');
            } else if (target === imgS) {
                imgF.classList.remove('_hide');
                imgF.classList.add('_show');
                imgS.classList.remove('_show');
                imgS.classList.add('_hide');
                input.classList.remove('_show');
                input.classList.add('_hide');
            }
        })
    }

    searchM();

    function searchShow() {
        let overlay = document.querySelector('.subnav-overlay__inner'),
            searchOnItem = overlay.querySelector('.search__inner-item._first'),
            searchOn = overlay.querySelector('.search__btn'),
            searchOff = overlay.querySelector('.search__close');

        overlay.addEventListener('click', function (event) {

            let target = event.target;

            event.preventDefault();

            if (target === searchOn || target === searchOnItem) {
                overlay.classList.add('_active');
            } else if (target === searchOff) {
                overlay.classList.remove('_active');
            }
        })
    }

    searchShow();

});

$(document).ready(function(){
    var show = true;
    var countbox = ".counters";
    $(window).on("scroll load resize", function(){
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 1200
            });
            show = false;
        }
    });
});