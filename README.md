# Oldagram

A vintage-themed Instagram clone featuring famous historical artists and their masterpieces. Built with vanilla JavaScript, HTML5, and CSS3 as part of my journey to becoming a Full Stack AI Engineer.

## Live Demo

**[View Live Project](https://oldagram-pl.netlify.app/)**

## Overview

Oldagram reimagines social media with famous artists like Vincent van Gogh, Gustave Courbet, and Joseph Ducreux sharing their artwork and thoughts. Features dynamic post generation, interactive like functionality, and authentic Instagram-style design.

## Tech Stack

- **HTML5** - Semantic markup and accessibility
- **CSS3** - Flexbox layouts, hover effects, responsive design
- **Vanilla JavaScript** - DOM manipulation, event handling, template literals

## Key Features

- **Dynamic post generation** from JavaScript data arrays
- **Interactive likes** via double-click on images or single-click on hearts
- **Real-time updates** with formatted like counts
- **Multi-post feed** with authentic Instagram UI
- **Responsive design** across all screen sizes

## Learning Objectives

This project develops essential skills for AI engineering:

- **Data-driven applications** - Processing and displaying dynamic content
- **Event-driven programming** - Interactive user interfaces
- **Template generation** - Dynamic HTML creation
- **State management** - Real-time data updates

## Code Highlights

### Dynamic Post Generation
```javascript
function createPost(postData, index) {
    return `
        <article class="post">
            <header class="post-header">
                <img src="${postData.avatar}" alt="${postData.name}">
                <div>
                    <h2>${postData.name}</h2>
                    <p>${postData.location}</p>
                </div>
            </header>
            <img src="${postData.post}" data-index="${index}">
            <!-- Actions and caption -->
        </article>
    `;
}
```

### Interactive Like System
```javascript
function setupClickHandlers() {
    document.querySelectorAll('.portrait').forEach(image => {
        image.addEventListener('dblclick', function() {
            increaseLikes(this.dataset.index);
        });
    });
}

function increaseLikes(index) {
    posts[index].likes += 1;
    renderPosts();
}
```

## Installation

1. Clone the repository
2. Open `index.html` in a web browser
3. For development, use any local server

## Future Enhancements

- **AI content generation** - Automated historical artist posts
- **Image recognition** - AI artwork analysis and tagging
- **Comment system** - Full social interaction features
- **User authentication** - Personalized feeds

## Project Structure

```
oldagram/
├── index.html
├── index.css
├── index.js
├── images/
└── README.md
```

---

*Part of my journey to becoming a Full Stack AI Engineer, demonstrating advanced JavaScript skills and interactive application development.*