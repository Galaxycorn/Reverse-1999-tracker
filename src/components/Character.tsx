import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface CharacterProps {
    id: number;
    name: string;
    rarity: number;
    type: string;
    afflatus: string;
}

const Characters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CharactersName = styled.h1`
    font-size: 20px;
`;

const ImageCharacter = styled.img<{ $isgray: boolean }>`
    height: 100px;
    width: 100px;
    filter: ${({ $isgray }) => ($isgray ? 'none' : 'grayscale(100%) brightness(50%)')};
`;

export function Character({ id, name, rarity, type, afflatus }: CharacterProps) {
    const [isObtained, setIsObtained] = useState(false);

    useEffect(() => {
        const selectedCharacters = localStorage.getItem('characters');
        if (selectedCharacters) {
            const characters: number[] = JSON.parse(selectedCharacters);
            setIsObtained(characters.includes(id));
        }
    }, [id]);

    const handleClick = () => {
        const selectedCharacters = localStorage.getItem('characters');
        let characters: number[] = [];

        if (selectedCharacters) {
            characters = JSON.parse(selectedCharacters);
        }

        if (isObtained) {
            const updatedCharacters = characters.filter((characterId) => characterId !== id);
            localStorage.setItem('characters', JSON.stringify(updatedCharacters));
            setIsObtained(false);
        } else {
            characters.push(id);
            localStorage.setItem('characters', JSON.stringify(characters));
            setIsObtained(true);
        }
    };

    return (
        <Characters onClick={() => setIsObtained(!isObtained)}>
            <CharactersName>{name}</CharactersName>
            <ImageCharacter
                src={process.env.PUBLIC_URL + `/images/characters/${id}.png`}
                alt={name + id}
                $isgray={isObtained}
                onClick={handleClick}
            />
        </Characters>
    );
}
