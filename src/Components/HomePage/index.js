import React from 'react';
 
import { 
    OrangeVector, 
    RedVector, 
    HomePageStyle,
    PinkVector, 
    Ilustra, 
    Tittle
} from './styles'
import  Orange_Vector  from '../../Images/Vector.png'
// import  Red_Vector  from '../../Images/RedVector.png'
import  Elipse  from '../../Images/Ellipse.png'
import  Ilustra_Vector  from '../../Images/Ilustra.png'
 
const HomePage = () => {
    return (
        <HomePageStyle>
            <OrangeVector src={Orange_Vector} />
            {/* <RedVector src={Red_Vector} /> */}
            <PinkVector src={Elipse} />
            <Tittle>commands commandos SQL</Tittle>
            <Ilustra src={Ilustra_Vector} />
        </HomePageStyle>
    )
}
 
export default HomePage;