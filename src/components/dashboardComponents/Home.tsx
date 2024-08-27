import { RadialChart } from "../charts/RadialChart";
import { Tilt } from 'react-tilt';
import { FaCheck } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import fetchData from "../../../utils/fetchData";
import { ComboboxDemo } from "../main/ComboBox";
import { AreaChartComponent } from "../charts/AreaChart";
import { ChartOverview, Task } from "../../../utils/types";
export default function Home() {
    const defaultOptions = {
        reverse:        false,
        max:            35,
        perspective:    1000,
        scale:          1.1,
        speed:          1000,
        transition:     true,
        axis:           null,
        reset:          true,
        easing:         "cubic-bezier(.03,.98,.52,.99)",
    }
    let [isLoading,setIsLoading] = useState<boolean>(false);
    let [overdueTasks,setOverdueTasks] = useState<Task[]|[]>([]);
    let [completedTasks,setCompletedTasks] = useState<Task[]|[]>([]);
    let [pendingTasks,setPendingTasks] = useState<Task[]|[]>([]);
    let [cancelledTasks,setCancelledTasks] = useState<Task[]|[]>([]);
    let [tasks,setTasks] = useState<Task[]|[]>([]);
    let [timeRange,setTimeRange] = useState<string>("day");
    let dataSets:ChartOverview[] = [];
    async function handleDataLoad(){
        try {
            let request = await fetchData("/task/overview","GET",null,setIsLoading);
            let response = jwtDecode<any>(request.token);
            setOverdueTasks(response.overdueTasks);
            setCompletedTasks(response.completedTasks);
            setPendingTasks(response.pendingTasks);
            setCancelledTasks(response.cancelledTasks);
            setTasks([...overdueTasks,...completedTasks,...pendingTasks,...cancelledTasks]);
            tasks.forEach((item,index)=>{
                dataSets.push({
                    date:item.createdAt,
                    items:[{overdue:overdueTasks.length,completed:completedTasks.length,pending:pendingTasks.length,cancelled:cancelledTasks.length}]
                })
            })
        } catch (error) {
            console.log(error);
        }
    } 
    useEffect(()=>{
        handleDataLoad();
    },[])
    let items = [
        {
            label:"day",
            value:"day"
        },
        {
            label:"month",
            value:"month"
        },
        {
            label:"year",
            value:"year"
        }
    ]
    return (
        <main className='w-full h-full flex flex-row justify-center items-center flex-wrap' style={{gap:"15px"}}>
            <section className='w-auto h-full flex flex-row justify-center items-center flex-wrap gap-2'>
                <ComboboxDemo items={items}/>
                <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                    <div className="glass-card">
                        <RadialChart items={completedTasks.length} count={tasks.length} title="completed tasks"/>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                    <div className="glass-card">
                        <RadialChart items={pendingTasks.length} count={tasks.length} title="pending tasks"/>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                    <div className="glass-card">
                        <RadialChart items={overdueTasks.length} count={tasks.length} title="overdue tasks"/>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                    <div className="glass-card">
                        <RadialChart items={cancelledTasks.length} count={tasks.length} title="cancelled tasks"/>
                    </div>
                </Tilt>
            </section>
            <AreaChartComponent chartData={dataSets}/>
        </main>
    )
}