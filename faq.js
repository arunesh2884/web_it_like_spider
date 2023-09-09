

fetch('/events.json')
    .then(Response => Response.json())
    .then(data => {
        displayFAQ(data.faq);
    })
    .catch(error=>{
            console.error('ERROR FETCHING JSON FILE',error);
        })

function displayFAQ(faqData) {
    const faqContainer = document.getElementById('faq-container');
        
    let faqHTML = '<h2 style="margin-bottom:20px;">Frequently Asked Questions</h2>';
        
     faqData.forEach(item => {
            faqHTML += `
                <div class="faq-item" style="margin-bottom:10px;">
                    <h3>${item.question}</h3>
                    <p>${item.answer}</p>
                </div>
            `;
        });
        
    faqContainer.innerHTML = faqHTML;
}