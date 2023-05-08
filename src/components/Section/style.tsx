import styled from "styled-components";

export const SectionForm = styled.section`
    border: 3px solid darkblue;
    position: absolute;
    width: 30%;
    top: 50px;
    left: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
        font-size: 30px;
        color: white;
        font-family: 'Orbitron', sans-serif;
    }

    /* h2 {
        font-size: 20px;
        color: red;
        font-family: 'Orbitron', sans-serif;
    } */

    article {
        padding: 10px;
        color: white;
    }

    label {
        display: flex;
        margin-bottom: 5px;
        font-family: 'Orbitron', sans-serif;
    }

    input {
        display: flex;
        border-radius: 5px;
        border: none;
        width: 300px;
        padding: 8px;
    }

    button {
        font-size: 1.10em;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        padding: 8px;
        width: 320px;
        font-family: 'Orbitron', sans-serif;
        color: white;
        background-color: #54125a;
        cursor: pointer;
    }

    button:hover {
        transition: all 1.3s ease;
        background-color: blue;
    }

`