document.addEventListener('DOMContentLoaded', function () {
    const skillsItems = document.querySelectorAll('.skills-item');
    const skillDescription = document.getElementById('skill-description');

    skillsItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            const skillName = this.parentElement.getAttribute('data-text');
            const description = getSkillDescription(skillName);
            skillDescription.textContent = description;
        });
    });

    function getSkillDescription(skillName) {
        switch (skillName) {
            case 'Java':
                return 'Java is a high-level, class-based, object-oriented programming language that I am most comfortable using for backend development and solving algorithmic problems. I began learning Java in my freshman year of college and have consistently used it throughout computer science courses and my web development internship.';
            case 'Kotlin':
                return 'I was introduced to Kotlin during my web development internship, where the company was transitioning from Java to a more modern and efficient language. I have a basic understanding of Kotlin\'s features, such as null safety, extension functions, and concise syntax.';
            case 'Node.js':
                return 'Node.js is an open-source, cross-platform JavaScript runtime environment that I used for various projects, including my senior design and chess project.';
            case 'JavaScript':
                return 'JavaScript is a foundational frontend programming language that I use in almost all of my personal projects, as well as numerous university courses and my web development internship, to provide interactivity and responsiveness on the frontend.';
            case 'HTML':
                return 'HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser. I have an understanding of the structural framework for organizing contents and the utilization of tags and attributes.';
            case 'CSS':
                return 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. I use it in all of my web application projects to make the user interface more aesthetic for the audience.';
            case 'React':
                return 'React is a JavaScript library for building user interfaces. I used React during my web development internship and numerous projects. I have experience with the majority of React concepts, including components, rendering, hooks, props, and state.';
            case 'Git':
                return 'Git is a distributed version control system for tracking changes in source code during software development. I used Git throughout my entire college career and internship, primarily through platforms like GitHub and GitLab for collaborative code management.';
            case 'AWS':
                return 'AWS (Amazon Web Services) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs. This website is hosted using AWS cloud computing services, and I plan on deploying more of my personal projects to the cloud. I am currently certified as a AWS Cloud Practitioner and working towards the Certified Solutions Architect Associate Certification.';
            default:
                return '';
        }
    }
});

function scrollToTop() {
    window.location.reload();
}

