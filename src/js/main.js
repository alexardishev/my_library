import './lib/lib';

// $('button').on('click', function() {
//     $('div').eq(2).toggleClass('active');
// });


// $('div').click(function(){
//     console.log($(this).index());
// });
// // $('.active').off('click', sayHello);


// // console.log($('div').eq(2).find('.more'));

// // console.log($('.some').closest('.findme'));

// // function sayHello() {
// //     console.log('hello');
// // };

// // console.log($('button').html('Knopka'));
// $('.findme').fadeOut(1800);


$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});



// $('.wrap').html(
//     `
//     <div class="dropdown">
//     <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//     <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//         <a href="#" class="dropdown-item">Action</a>
//         <a href="#" class="dropdown-item">Action2</a>
//         <a href="#" class="dropdown-item">Action3</a>
//     </div>
// </div>` // Способ 2 когда помещаю верстку динамически, тогда надо инициализировать после верстки метод
// );

// $('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: "Новое модальное окно",
        body: "ВОт такие делишки ребята динамика"
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'djskdj',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('OK');
                }
            ]
        ]
    }
}));


$().get('https://jsonplaceholder.typicode.com/todos/1')
.then(res => console.log(res));