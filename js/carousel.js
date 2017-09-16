/**
 * Created by anna on 27.07.17.
 */
/* этот код помечает картинки, для удобства разработки */
var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    lis[i].style.position = 'relative';
    var span = document.createElement('span');
    // обычно лучше использовать CSS-классы,
    // но этот код - для удобства разработки, так что не будем трогать стили
    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = i + 1;
    lis[i].appendChild(span);
}

/* конфигурация */
var computedStyle = getComputedStyle(document.getElementById('1'));
var widthInPixel = computedStyle.width ; // ширина в пикселях
var width = widthInPixel.substring(0,2);
var count = 3; // количество изображений

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево
var margin = 14;
var indent = 2;
if(screen.width < 1261) {
    count-= 1;
    margin-= 6;
    indent+= 2;
}
if(screen.width < 1250) {
    margin-= 2 ;
    indent-= 1;
}
if(screen.width < 485) {
    indent+= 4;
    margin-= 3;
    count-= 1;
}
if(screen.width < 400) {
    margin+= 1;
}

carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width * count + margin, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max((position - width * count) - margin, -width * (listElems.length - count) - margin * indent);
    list.style.marginLeft = position + 'px';
};

