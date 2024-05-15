const adjectives = ["aspiring", "talented", "creative", "dedicated", "passionate", "adventurous", "curious", "hard-working", "proud"];
const nouns = ["software engineer", "web developer", "cloud enthusiast", "student", "coffee-lover", "gamer", "leader", "team-player", "full-stack engineer", "frontend developer", "backend developer"];

let adjective, adjectiveSpaces, noun, nounSpaces, article;

// Function to select a random element from an array
function getRandomElement(array, current) {
    if (!current) {
        return array[Math.floor(Math.random() * array.length)];
    }
    let randomElement = array[Math.floor(Math.random() * array.length)];
    while (randomElement === current) {
        randomElement = array[Math.floor(Math.random() * array.length)];
    }
    return randomElement;
}

// Function to check if a letter is a vowel
function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase());
}

// Function to update the phrase with random adjective and noun
function updatePhrase() {
    adjective = getRandomElement(adjectives, adjective);
    adjectiveSpaces = adjective;
    noun = getRandomElement(nouns, noun);
    nounSpaces = noun;
    article = isVowel(adjective[0]) ? 'an' : 'a';

    const adjectiveElement = document.getElementById('adjective');
    // const adjectiveSpaceElement = document.getElementById('adjective-spaces');
    const nounElement = document.getElementById('noun');
    // const nounSpaceElement = document.getElementById('noun-spaces');
    const articleElement = document.getElementById('article');


    adjectiveElement.classList.remove('fadeInOut');
    nounElement.classList.remove('fadeInOut');
    void adjectiveElement.offsetWidth; // Trigger reflow to restart animation
    void nounElement.offsetWidth; // Trigger reflow to restart animation
    adjectiveElement.classList.add('fadeInOut');
    nounElement.classList.add('fadeInOut');



    adjectiveElement.textContent = adjective;
    // adjectiveSpaceElement.textContent = adjective;
    nounElement.textContent = noun;
    // nounSpaceElement.textContent = noun;
    articleElement.textContent = article;


}

setInterval(updatePhrase, 3000);

