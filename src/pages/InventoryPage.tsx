import React, { useState } from 'react';
import characterList from '../Utils/data/characterList.json';
import { Character } from '../components/Character';
import { RARITY } from '../Utils/data/constants';
import { CharactersContainer } from '../Utils/styles/styles';
import styled from 'styled-components';

const Select = styled.select`
    display: flex;
    margin: auto;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Title = styled.p`
    display: flex;
    justify-content: center;
`;

export function InventoryPage() {
    const [selectedRarity, setSelectedRarity] = useState(2);

    const localParsed: number[] = JSON.parse(localStorage.getItem('characters') || '[]');
    const inventory = characterList.Characters.filter((character) => localParsed.includes(character.id));
    const raritiesToShow = RARITY.slice(1, 6) as number[];
    console.log(raritiesToShow);
    return (
        <div>
            <Title>Choose the rarity you want to show </Title>
            <Select defaultValue={0} onChange={(event) => setSelectedRarity(Number(event.target.value) + 2)}>
                {raritiesToShow.map((rarity, id) => (
                    <option value={id} key={id}>
                        {rarity}
                    </option>
                ))}
            </Select>

            <CharactersContainer>
                {inventory
                    .filter(({ rarity }) => selectedRarity === null || rarity === selectedRarity)
                    .map(({ id, name, rarity, type, afflatus }) => (
                        <Character
                            key={id}
                            id={id}
                            name={name}
                            rarity={rarity}
                            type={type}
                            afflatus={afflatus}
                            tracked={false}
                        />
                    ))}
            </CharactersContainer>
        </div>
    );
}
