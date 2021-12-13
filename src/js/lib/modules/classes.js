import $ from '../core';

$.prototype.addClass = function(...classNames) { // Сколько угодно аргументов
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
    }


    return this;
};


$.prototype.removeClass = function(...classNames) { // Сколько угодно аргументов
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }


    return this;
};

$.prototype.toggleClass = function(classNames) { // Сколько угодно аргументов
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNames);
    }


    return this;
};