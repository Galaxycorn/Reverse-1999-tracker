import React from 'react';
import styled from 'styled-components';
import characterList from '../Utils/data/CharacterList.json';
import { Character } from '../components/Character';

const CharactersContainer = styled.div`
    margin: 50px;
    display: grid;
    gap: 24px;
    grid-template-rows: 150px 100px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-items: center;
`;

export function CharactersPage() {
    return (
        <CharactersContainer>
            {characterList.Characters.map(({ id, name, rarity, type, afflatus }) => (
                <Character key={id} id={id} name={name} rarity={rarity} type={type} afflatus={afflatus} />
            ))}
        </CharactersContainer>
    );
}
