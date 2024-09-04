

export async function fetchRandomCat() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return {
        imageUrl: data[0].url,
        description: 'Here is a random cat!' // You can enhance this with more specific info if available.
    };
}

export async function fetchRandomDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return {
        imageUrl: data.message,
        description: 'Here is a random dog!' // Again, you can enhance this with more specific info.
    };
}

