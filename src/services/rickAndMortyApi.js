export const findCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await res.json();

    return results.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        image: character.image,
    }));
};

export const characterById = async (id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    const { array } = await res.json();

    for(let character of array) {
        if (character.id === id){
            return character;
        }
    }
};
