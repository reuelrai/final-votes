const people = [
    { name: "Aayush Giri", votes: 2, voters: ["Sandeep Lamichhane", "Samyog Sapkota"] },
    { name: "Avishek Sigel", votes: 1, voters: ["Umang Magar"] },
    { name: "Bipin Dawadi", votes: 1, voters: ["Sandeep Lamichhane"] },
    { name: "Harish Chaisir", votes: 2, voters: ["Samipya Acharya", "Manjil Aryal"] },
    { name: "Manjil Aryal", votes: 4, voters: ["Robana Kumari Shrestha", "Harish Chaisir", "Samipya Acharya", "Reuel Rai"] },
    { name: "Nikita Chaudhary", votes: 2, voters: ["Robana Kumari Shrestha", "Bipin Dawadi"] },
    { name: "Reuel Rai", votes: 2, voters: ["Robana Kumari Shrestha", "Bipin Dawadi"] },
    { name: "Robana Kumari Shrestha", votes: 6, voters: ["Manjil Aryal", "Bipin Dawadi", "Reuel Rai", "Harish Chaisir", "Reena Khadka", "Mandip Shrestha"] },
    { name: "Samipya Acharya", votes: 2, voters: ["Harish Chaisir", "Manjil Aryal"] },
    { name: "Shristi Budha Magar", votes: 4, voters: ["Rakshya Shrestha", "Reuel Rai", "Srestaa Shrestha", "Mandip Shrestha"] },
    { name: "Sudip Bhandari", votes: 0, voters: [] },
    { name: "Mandip Shrestha", votes: 0, voters: [] },
    { name: "Muskan Rajbanshi", votes: 0, voters: [] },
    { name: "Samyog Sapkota", votes: 0, voters: [] },
    { name: "Sandeep Lamichhane", votes: 0, voters: [] },
    { name: "Umang Magar", votes: 0, voters: [] },
];

const gallery = document.getElementById('gallery');

people.forEach(person => {
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const nameElement = document.createElement('h1');
    nameElement.textContent = person.name;

    const votesElement = document.createElement('p');
    votesElement.textContent = `Votes Received: ${person.votes}`;

    const votersTitle = document.createElement('p');
    votersTitle.textContent = 'Voters:';

    const votersList = document.createElement('ul');
    person.voters.forEach(voter => {
        const voterItem = document.createElement('li');
        voterItem.textContent = voter;
        votersList.appendChild(voterItem);
    });

    infoDiv.appendChild(nameElement);
    infoDiv.appendChild(votesElement);
    infoDiv.appendChild(votersTitle);
    infoDiv.appendChild(votersList);

    gallery.appendChild(infoDiv);
});
