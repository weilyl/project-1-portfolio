$(document).ready(function() {
    $('.hamburger-icon').on('click', function() {
        $('nav').toggle(500)
    })
});

const $name = $('#name').value;
const $email = $('#email').value;
const $subject = $('#subject').value;
const $message = $('#msg').value;

$('.submit').on('click', function() {
    const $name = $('#name').value;
    const $email = $('#email').value;
    const $subject = $('#subject').value;
    const $message = $('#msg').value;
})