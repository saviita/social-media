import { FOLLOWERS } from "../../constants/followers"
import Cards from "../cards/Cards"
import Mode from "../mode/Mode"
import Title from "../title/Title"



const Dashboard = () => {
    return (
        <div>
            <div>
                <Title/>
                <Mode/>
            </div>
            {FOLLOWERS.map(cardInfo => {
                    return <Cards key={cardInfo.id}
                    icon={cardInfo.icon}
                    user={cardInfo.name}
                    number={cardInfo.number}
                    update={cardInfo.today}/>
            })}
        </div>
    )
}

export default Dashboard