//This is ShowMore.js contents below
function showMore() {
    // Hides the "Read Less" link if it exists
    var readLessLink = document.getElementById('linkLess');
    if (readLessLink) {
        readLessLink.parentElement.removeChild(readLessLink);
    }
    
    // Shows the #more
    document.getElementById('readmore').style.display = "block";
    
    // Removes the "Read More" link if it exists
    var readMoreLink = document.getElementById('link');
    if (readMoreLink) {
        readMoreLink.parentElement.removeChild(readMoreLink);
    }

    // Adds the "Read Less" link
    var newReadLessLink = document.createElement('a');
    newReadLessLink.href = "javascript:void(0);";
    newReadLessLink.id = "linkLess";
    newReadLessLink.innerHTML = "Read Less >>";
    newReadLessLink.onclick = showLess; // Attach the showLess function
    
    // Insert the "Read Less" link after the #readmore div
    document.getElementById('readmore').insertAdjacentElement('afterend', newReadLessLink);
}

function showLess() {
    // Hides the #more
    document.getElementById('readmore').style.display = "none";
    
    // Removes the "Read Less" link if it exists
    var readLessLink = document.getElementById('linkLess');
    if (readLessLink) {
        readLessLink.parentElement.removeChild(readLessLink);
    }

    // Adds the "Read More" link
    var newReadMoreLink = document.createElement('a');
    newReadMoreLink.href = "javascript:void(0);";
    newReadMoreLink.id = "link";
    newReadMoreLink.innerHTML = "Read More >>";
    newReadMoreLink.onclick = showMore; // Attach the showMore function
    
    // Insert the "Read More" link after the paragraph
    var paragraph = document.querySelector('p'); // Assuming it's the first paragraph
    paragraph.insertAdjacentElement('afterend', newReadMoreLink);
}