import React, { useState } from 'react';
import styled from 'styled-components';
import characterList from '../Utils/data/characterList.json';
import { Character } from '../components/Character';
import { AFFLATUS, RARITY, TYPE } from '../Utils/data/constants';
import { CharactersContainer } from '../Utils/styles/styles';

const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Select = styled.select`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const FilterTitle = styled.h1`
    display: flex;
    justify-content: center;
`;

export function CharactersPage() {
    const [inputName, setInputName] = useState('');
    const [inputRarity, setInputRarity] = useState(0);
    const [inputType, setInputType] = useState(0);
    const [inputAfflatus, setInputAfflatus] = useState(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value);
    };

    const filteredCharacter = characterList.Characters.filter(
        (e) => inputName === '' || e.name.toLowerCase().startsWith(inputName.toLowerCase()),
    )
        .filter((e) => inputRarity === 0 || e.rarity === RARITY[inputRarity])
        .filter((e) => inputAfflatus === 0 || e.afflatus === AFFLATUS[inputAfflatus])
        .filter((e) => inputType === 0 || e.type === TYPE[inputType]);

    return (
        <div>
            <FilterTitle>Filter</FilterTitle>
            <FilterWrapper>
                <Input placeholder="name" value={inputName} onChange={handleInputChange} />
                <Select defaultValue={0} onChange={(event) => setInputAfflatus(Number(event.target.value))}>
                    {AFFLATUS.map((afflatus, id) => (
                        <option value={id} key={id}>
                            {afflatus}
                        </option>
                    ))}
                </Select>
                <Select defaultValue={0} onChange={(event) => setInputRarity(Number(event.target.value))}>
                    {RARITY.map((rarity, id) => (
                        <option value={id} key={id}>
                            {rarity}
                        </option>
                    ))}
                </Select>
                <Select defaultValue={0} onChange={(event) => setInputType(Number(event.target.value))}>
                    {TYPE.map((type, id) => (
                        <option value={id} key={id}>
                            {type}
                        </option>
                    ))}
                </Select>
            </FilterWrapper>
            <CharactersContainer>
                {filteredCharacter.map(({ id, name, rarity, type, afflatus }) => (
                    <Character
                        key={id}
                        id={id}
                        name={name}
                        rarity={rarity}
                        type={type}
                        afflatus={afflatus}
                        tracked={true}
                    />
                ))}
            </CharactersContainer>
        </div>
    );
}
