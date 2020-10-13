// Hamburger Menu
$(document).ready(function() {
    $('.hamburger-icon').on('click', function() {
        $('nav').toggle(500)
    });
});

// Hide carousel if there are no projects
$(document).ready(function() {
    if ($('#projects-container').children().length = 0) {
        $('#carousel-container').css('display', 'none');
    }; 
});
 
// Projects JSON (Create array of objects for projects using Google Sheets API)
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

// Function to look through projects array of objects and add projects to HTML
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
        const $projLink = $('<a>').attr('href', projects[i].url).attr('target', '_blank');
        $projLink.text('Source Code');
        $projCard.append($projLink);
        $projElement.append($projCard);
        $('#projects-container').append($projElement);
    }
    // Invoke carousel functionality
    carouselGo();
}

// Previous & Next buttons for Carousel
// Based on Corgi Carousel Tutorial for GA SEIR Avocado Toast
function carouselGo() {
    let indexCounter = 0;
    let maxIndex = $('#projects-container').children().length - 1;
    $('#next').on('click', () => {
        $('#projects-container').children().eq(indexCounter).css('display','none');
        if (indexCounter < maxIndex) {
            indexCounter++;
        } else { 
            indexCounter = 0;
        }
        $('#projects-container').children().eq(indexCounter).css('display','block');
    });
    $('#previous').on('click', () => {
        $('#projects-container').children().eq(indexCounter).css('display','none');
        if (indexCounter > 0) {
            indexCounter--;
        } else {
            indexCounter = maxIndex;
        }
        $('#projects-container').children().eq(indexCounter).css('display','block');
    });
};

// Contact Form
function getInput() {

    // Obtain user input from HTML contact form
    const $name = $('#name');
    const $email = $('#email');
    const $subject = $('#subject');
    const $message = $('#msg');

    // Google Form URL
    const $formURL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScUP8hSnb0-SKNnOLZlwhUlhx89k85n_FgXEVBdJdT2N2fNIA/formResponse';

    // Tags for input from Google Form URL
    const $googleName ='entry.2005620554'; 
    const $googleEmail = 'entry.1160907507'; 
    const $googleSubject = 'entry.1045781291'; 
    const $googleMessage = 'entry.839337160'; 

    // fill out Google Form and send 
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