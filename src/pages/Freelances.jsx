import styled from 'styled-components';
import DefaultPicture from '../assets/profile.png'
import Card from '../components/Card';
import colors from '../utils/style/colors.js'
import { Link } from 'react-router-dom';
 
const freelanceProfiles = [
    {
        id:1,
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        id:2,
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        id:3,
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]
const CardsContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-rows: 339px 334px;
    grid-template-columns: repeat(2, 2fr);
    align-items:center;
    justify-items:center;
`
const PageTitle = styled.h1`
    font-size:30px;
    text-align: center;
    padding-bottom:30px;
    color:black;
`
const PageSubtitle = styled.h2`
    font-size:20px;
    text-align:center;
    color: ${colors.secondary};
    font-weight: 300;
    padding-bottom:30px;
`
function Freelances(){
    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
            <CardsContainer>
                {freelanceProfiles.map((profile,index) => (
                <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
                    <Card key={`${profile.name}-${index}`} 
                    label={profile.jobTitle} picture={profile.picture} 
                    title={profile.jobTitle} />
                 </Link>
                ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances;