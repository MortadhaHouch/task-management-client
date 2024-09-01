import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Status } from "../../../utils/types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function RadialChart({
    dataSets,
    title,
    timeRange,
    setTimeRange,
    progressValue,
    filterDataByTimeRange,
    color
}: {
    dataSets: any[];
    title: string;
    timeRange: string;
    setTimeRange: React.Dispatch<React.SetStateAction<string>>;
    progressValue: number;
    filterDataByTimeRange: Function;
    color:string
}) {
    const { theme } = useTheme();
    const chartColor = {
        [Status.COMPLETED.toLowerCase()]: "hsl(var(--chart-2))",
        [Status.OVERDUE.toLowerCase()]: "hsl(var(--chart-5))",
        [Status.PENDING.toLowerCase()]: "hsl(var(--chart-4))",
        [Status.CANCELLED.toLowerCase()]: "hsl(var(--chart-3))",
    };
    const chartData = [{ name: title, value: progressValue }];
    const chartConfig: ChartConfig = {
        progress: {
            label: title,
            color: chartColor[title.toLowerCase()] || "hsl(var(--default-color))",
        },
    };

    return (
        <Card className="flex flex-col w-full h-full border-none relative">
            <div className={`absolute top-1 right-1 z-20 ${theme == "light" ? "bg-white" : "bg-black"}`}>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <BsThreeDotsVertical size={20} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={`text-start cursor-pointer p-1 ${theme == "light" ? "bg-white" : "bg-black"}`}>
                        <DropdownMenuItem onClick={() => {
                            setTimeRange("7d");
                            filterDataByTimeRange();
                        }}>
                            Last 7 days
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                            setTimeRange("14d");
                            filterDataByTimeRange();
                        }}>
                            Last 14 days
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                            setTimeRange("30d");
                            filterDataByTimeRange();
                        }}>
                            Last month
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                            setTimeRange("364d");
                            filterDataByTimeRange();
                        }}>
                            Last year
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <CardHeader className="items-center pb-0"></CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[200px]"
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={0}
                        endAngle={progressValue * 360 / 100}
                        innerRadius={60}
                        outerRadius={80}
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke={color}
                            className="first:fill-muted last:fill-background"
                            polarRadius={[60]}
                            innerRadius={60}
                            outerRadius={80}
                            strokeWidth={20}
                        />
                        <RadialBar dataKey="visitors" background cornerRadius={10} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                        <Label
                            content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-foreground text-4xl font-bold"
                                        >
                                        {progressValue.toFixed(1)}%
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 24}
                                            className="fill-muted-foreground"
                                        >
                                        {title}
                                        </tspan>
                                    </text>
                                )
                            }
                            }}
                        />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}