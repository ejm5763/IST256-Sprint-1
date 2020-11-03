var usersJSON = '{ "users": [' +
            '{ "firstName": "Kelvin", "lastName": "Trang", "major": "Human-Centered Design & Development",' +
            '"experiences": { "experience1": { "company": "Hughes Network Systems", "title": "Network Security Intern",' +
                    '"location": "Germantown, MD", "startDate": "June 2019", "endDate": "Jan 2020" },' +
            '"experience2": { "company": "Penn State IT Service Desk", "title": "IT Consultant", "location": "University Park, PA",' +
                    '"startDate": "Oct 2020", "endDate": "Present" } },' +
            '"skills": [ "Java", "Linux", "HTML", "CSS", "JavaScript"], "profilePic": "./images/kelvin_profile.jpg" } ] }';

let users = JSON.parse(usersJSON);
let header = document.querySelector("#header");

let img = document.createElement("img");
img.src = users.users[0].profilePic;
img.alt = users.users[0].firstName + "'s Profile Picture";
img.width = 200;
img.height = 200;
header.appendChild(img);

let profileHeader = document.createElement("h1");
profileHeader.innerText = users.users[0].firstName + " " + users.users[0].lastName;
header.appendChild(profileHeader);