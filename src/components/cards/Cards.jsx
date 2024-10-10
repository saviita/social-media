import { StyledCard, StyledFollowers, StyledFollowersNumber, StyledImg, StyledName, StyledToday } from "./card.module"



const Cards = (props) => {
    return (
        <div>
            <StyledCard>
                <div>
                    <StyledImg src={props.icon}/>
                    <StyledName>{props.user}</StyledName>
                </div>
                <StyledFollowersNumber>{props.number}</StyledFollowersNumber>
                <StyledFollowers>FOLLOWERS</StyledFollowers>
                <StyledToday>{props.update} Today</StyledToday>
            </StyledCard>
        </div>
    )
}

export default Cards