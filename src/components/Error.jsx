import styled from "styled-components";
import colors from "../utils/style/colors";

const ErrorTitle = styled.h1`
    font-weight: 300;
`
const ErrorSubtitle = styled.h2`
    font-weight: 300;
`
const ErrorWrapper = styled.div`
    background-color: ${colors.backgroundLight};
    margin: 30px;
    align-items: center;
    display: flex;
    flex-direction: column;
`

const Illustration = styled.img`
  max-width: 800px;
`
function Error(){
    return (
        <ErrorWrapper>
            <ErrorTitle>Oups...</ErrorTitle>
            <Illustration src="https://github.com/atoulmet/assets/blob/master/404.svg?raw=true" />
            <ErrorSubtitle>Il semblerait qu’il y ait un problème</ErrorSubtitle>
        </ErrorWrapper>
    )
}

export default Error;