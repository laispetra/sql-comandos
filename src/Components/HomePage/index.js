import React, { useState } from 'react';
import CommandsPage from '../CommandsPage'
import {
    OrangeVector,
    RedVector,
    HomePageStyle,
    PinkVector,
    Ilustra,
    Tittle,
    SecondTittle,
    HomeButton
} from './styles'
import Orange_Vector from '../../Images/OrangeVector.png'
import Red_Vector from '../../Images/RedVector.png'
import Elipse from '../../Images/Elipse.png'
import Ilustra_Vector from '../../Images/Ilustra.png'

const HomePage = () => {
    const [page, setPage] = useState("")

    const changePage = () => {
        setPage("commands")
    }


    return (
        page === "home" ? (
            <HomePageStyle>
                <OrangeVector src={Orange_Vector} />
                <RedVector src={Red_Vector} />
                <PinkVector src={Elipse} />
                <SecondTittle><strike>commands</strike></SecondTittle>
                <Tittle>commandos SQL</Tittle>
                <HomeButton onClick={changePage}>ver dicas</HomeButton>
                <Ilustra src={Ilustra_Vector} />
            </HomePageStyle>
            ) : 
            (
                <CommandsPage />
            )     
    )
}

export default HomePage;