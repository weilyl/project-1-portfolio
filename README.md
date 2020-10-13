# Project Overview

[Final Project - Github Pages](https://weilyl.github.io/project-1-portfolio/)
[Final Project - Netlify](https://wlang.netlify.app/)
[Final Project - Surge (used for local changes)](http://weily-lang-ga-sei-project01.surge.sh/)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 3| JSON for Google Sheets & Google Forms | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches & Deployment | Complete
|Day 6| Present | Complete

## Project Description

The final result of this project will be an online portfolio that visually represents the work I have completed thus far in LaGuardia TechHire & in General Assembly. This project aims to highlight what I can bring to a software engineering team.

The portfolio will be responsive to the sizes of different devices such as mobile, tablet, and desktop. A post-MVP goal would be to make the portfolio accessible to visually impaired and photosensitive users. 

The design of this portfolio will prioritize functionality over aesthetic.

## Google Sheet

[List of Projects](https://docs.google.com/spreadsheets/d/1v0yf6zxlbSb8PPZuobogwbGayo1YENtTIlDNMftcpUE/edit?usp=sharing)

## Wireframes

- [Mobile](https://res.cloudinary.com/dd3nkph31/image/upload/v1594617227/IMG_2780_ztjbuh.jpg)
- [Tablet](https://res.cloudinary.com/dd3nkph31/image/upload/v1594617227/IMG_2781_uwlwlj.jpg)
- [Desktop](https://res.cloudinary.com/dd3nkph31/image/upload/v1594617227/IMG_2782_e5s0cv.jpg)

## Time/Priority Matrix 

- [Matrix](https://res.cloudinary.com/dd3nkph31/image/upload/v1594617227/IMG_2783_kmzaub.jpg)

## Functional Components

#### MVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: | :---: | :---: | 
| Base HTML elements, boiler plate, link docs | H | 2hr | 2.5hr |
| Hamburger click | H | 2hr | 3hr |
| Hamburger show | M | 2hr | 3hr |
| Hamburger initiate nav flexbox | M | 2hr | 3hr |
| Nav Flexbox | H | 2hr | 3hr | 
| About Me + Skills (Grid inside container) | H | 2hr | 1hr |
| Take, crop, upload screenshots of projects | L | 2hr | 1hr |
| Contact form grid | M | 2hr | 2hr |
| Contact form link Google Forms to documents | H | 1hr | 4hr |
| Contact form code functions for Google Forms | H | 2hr | 2hr |
| Edit Project Google sheet | H | 1hr | 1hr |
| Link Google JSON API | H | 2hr | 3hr |
| Code functions for Google JSON API and carousel interaction | H | 2hr | 3hr |
| Responsive at all screen sizes | L | 2hr | 3hr |
| Project Carousel | M | 2hrs | 5hr |
| Total | H | 28hrs | 37hrs | 


#### PostMVP 

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Document Issues | M | 5hr | 2hr |
| Include link to Project Github Pages | M | 1hr | 0.5hr |
| Host repository on Github Pages | H | 6hr | 0.5hr |
| Blurred out overlay on mouseover for each project | L | 5hr | -hr |
| Additional styling | L | 3hr | 8hr |
| Additional links to LinkedIn, etc. | L | 3hr | -hr |
| Accessibility features | M | 5hr | -hr |
| Add buttons to carousel for git & codepen | L | 3hr | 3hr | Add icons to footer | L | 2hr | -hr |
| Change carousel buttons to be bigger | H | 2hr | -hr |
| Change mobile view carousel to slider | L | 2hr | -hr |
| Experiment with CSS-only slider/carousel or Bootstrap/plugin | L | 2hr | -hr |
| Adjust font sizes for legibility and responsiveness | M | 3hr | -hr |
| Add headings to project carousel & contact form | M | 1hr | -hr|
| Add alert or change text after submitting contact form | L | 1hr | -hr |
| Add animations on Navigation Bar on mouseover | L | 2hr | -hr| 
| Edit hamburger menu/header so that About Me doesn't load as 2 lines | M | 3hr | -hr |
| Change mobile view carousel images to be bigger | H | 2hr | -hr |
| Make hamburger menu/header sticky or fixed position | L | 2hr | -hr |
| Edit styling between and around sections to be more modern | 1hr | -hr |
| Add Home link to header/hamburger menu | L | 1hr | -hr |
| Add sections to Google Sheet (Challenge, Highlights, Skills Used) & edit jQuery accordingly | M | 1hr | -hr |
| 
|
| Total | H | 23hrs| 13hrs | 

## Additional Libraries

https://code.jquery.com/
https://fonts.google.com/ 


## Code Snippet

```
function carouselNext(){
    // make right button move to next project in carousel;
}
```

## Issues and Resolutions

Documentation of all major issues encountered and their resolution.

**ERROR**: 
```
main.js:32 POST https://docs.google.com/forms/u/1/d/e/1FAIpQLScUP8hSnb0-SKNnOLZlwhUlhx89k85n_FgXEVBdJdT2N2fNIA/formResponse? net::ERR_ABORTED 400
getInput	@	main.js:32
dispatch	@	jquery-3.5.1.js:5429
elemData.handle	@	jquery-3.5.1.js:5233
```

**RESOLUTION**: 
~5:30pm EST 7/15/2020 Issue resolved by turning off email validation.
5:23pm EST 7/15/2020 Using Debugger on Chrome DeveloperTools, Debugger pauses at breakpoint @ jquery-3.5.1.js:5249. T
The three console.log tests inside getInput() do not log in Developer Tools Console until Debugger is paused. 
400 error does not log consistently in Developer Tools console. 
Response does not appear consistently in Google Forms response collection. 
There is no correlation between 400 error message logging on Developer Tools console and response appearing in Google Forms response collection. 
4:50pm EST 7/15/2020 no resolution; new Google Form made (tag "entry.#" for Subject input in contact form obtained, but 400 error persists)
4:40pm EST 7/15/2020 no resolution; issue logged


**ERROR**: 9:16AM EST 7/17/2020 jQuery errors dispatch jquery-3.5.1.js:5429 & elemData.handle jquery-3.5.1.js:5233 still appearing when carousel buttons clicked. However, carousel buttons are not functioning as intended as originally thought at 11pm EST 7/16/2020. Buttons are only showing first and last images in projects array.

11pm EST 7/16/2020 When carousel buttons are clicked, jQuery error lines 5429 & 5233 appear when using Developer Tools on Google Chrome. Debugger pauses at 5429.  When debugger is paused, carousel resumes intended function.

**RESOLUTION**: 12:18PM EST 7/17/2020 Named carousel button function & invoked function after all carousel elements were obtained & loaded from Google Sheets. 

**ERROR**: 9:16AM EST 7/17/2020 index.html continues to be consistently wider than browser/screen size at all sizes.

11pm EST 7/16/2020 Mobile View of index.html seems to be consistently wider than browser/screen size.

**RESOLUTION**: 9:38AM EST 7/17/2020 removed width: 100vw; from header {} in all CSS files

**ERROR**: 4:55PM EST 7/18/2020: jQuery functions not working when deployed on Netlify and Github Pages, but working when deployed on Surge.

**RESOLUTION**: Changed all linked URL's (including jQuery library & Google Sheets & Forms) from HTTP to HTTPS