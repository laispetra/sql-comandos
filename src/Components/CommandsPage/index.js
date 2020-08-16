import React, { useState } from 'react'
import {
    OrangeVector,
    RedVector,
    PageStyle,
    PinkVector,
    Tittle
} from './styles'

import Orange_Vector from '../../Images/OrangeVector.png'
import Red_Vector from '../../Images/RedVector.png'
import Elipse from '../../Images/Elipse.png'

import Table from '../Table'

const CommandsPage = () => {
    return (
        <PageStyle>
            <OrangeVector src={Orange_Vector} />
            <RedVector src={Red_Vector} />
            <PinkVector src={Elipse} />
            <Tittle>commandos SQL</Tittle>
            <Table></Table>
        </PageStyle>
    )
}

export default CommandsPage;