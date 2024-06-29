import { FC } from "react";
import { styles } from "../util/style";

interface Props {
  logo:string;
  title:string;
}

const ClientCard:FC <Props> = ({ logo,title }) => {
  return (
    <div className={`flex-1 flex ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 items-center`}>
    <img src={logo} alt={title} className="sm:w-[192px] w-[100px] object-contain"/>
</div>
  )
}

export default ClientCard;
