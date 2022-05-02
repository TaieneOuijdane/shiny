import { useContext } from "react";
import styled from 'styled-components'
import { SurveyContext } from "../utils/context";
import { useTheme } from "../utils/hooks";
import colors from '../utils/style/colors'

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${(props) =>
        props.theme === 'light' ? `${colors.backgroundLight}` : `${colors.backgroundDark}`};
`
const ResultsTitle = styled.h2`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-weight: bold;
    font-size: 28px;
    max-width: 60%;
    text-align: center;
    & > span {
       padding-left: 10px;
    }
`
const ResultsDescription = styled.div`
    padding: 60px;
`
export function formatJobList(title, listLength, index) {
    if (index === listLength - 1) {
        return title
    }
    return `${title},`
}
function Results(){
    const theme = useTheme()
    const {answers} = useContext(SurveyContext)
    console.log(answers[1])
    return(
        <ResultsContainer theme={theme}>
            <ResultsTitle theme={theme}>Les résultats de votre réponse sont:</ResultsTitle>
            <ResultsDescription>{answers[1]}</ResultsDescription>
        </ResultsContainer>
    )
}

export default Results;