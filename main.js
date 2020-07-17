// Hamburger Menu
$(document).ready(function() {
    $('.hamburger-icon').on('click', function() {
        $('nav').toggle(500)
    });
});

// Hide carousel buttons if there are no projects
$(document).ready(function() {
    if ($('#projects-container').children().length = 0) {
        $('#carousel-container').css('display', 'none');
    }; 
});

// Previous & Next buttons
$(() => {
    let currentImgIndex = 0;
    let highestImgIndex = $('#projects-container').children().length - 1;
    $('#next').on('click', () => {
        $('#projects-container').children().eq(currentImgIndex).css('display','none');
        if (currentImgIndex < highestImgIndex) {
            currentImgIndex++;
        } else { 
            currentImgIndex = 0;
        };
        $('#projects-container').children().eq(currentImgIndex).css('display','block');
    });
    $('#previous').on('click', () => {
        $('#projects-container').children().eq(currentImgIndex).css('display','none');
        if (currentImgIndex > 0) {
            currentImgIndex--;
        } else {
            currentImgIndex = highestImgIndex;
        };
        $('#projects-container').children().eq(currentImgIndex).css('display','block');
    });
});


// Projects JSON (Create array of objects for projects)
const projURL = 'https://spreadsheets.google.com/feeds/list/1S5GibHmW7yaGIyCBTNvm6omER6XzQ-4iiCdtDMrCJtg/od6/public/values?alt=json';
fetch(projURL)
    .then(response => response.json())
    .then(data => {
        // console.log(`data:`, data)
        console.log(data.feed.entry)
        const projects = data.feed.entry.map(entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
            }
        })
        createProjectElements(projects)
    })

// Function to look through projects array and add to HTML
const createProjectElements = (projects) => {    
    for (i = 0; i < projects.length; i++) {
        // Create one div per project
        const $projElement = $('<div>').attr('class', 'project-element');
        const $img = $('<img>').attr('src', projects[i].image);
        $projElement.append($img);
        // Create one card per project to place in same div
        const $projCard = $('<div>').attr('class', 'project-card');
        $projCard.append($('<h4>').text(projects[i].title));
        $projCard.append($('<p>').text(projects[i].description));
        const $projLink = $('<a>').attr('href', projects[i].url);
        $projLink.text('Source Code');
        $projCard.append($projLink);
        $projElement.append($projCard);
        $('#projects-container').append($projElement);
    }
}


// Contact Form grab data
function getInput() {
    // obtain user input from contact form
    const $name = $('#name');
    const $email = $('#email');
    const $subject = $('#subject');
    const $message = $('#msg');

    // Google Form URL
    const $formURL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScUP8hSnb0-SKNnOLZlwhUlhx89k85n_FgXEVBdJdT2N2fNIA/formResponse';
    
    // 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZSjsZbKua9ukZPDot0VyTd43JFPoyFLdqBbngJPx1Id5LAA/formResponse'; 
    
    // may or may not need ?

    // tags for input from Google Form URL
    const $googleName ='entry.2005620554'; //"entry.1389903601";
    const $googleEmail = 'entry.1160907507'; //"entry.1487871588";
    const $googleSubject = 'entry.1045781291'; //"entry.1386304243";
    const $googleMessage = 'entry.839337160'; //"entry.39027611";

    // TEST
    console.log($message.val());
    console.log($googleMessage);

    // sent content via POST
    // Kenya's way: <form action="https://docs.google.com/forms/.../formResponse" method="POST" id=""> <input name="entry....">
    console.log(`${$googleName}=${$name.val()}&${$googleEmail}=${$email.val()}&${$googleSubject}=${$subject.val()}&${$googleMessage}=${$message.val()}`);

    fetch($formURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `${$googleName}=${$name.val()}&${$googleEmail}=${$email.val()}&${$googleSubject}=${$subject.val()}&${$googleMessage}=${$message.val()}`
    })
    .then(res => {
        $name.val('');
        $email.val('');
        $subject.val('');
        $message.val('');
    })
    .catch(err => console.log(err));
};


// Contact Form button
$('.submit').on('click', getInput);