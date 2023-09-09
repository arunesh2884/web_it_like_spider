// Fetch JSON data from a local file or URL
fetch('/events.json')
    .then(response => response.json())
    .then(data => {
        // Process and use the JSON data
        displayHackathonDetails(data.event);
        displayTimeLine(data.schedule) ;
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });

// Display hackathon details in the HTML
function displayHackathonDetails(eventData) {
    const hackathonDetailsDiv = document.getElementById('eventDetails');
    
    hackathonDetailsDiv.innerHTML = `
    <h3>NIT-K, NIT-W & NIT-T welcomes you to</h3>
    <h1>${eventData.name}</h1>
    <h4> &bull; ${eventData.date} &nbsp;   &nbsp; &nbsp; &bull;  ${eventData.location}</h4>
    <h4> </h4>
    <div class="descs"><p> ${eventData.description}</p></div>
         
    `;
}


function displayTimeLine(eventTimeLine) {
    const timecontainer = document.getElementById('timeline');
        
    let timelineHTML = '<h2 style="margin-bottom:20px;"></h2>';
        
     eventTimeLine.forEach(item => {
            timelineHTML += `
            <div class="tl-item">
                  
            <div class="tl-bg" style="background-image: url(https://placeimg.com/801/801/nature)"></div>
            
            <div class="tl-year">
              <p class="time">${item.time}</p>
            </div>
        
            <div class="tl-content">
              <h1>${item.activity}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>
        
          </div>
            `;
        });
        
    timecontainer.innerHTML = timelineHTML;
}

