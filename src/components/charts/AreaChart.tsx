"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { ChartOverview } from "../../../utils/types";
import Error404Light from "../../app/assets/icons/error-404-light.svg"
import Error404Dark from "../../app/assets/icons/error-404-dark.svg"
import Image from "next/image"
import { useTheme } from "next-themes"
export function AreaChartComponent({
    dataSets
}:{
    dataSets:ChartOverview[]
}) {
    const chartConfig = {
        dueDate:{
            label: "dueDate",
            color: "hsl(var(--chart-1))",
        },
        completed:{
            label: "completed",
            color: "hsl(var(--chart-2))",
        },
        cancelled:{
            label: "cancelled",
            color: "hsl(var(--chart-3))",
        },
        pending:{
            label: "pending",
            color: "hsl(var(--chart-4))",
        },
        overdue:{
            label: "overdue",
            color: "hsl(var(--chart-5))",
        },
    } satisfies ChartConfig
    let {theme} = useTheme()
    return (
        <Card>
            {
                dataSets.length === 0 ? (
                    <>
                        <Image src={theme === "light" ? Error404Light : Error404Dark} alt="data not found"/>
                        <CardContent className="h-[600px] w-[80vw] px-2 pt-4 sm:px-6 sm:pt-6">No data</CardContent>
                    </>
                ) : (
                    <>
                        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                            <div className="grid flex-1 gap-1 text-center sm:text-left">
                                <CardTitle>Tasks overview</CardTitle>
                                <CardDescription>
                                    Take a deep look at the progress of your tasks in a clear way
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="h-[600px] w-[80vw] px-2 pt-4 sm:px-6 sm:pt-6">
                            <ChartContainer
                                config={chartConfig}
                                className="aspect-auto h-full w-full"
                            >
                                <AreaChart data={dataSets} style={{width:"100%",height:"100%"}}>
                                    <defs>
                                        <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="hsl(var(--chart-1))"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="hsl(var(--chart-1))"
                                                stopOpacity={0.1}
                                            />
                                        </linearGradient>
                                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="hsl(var(--chart-2))"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="hsl(var(--chart-2))"
                                                stopOpacity={0.1}
                                            />
                                        </linearGradient>
                                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="hsl(var(--chart-3))"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="hsl(var(--chart-3))"
                                                stopOpacity={0.1}
                                            />
                                        </linearGradient>
                                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="hsl(var(--chart-4))"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="hsl(var(--chart-4))"
                                                stopOpacity={0.1}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="dueDate"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        minTickGap={32}
                                        tickFormatter={(value) => {
                                            const date = new Date(value)
                                            return date.toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            })
                                        }}
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={
                                            <ChartTooltipContent
                                            labelFormatter={(value) => {
                                                return new Date(value).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                })
                                            }}
                                            indicator="dot"
                                            />
                                        }
                                    />
                                    <Area
                                        dataKey="pending"
                                        type="natural"
                                        fill="url(#fillPending)"
                                        stroke="var(--color-pending)"
                                        stackId="a"
                                    />
                                    <Area
                                        dataKey="overdue"
                                        type="natural"
                                        fill="url(#fillOverdue)"
                                        stroke="var(--color-overdue)"
                                        stackId="a"
                                    />
                                    <Area
                                        dataKey="completed"
                                        type="natural"
                                        fill="url(#fillCompleted)"
                                        stroke="var(--color-completed)"
                                        stackId="a"
                                    />
                                    <Area
                                        dataKey="cancelled"
                                        type="natural"
                                        fill="url(#fillCancelled)"
                                        stroke="var(--color-cancelled)"
                                        stackId="a"
                                    />
                                    <ChartLegend content={<ChartLegendContent />} />
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                    </>
                )
            }
        </Card>
    )
}