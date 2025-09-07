const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12502
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15137
    }
]

// Make a post html template
function createPost(postData, index) {
    return `
        <article class="post">
            <header class="post-header">
                <img src="${postData.avatar}" class="author-avator" alt="${postData.name}">
                <div class="name-location-container">
                    <h2 class="name">${postData.name}</h2>
                    <p class="location">${postData.location}</p>
                </div>
            </header>
            
            <div class="post-image">
                <img src="${postData.post}" class="portrait" alt="${postData.name} self portrait" data-index="${index}">
            </div>
            
            <div class="post-actions">
                <img src="images/icon-heart.png" class="action heart-icon" alt="Like" data-index="${index}">
                <img src="images/icon-comment.png" class="action" alt="Comment">
                <img src="images/icon-dm.png" class="action" alt="Share">
            </div>
            
            <footer class="post-caption">
                <p class="likes-num">${formatLikes(postData.likes)} likes</p>
                <p class="username">
                    ${postData.username}
                    <span class="comment">${postData.comment}</span>
                </p>
            </footer>
        </article>
    `;
}

// Render posts
function renderPosts() {
    const container = document.getElementById('posts-container')
    let html = ''
    
    for (let i = 0; i < posts.length; i++) {
        html += createPost(posts[i], i)
    }
    
    container.innerHTML = html
}

// Add event listeners after osts are rendered
function setupClickHandlers() {
    // Double-click on images
    document.querySelectorAll('.portrait').forEach(image => {
        image.addEventListener('dblclick', function() {
            const index = this.dataset.index
            increaseLikes(index)
        })
    })
    
    // Single click on heart icons
    document.querySelectorAll('.heart-icon').forEach(heart => {
        heart.addEventListener('click', function() {
            const index = this.dataset.index
            increaseLikes(index)
        })
    })
}

// Function to increase likes
function increaseLikes(index) {
    posts[index].likes += 1
    renderPosts()
    setupClickHandlers()
}

// Add commas to numbers based on the browser's locale settings
function formatLikes(number) {
    return number.toLocaleString()
}

// Call the function when page loads
renderPosts()
setupClickHandlers()