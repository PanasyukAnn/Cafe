$("body").on("click", ".topMenu a", function(){
    var idtop = $($(this).attr("href")).offset().top;
    $('html,body').animate({scrollTop: idtop}, 800);
    return false;
});

var header = $(".navigation");

$(document).ready(function () {

    var scrollPrev = 0; // Предыдущее значение скролла

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop(); // Высота скролла в px
        var firstScrollUp = false; // Параметр начала сколла вверх
        var firstScrollDown = false; // Параметр начала сколла вниз

        // Если скроллим
        if ( scrolled > 0 ) {
            // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
            if ( scrolled > scrollPrev ) {
                firstScrollUp = false; // Обнуляем параметр начала скролла вверх
                // Если меню видно
                if ( scrolled < header.height() + header.offset().top ) {
                    // Если только начали скроллить вниз
                    if ( firstScrollDown === false ) {
                        var topPosition = header.offset().top; // Фиксируем текущую позицию меню
                        header.css({
                            "top": topPosition + "px"
                        });
                        firstScrollDown = true;
                    }
                    // Позиционируем меню абсолютно
                    header.css({
                        "position": "absolute"
                    });
                    // Если меню НЕ видно
                } else {
                    // Позиционируем меню фиксированно вне экрана
                    header.css({
                        "position": "fixed",
                        "top": "-" + header.height() + "px"
                    });
                }

                // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
            } else {
                firstScrollDown = false; // Обнуляем параметр начала скролла вниз
                // Если меню не видно
                if ( scrolled > header.offset().top ) {
                    // Если только начали скроллить вверх
                    if ( firstScrollUp === false ) {
                        var topPosition = header.offset().top; // Фиксируем текущую позицию меню
                        header.css({
                            "top": topPosition + "px"
                        });
                        firstScrollUp = true;
                    }
                    // Позиционируем меню абсолютно
                    header.css({
                        "position": "absolute"
                    });
                } else {
                    // Убираем все стили
                    header.removeAttr("style");
                }
            }
            // Присваеваем текущее значение скролла предыдущему
            scrollPrev = scrolled;
        }
    });
});

var today = new Date();
var todayDate = today.getDate();
var todayMonth = today.getMonth() + 1;
var textForDate = document.getElementById('date');
var textForMonth = document.getElementById('month');
if (todayDate < 10) {
    textForDate.innerHTML = "Today date: " + 0 + todayDate;
} else  {
    textForDate.innerHTML = "Today date: " + todayDate;
}
if (todayMonth < 10) {
    textForMonth.innerHTML = "month: " + 0 + todayMonth;
} else  {
    textForMonth.innerHTML = "month: " + todayMonth;
}

window.onscroll = function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;
    var innerHeight = document.documentElement.clientHeight;

    switch (document.getElementById('updown').className) {
        case '':
            if (pageY > innerHeight) {
                document.getElementById('updown').className = 'up';
            }
            break;

        case 'up':
            if (pageY < innerHeight) {
                document.getElementById('updown').className = '';
            }
            break;

        case 'down':
            if (pageY > innerHeight) {
                document.getElementById('updown').className = 'up';
            }
            break;
    }
};

var pageYLabel = 0;

document.getElementById('updown').onclick = function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;

    switch (this.className) {
        case 'up':
            pageYLabel = pageY;
            window.scrollTo(0, 0);
            this.className = 'down';
            header.css({
                "position": "static"
            });
            break;

        case 'down':
            window.scrollTo(0, pageYLabel);
            this.className = 'up';
    }

};
// var computedStyle = getComputedStyle(document.getElementById('container'));
// var heigth = computedStyle.height;
// console.log(heigth);