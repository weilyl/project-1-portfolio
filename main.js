// Hamburger Menu
$(document).ready(function() {
    $('.hamburger-icon').on('click', function() {
        $('nav').toggle(500)
    })
});


// Projects JSON
const projURL = 'https://spreadsheets.google.com/feeds/list/1S5GibHmW7yaGIyCBTNvm6omER6XzQ-4iiCdtDMrCJtg/od6/public/values?alt=json';
fetch(projURL)
    .then(response => response.json())
    .then(data => {
        // console.log(`data:`, data)
        console.log(data.feed.entry)
        const projects = data.feed.entry.map( entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
            }
        })
        app(projects)
    })
 
const app = (data) => {
    console.log('app is running!')
    console.log(data)

    const createProjectElement = (project) => {
        const $div = $('<div>').attr('class', 'project-element');
        $div.append($('<h2>').text(project.title));
        $div.append($('<p>').text(project.description));
        $div.append($('<img>').attr('src', project.image));
        $div.append($('<br>'));
        $div.append($('<a>').attr('href', project.url).text('LINK >>>'));
        return $div;
    }
    // $('body').append(createProjectElement(data[0]))
    
    data.forEach( project => {
        const $projectDiv = createProjectElement(project);
        $('#projects-container').append($projectDiv);
    })
}


// Contact Form
function getInput() {
    // obtain user input from contact form
    const $name = $('#name');
    const $email = $('#email');
    const $subject = $('#subject');
    const $message = $('#msg');

    // Google Form URL
    const $formURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZSjsZbKua9ukZPDot0VyTd43JFPoyFLdqBbngJPx1Id5LAA/formResponse'; 
    
    // may or may not need ?

    // tags for input from Google Form URL
    const $googleName ="entry.1389903601";
    const $googleEmail = "entry.1487871588";
    const $googleSubject = "entry.1386304243";
    const $googleMessage = "entry.entry.39027611";

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

$('.submit').on('click', getInput);