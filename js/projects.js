// Projects content
const projects = {
    project1: `
        <h4>Project 1 Title</h4>
        <p>This is the description of Project 1. You can include details about technologies, design, and purpose.</p>
        <img src="img/portfolio/1.png" alt="Project 1" style="max-width:100%; margin-top:15px;">
    `,
    project2: `
        <h4>Project 2 Title</h4>
        <p>Description for Project 2 goes here. Highlight key features, tools used, or client goals.</p>
        <img src="img/portfolio/2.png" alt="Project 2" style="max-width:100%; margin-top:15px;">
    `,
    project3: `
        <h4>Project 3 Title</h4>
        <p>Description for Project 3. Explain what was done and the results achieved.</p>
        <img src="img/portfolio/3.png" alt="Project 3" style="max-width:100%; margin-top:15px;">
    `,
    project4: `
        <h4>Project 4 Title</h4>
        <p>Description for Project 4. Include screenshots, challenges solved, or special techniques used.</p>
        <img src="img/portfolio/4.png" alt="Project 4" style="max-width:100%; margin-top:15px;">
    `,
    project5: `
        <h4>Project 5 Title</h4>
        <p>Description for Project 5. Talk about design choices, technologies, and client outcomes.</p>
        <img src="img/portfolio/5.png" alt="Project 5" style="max-width:100%; margin-top:15px;">
    `,
    project6: `
        <h4>Project 6 Title</h4>
        <p>Description for Project 6. You can also add links or extra screenshots if needed.</p>
        <img src="img/portfolio/6.png" alt="Project 6" style="max-width:100%; margin-top:15px;">
    `
};

// Open modal on button click
document.querySelectorAll('.open-project').forEach(button => {
    button.addEventListener('click', () => {
        const projectKey = button.getAttribute('data-project');
        document.getElementById('modal-body').innerHTML = projects[projectKey];
        document.getElementById('project-modal').style.display = 'block';
    });
});

// Close modal
document.querySelectorAll('.close-modal, .close-project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('project-modal').style.display = 'none';
    });
});

// Close modal if clicked outside content
document.getElementById('project-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) {
        document.getElementById('project-modal').style.display = 'none';
    }
});
