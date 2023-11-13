import React from 'react';
import characterList from '../Utils/data/characterList.json';
import { Character } from '../components/Character';

export function InventoryPage() {
    const localParsed: number[] = JSON.parse(localStorage.getItem('characters') || '[]');
    const inventory = characterList.Characters.filter((character) => localParsed.includes(character.id));
    console.log(inventory);
    return (
        <div>
            {inventory.map(({ id, name, rarity, type, afflatus }) => (
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
        </div>
    );
}
