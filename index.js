
import { fetchRandomCat, fetchRandomDog } from './scripts/api.js';
import { updateCard } from './scripts/card.js';

document.addEventListener('DOMContentLoaded', () => {
    const catButton = document.querySelectorAll('.btn-primary')[0];
    const dogButton = document.querySelectorAll('.btn-primary')[1];

    catButton.addEventListener('click', async () => {
        const catData = await fetchRandomCat();
        updateCard(catData, 0);
    });

    dogButton.addEventListener('click', async () => {
        const dogData = await fetchRandomDog();
        updateCard(dogData, 1);
    });
});
