import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { SurveyContext } from "../utils/context";
import colors from '../utils/style/colors'

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const QuestionTitle = styled.h2`
   text-decoration:underline;
   text-decoration-color:${colors.primary}
`
const QuestionContent = styled.span`
   margin: 30px;
`
const LinkWrapper = styled.div`
   padding-top: 30px;
   & a {
       color: black;
   }
   & a:first-of-type {
       margin-right: 20px;
   }
`
const ReplyWrapper = styled.div`
   display:flex;
   flex-direction:row;
`
const ReplyBox = styled.button`
   background-color: ${colors.backgroundLight};
   height:100px;
   width:300px;
   border:none;
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius:30px;
   cursor:pointer;
   box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
    &:first-child {
        margin-right: 15px;
       }
    &:last-of-type {
        margin-left: 15px;
    }
`
function Survey(){
    const {questionNumber} = useParams();
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const surveyData = ['Est ce que vous avez déjà travailler avec React Js?',
    'Est ce que vous avez réaliser plus que 3 projets?',
    'Est ce que vous avez effectué un stage technique?',
    'Est ce que vous pouvez travailler avec Spring boot?']
    const {answers, saveAnswers} = useContext(SurveyContext)
    function saveReply(answer){
        saveAnswers({[questionNumber]:answer})
    }

    return(
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber} </QuestionTitle>
            <QuestionContent>{surveyData[questionNumber-1]}</QuestionContent>
            <ReplyWrapper>
                <ReplyBox onClick={() => saveReply(true)} isSelected={answers[questionNumber] === true}>Oui</ReplyBox>
                <ReplyBox onClick={() => saveReply(false)} isSelected={answers[questionNumber] === false}>Non</ReplyBox>
            </ReplyWrapper>
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[questionNumberInt] ? (
                   <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey;