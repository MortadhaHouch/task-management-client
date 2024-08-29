import { RadialChart } from "../charts/RadialChart";
import { Tilt } from 'react-tilt';
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import fetchData from "../../../utils/fetchData";
import { ComboboxDemo } from "../main/ComboBox";
import { AreaChartComponent } from "../charts/AreaChart";
import { ChartOverview, Task } from "../../../utils/types";
import Error404Light from "../../app/assets/icons/error-404-light.svg"
import Error404Dark from "../../app/assets/icons/error-404-dark.svg"
import Image from "next/image";
import { useTheme } from "next-themes";
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
    let chartData:ChartOverview[] = [];
    async function handleDataLoad(){
        try {
            let request = await fetchData("/task/overview","GET",null,setIsLoading);
            let response = jwtDecode<any>(request.token);
            setOverdueTasks(response.overdueTasks);
            setCompletedTasks(response.completedTasks);
            setPendingTasks(response.pendingTasks);
            setCancelledTasks(response.cancelledTasks);
            setTasks([...overdueTasks,...completedTasks,...pendingTasks,...cancelledTasks]);
            chartData = tasks.map((item,index)=>{
                return {
                    createdAt:item.createdAt,
                    startingDate:item.startingDate,
                    dueDate:item.dueDate,
                    modifiedAt:item.modifiedAt,
                    overdue:overdueTasks.length,
                    completed:completedTasks.length,
                    pending:pendingTasks.length,
                    cancelled:cancelledTasks.length
                }
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
    let {theme} = useTheme()
    return (
        <main className='w-full h-full flex flex-row justify-center items-start flex-wrap' style={{gap:"15px"}}>
            {
                tasks && tasks.length > 0 ?(
                    <>
                        <section className='w-auto h-full flex flex-col justify-center items-center flex-wrap gap-4 pt-6 pb-6'>
                            <div className="glass-card">
                                <RadialChart 
                                    dataSets={chartData} 
                                    count={chartData.length} 
                                    title="completed"/>
                            </div>
                            <div className="glass-card">
                                <RadialChart 
                                    dataSets={chartData}  
                                count={chartData.length} 
                                title="pending"/>
                            </div>
                            <div className="glass-card">
                                <RadialChart 
                                    dataSets={chartData}  
                                count={chartData.length} 
                                title="overdue"/>
                            </div>
                            <div className="glass-card">
                                <RadialChart 
                                    dataSets={chartData}  
                                count={chartData.length} 
                                title="cancelled"/>
                            </div>
                        </section>
                        <AreaChartComponent dataSets={chartData}/>
                    </>
                ):(
                    <Image src={theme === "light" ? Error404Dark : Error404Light} alt="data not found"/>
                )
            }
            
        </main>
    )
}