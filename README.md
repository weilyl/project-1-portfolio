# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 3| JSON for Google Sheets & Google Forms | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches & Deployment | Incomplete
|Day 6| Present | Incomplete

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
| Take, crop, upload screenshots of projects | L | 2hr | -hr |
| Contact form grid | M | 2hr | 2hr |
| Contact form link Google Forms to documents | H | 1hr | 3hr |
| Contact form code functions for Google Forms | H | 2hr | -hr |
| Edit Project Google sheet | H | 1hr | -hr |
| Link Google JSON API | H | 2hr | -hr |
| Code functions for Google JSON API and carousel interaction | H | 2hr | -hr |
| Responsive at all screen sizes | L | 2hr | 3hr |
| Project Carousel | M | 2hrs | -hr |
| Total | H | 28hrs| -hrs | 


#### PostMVP 

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Document Issues | M | 5hr | -hr |
| Include link to Project Github Pages | M | 1hr | -hr |
| Host repository on Github Pages | H | 6hr | -hr |
| Blurred out overlay on mouseover for each project | L | 5hr | -hr |
| Additional styling | L | 3hr | -hr |
| Additional links to LinkedIn, etc. | L | 3hr | -hr |
| Accessibility features | M | 5hr | -hr |
| Add buttons to carousel for git & codepen | L | 3hr | -hr |
| 
| Total | H | 23hrs| -hrs | 

## Additional Libraries

## Code Snippet

```
function carouselNext(){
    // make right button move to next project in carousel;
}
```

## Issues and Resolutions

Documentation of all major issues encountered and their resolution.

**ERROR**: 
main.js:32 POST https://docs.google.com/forms/u/1/d/e/1FAIpQLScUP8hSnb0-SKNnOLZlwhUlhx89k85n_FgXEVBdJdT2N2fNIA/formResponse? net::ERR_ABORTED 400
getInput	@	main.js:32
dispatch	@	jquery-3.5.1.js:5429
elemData.handle	@	jquery-3.5.1.js:5233                                
**RESOLUTION**: 
~5:30pm EST 7/15/2020 Issue resolved by turning off email validation.
5:23pm EST 7/15/2020 Using Debugger on Chrome DeveloperTools, Debugger pauses at breakpoint @ jquery-3.5.1.js:5249. T
The three console.log tests inside getInput() do not log in Developer Tools Console until Debugger is paused. 
400 error does not log consistently in Developer Tools console. 
Response does not appear consistently in Google Forms response collection. 
There is no correlation between 400 error message logging on Developer Tools console and response appearing in Google Forms response collection. 
4:50pm EST 7/15/2020 no resolution; new Google Form made (tag "entry.#" for Subject input in contact form obtained, but 400 error persists)
4:40pm EST 7/15/2020 no resolution; issue logged


**ERROR**: 11pm EST 7/16/2020 When carousel buttons are clicked, jQuery error lines 5429 & 5233 appear when using Developer Tools on Google Chrome. Debugger pauses at 5429.  When debugger is paused, carousel resumes intended function.
**RESOLUTION**: 

**ERROR**: 11pm EST 7/16/2020 Mobile View of index.html seems to be consistently wider than browser/screen size.
**RESOLUTION**: 