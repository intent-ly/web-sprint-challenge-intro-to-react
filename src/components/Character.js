// Write your Character component here
import React from 'react';
import styled from 'styled-components'


const StyledCard = styled.div`
    background-color : white;
    width: 300px;
    border-radius: 20px;

    padding: 10px;
    &:hover{
        box-shadow: 0px 0px 3px;
    }

`

const Container = styled.div`
    display: flex;
    padding: 10px;
    flex-direction:row;
    flex-wrap: wrap;

`

const Character = (props) =>{
    console.log(props)
    return(
        <Container>
            <StyledCard class ='card'>
                <img src={props.character.image} />
                <h2>{props.character.name}</h2>
                <p>Status : {props.character.status}</p>
            </StyledCard>
        </Container>
    );
}

export default Character;