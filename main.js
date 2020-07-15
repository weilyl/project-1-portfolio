$(document).ready(function() {
    $('.hamburger-icon').on('click', function() {
        $('nav').toggle(500)
    })
});

function getInput() {
    // obtain user input from contact form
    const $name = $('#name');
    const $email = $('#email');
    const $subject = $('#subject');
    const $message = $('#msg');

    // Google Form URL
    const $formURL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScUP8hSnb0-SKNnOLZlwhUlhx89k85n_FgXEVBdJdT2N2fNIA/formResponse?'; 
    
    // may or may not need ?

    // tags for input from Google Form URL
    const $googleName ="entry.2005620554";
    const $googleEmail = "entry.1045781291";
    const $googleMessage = "entry.839337160";

    // TEST
    console.log($message.val());
    console.log($googleMessage);

    // sent content via POST
    // Kenya's way: <form action="https://docs.google.com/forms/.../formResponse" method="POST" id=""> <input name="entry....">
    console.log(`${$googleName}=${$name.val()}&${$googleEmail}=${$email.val()}&${$googleMessage}=${$message.val()}`);

    fetch($formURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `${$googleName}=${$name.val()}&${$googleEmail}=${$email.val()}&${$googleMessage}=${$message.val()}`
    })
    .then(res => {
        $name.val('');
        $email.val('');
        $message.val('');
    })
    .catch(err => console.log(err));
};

$('.submit').on('click', getInput);