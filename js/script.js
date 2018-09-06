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

    // function subNavImgWidth() {
    //     let subNavImg = document.querySelectorAll('._aligner');
    //
    //     for (let overlay of subNavImg) {
    //         let img = overlay.getElementsByTagName('img')[0],
    //             imgWidth = img.clientWidth;
    //
    //         img.style.left = 'calc(50% - ' + (imgWidth / 2) + 'px)';
    //     }
    // }
    //
    // subNavImgWidth();

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

    function auth() {
       let auth = document.querySelector('.auth'),
           cont = auth.querySelector('.auth__inner'),
           link = auth.querySelector('.login');

       link.addEventListener('click', function (event) {
           event.preventDefault();
           if (event.target === link && !cont.classList.contains('_visible')) {
               cont.classList.add('_visible');
           } else {
               cont.classList.remove('_visible');
           }
       })
    }

    auth();

    // function catShowType() {
    //     let cat = document.querySelector('.cat__main'),
    //         controlsSection = cat.querySelectorAll('.cat__main-head-item'),
    //         prodList = cat.querySelector('.prod'),
    //         grid = prodList.querySelector('.prod__inner');
    //
    //     console.log(controlsSection);
    //
    //     for (let section of controlsSection) {
    //         let controls = section.querySelectorAll('.cat__main-head-control');
    //
    //         section.addEventListener('click', function (event) {
    //             event.preventDefault();
    //
    //             for (let control of controls) {
    //                 let target = event.target;
    //
    //                 control.classList.remove('_active');
    //
    //                 if (target.classList.contains('_list')) {
    //                     target.classList.add('_active');
    //                     prodList.classList.remove('_tile');
    //                     prodList.classList.add('_list');
    //                     grid.classList.remove('_4');
    //                     grid.classList.remove('_mobile-2');
    //                     grid.classList.add('_mobile');
    //                 } else if (target.classList.contains('_tile')) {
    //                     // control.classList.remove('_active');
    //                     target.classList.add('_active');
    //                     prodList.classList.remove('_list');
    //                     prodList.classList.add('_tile');
    //                     grid.classList.remove('_mobile');
    //                     grid.classList.add('_4');
    //                     grid.classList.add('_mobile-2');
    //                 } else {
    //                     return false
    //                 }
    //             }
    //
    //         });
    //
    //     }
    //
    // }
    //
    // catShowType();

    // function catTabs() {
    //     let overlay = document.querySelector('.d-cat__tabs'),
    //         tabs = document.querySelector('.d-cat__tabs-head'),
    //         tab = overlay.querySelectorAll('.d-cat__tabs-head-item'),
    //         tabContent = overlay.querySelectorAll('.d-cat__tabs-main-text, .d-cat__tabs-main-faq, .d-cat__tabs-main-chars');
    //
    //     function hideTabContent(a) {
    //         for(let i = a; i < tabContent.length; i++) {
    //             tabContent[i].classList.remove('_show');
    //             tabContent[i].classList.add('_hide');
    //         }
    //     }
    //
    //     hideTabContent(1);
    //
    //     function showTabContent(b) {
    //         if (tabContent[b].classList.contains('_hide')) {
    //             hideTabContent(0);
    //             tabContent[b].classList.remove('_hide');
    //             tabContent[b].classList.add('_show');
    //         }
    //     }
    //
    //     tabs.addEventListener('click', function (event) {
    //         let target = event.target;
    //
    //         for (let item of tab) {
    //             item.classList.remove('_active')
    //         }
    //
    //         if (target.classList.contains('d-cat__tabs-head-item')) {
    //             for (let i = 0; i < tab.length; i++) {
    //                 if (target === tab[i]) {
    //                     showTabContent(i);
    //                     tab[i].classList.add('_active');
    //                     break;
    //                 }
    //             }
    //         }
    //     });
    // }
    //
    // catTabs();

});

// $(document).ready(function(){
//     var show = true;
//     var countbox = ".counters";
//     $(window).on("scroll load resize", function(){
//         if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
//         var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
//         var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
//         var w_height = $(window).height();        // Высота окна браузера
//         var d_height = $(document).height();      // Высота всего документа
//         var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
//         if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
//             $(".spincrement").spincrement({
//                 thousandSeparator: "",
//                 duration: 1200
//             });
//             show = false;
//         }
//     });
// });