"use client"
import moment from "moment";
import { Event, Task } from "../../../utils/types";
import { CardSpotlight } from "../ui/card-spotlight";
import { Button } from "../ui/button";
import { FaTimes } from "react-icons/fa";
import { MdCheck, MdClose, MdEdit, MdTimer } from "react-icons/md";
export function CardSpotlightDemo({
  theme,
  item
}:{
  theme:boolean,
  item:Task,
}) {
  let formattedDate = moment(item.createdAt).format("YYYY-MM-DD")
  let formattedDueDate = moment(item.dueDate).format("YYYY-MM-DD")
  let formattedModifiedAtDate = moment(item.modifiedAt).format("YYYY-MM-DD")
  return (
    <CardSpotlight className="h-[350px] w-[350px] border-r-2 flex-col justify-center align-middle"
      style={{
        backgroundColor:theme?"rgba(32, 30, 67, 0.75)":"rgba(235, 244, 246, 0.75)"
      }}
    >
      <div 
        className="w-full h-full flex flex-col justify-center items-center z-50">
        <p className="text-xl font-bold relative z-20 mt-2" style={{color:theme?"#77E4C8":"#17153B"}}>
          {item.title}
        </p>
        <div className="mt-4 relative z-20">
          <p className={`${theme?"text-slate-200":"text-slate-800"}`}>{item.description}</p>
          <ul className="list-none  mt-2">
            <Step theme={theme} title={item.isCancelled?"task still active":"task cancelled"} component={item.isCancelled?<MdClose color="yellow"/>:<MdTimer color="green" size={20}/>}/>
            <Step theme={theme} title={`created at ${formattedDate}`} component={<MdTimer size={20} color="rgba(0,100,255,.5)"/>}/>
            <Step theme={theme} title={`due date ${formattedDueDate}`} component={<MdTimer color={item.dueDate<Date.now().toString()?"red":"green"} size={20}/>}/>
            <Step theme={theme} title={`modified at ${formattedModifiedAtDate}`} component={<MdEdit size={20}/>}/>
          </ul>
        </div>
        <div className="w-100 flex flex-row justify-between items-center z-50">
          <Button className={`${item.isCancelled?"text-red-600":"text-green-600"} ${item.isCancelled?"bg-red-300":"bg-green-300"} hover:${item.isCancelled?"bg-red-300 text-red-600":"bg-green-300 text-green-600"}`}>{item.isCancelled?"task cancelled":"task still active"}</Button>
        </div>
      </div>
    </CardSpotlight>
  );
}

const Step = ({ title,theme,component }: { title: string,theme:boolean,component:React.ReactNode }) => {
  return (
    <li className="flex flex-row justify-start items-center gap-2">
      {component}
      <p style={{color:theme ? "#FEFEFE" : "rgba(164, 159, 255, 0.75)"}}>{title}</p>
    </li>
  );
};