import './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});


$('div').click(function(){
    console.log($(this).index());
});
// $('.active').off('click', sayHello);


console.log($('div').eq(2).find('.more'));

// function sayHello() {
//     console.log('hello');
// };

// console.log($('button').html('Knopka'));