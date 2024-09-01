import { RadialChart } from "../charts/RadialChart";
import { useCallback, useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";
import fetchData from "../../../utils/fetchData";
import { AreaChartComponent } from "../charts/AreaChart";
import { ChartOverview, Status, Task } from "../../../utils/types";
import Error404Light from "../../app/assets/icons/error-404-light.svg";
import Error404Dark from "../../app/assets/icons/error-404-dark.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
    let [isLoading, setIsLoading] = useState<boolean>(false);
    let [tasks, setTasks] = useState<ChartOverview[] | []>([]);
    const [timeRange, setTimeRange] = useState<string>("");
    const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({
        completed: 0,
        overdue: 0,
        pending: 0,
        cancelled: 0,
    });
    const filterDataByTimeRange = useCallback(() => {
        let daysToSubtract = 0;
        switch (timeRange) {
            case "7d":
                daysToSubtract = 7;
                break;
            case "14d":
                daysToSubtract = 14;
                break;
            case "30d":
                daysToSubtract = 30;
                break;
            case "364d":
                daysToSubtract = 364;
                break;
            default:
                return tasks;
        }
        return tasks.filter((item) => new Date(item.dueDate) >= new Date(Date.now() - daysToSubtract * 24 * 60 * 60 * 1000));
    }, [timeRange, tasks]);
    const calculateProgress = useCallback(() => {
        const filteredData = filterDataByTimeRange();
        const completedTasks = filteredData.map(task => task.completed).reduce((item,acc)=>acc+=item,0);
        const overdueTasks = filteredData.map(task => task.overdue).reduce((item,acc)=>acc+=item,0);
        const pendingTasks = filteredData.map(task => task.pending).reduce((item,acc)=>acc+=item,0);
        const cancelledTasks = filteredData.map(task => task.cancelled).reduce((item,acc)=>acc+=item,0);
        const totalTasks = completedTasks+overdueTasks+pendingTasks+cancelledTasks;
        setProgressValues({
            completed: (completedTasks / totalTasks) * 100,
            overdue: (overdueTasks / totalTasks) * 100,
            pending: (pendingTasks / totalTasks) * 100,
            cancelled: (cancelledTasks / totalTasks) * 100,
        });
    }, [filterDataByTimeRange]);
    useEffect(() => {
        calculateProgress();
    }, [timeRange, calculateProgress]);
    let { theme } = useTheme();
    return (
        <main className='w-full h-full flex flex-row justify-center items-start flex-wrap' style={{ gap: "15px" }}>
            {
                tasks && tasks.length > 0 ? (
                    <section className='w-auto h-full flex flex-row justify-center items-center flex-wrap'>
                        <div className='w-[200px] h-full flex flex-col justify-center items-center flex-wrap'>
                            <div className="glass-card">
                                <RadialChart
                                    dataSets={tasks}
                                    title="completed"
                                    timeRange={timeRange}
                                    setTimeRange={setTimeRange}
                                    progressValue={progressValues.completed}
                                    filterDataByTimeRange={filterDataByTimeRange}
                                    color="hsl(var(--chart-2))"
                                />
                            </div>
                            <div className="glass-card">
                                <RadialChart
                                    dataSets={tasks}
                                    title="pending"
                                    timeRange={timeRange}
                                    setTimeRange={setTimeRange}
                                    progressValue={progressValues.pending}
                                    filterDataByTimeRange={filterDataByTimeRange}
                                    color="hsl(var(--chart-4))"
                                />
                            </div>
                            <div className="glass-card">
                                <RadialChart
                                    dataSets={tasks}
                                    title="overdue"
                                    timeRange={timeRange}
                                    setTimeRange={setTimeRange}
                                    progressValue={progressValues.overdue}
                                    filterDataByTimeRange={filterDataByTimeRange}
                                    color="hsl(var(--chart-5))"
                                />
                            </div>
                            <div className="glass-card">
                                <RadialChart
                                    dataSets={tasks}
                                    title="cancelled"
                                    timeRange={timeRange}
                                    setTimeRange={setTimeRange}
                                    progressValue={progressValues.cancelled}
                                    filterDataByTimeRange={filterDataByTimeRange}
                                    color="hsl(var(--chart-3))"
                                />
                            </div>
                        </div>
                        <AreaChartComponent dataSets={tasks} />
                    </section>
                ) : (
                    <Image src={theme === "light" ? Error404Dark : Error404Light} alt="data not found" />
                )
            }
        </main>
    );
}