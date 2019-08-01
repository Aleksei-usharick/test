import $ from 'jquery';

$('<h1 />')
  .text('хаю JQuery')
  .css({
    textAlign: 'center',
    color: 'blue'
  })
  .appendTo($('header'))

console.log('Header component')