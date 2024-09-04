

export function updateCard(data, index) {
    const cards = document.querySelectorAll('.card');
    const img = cards[index].querySelector('.card-img-top');
    const text = cards[index].querySelector('.card-text');

    img.src = data.imageUrl;
    text.textContent = data.description;
}
