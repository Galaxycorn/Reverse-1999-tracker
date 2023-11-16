import styled from 'styled-components';

export const CharactersContainer = styled.div`
    margin: 50px;
    display: grid;
    gap: 24px;
    grid-template-rows: 150px 100px;
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    align-items: center;
    justify-items: center;
    position: relative;
`;
