import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Title, Status } from './styles';

export default function Home() {
    const [resposta, setResposta] = useState([]);
    useEffect(() => {
        axios.get('https://teste-aula-12----firebase-default-rtdb.firebaseio.com/jogador.json')
            .then(function (response) {
                setResposta(response.data);
            }
            )
    }, [])

    return (
        <>
            <Container>
                <Title>Api de Status Jogadores</Title>
                {resposta && Object.values(resposta).map((passe) => {
                    return (
                        <Status>{passe.status}</Status>
                    )
                })}
            </Container>
        </>
    )
}