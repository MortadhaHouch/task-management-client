import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AccordionComponent from "@/components/main/Accordion";
import DropDown from "@/components/main/DropDown";
import DrawerDemo from "@/components/main/Drawer";
import ContextMenuComponent from "@/components/main/ContextMenu";
import AlertComponent from "@/components/main/Alert";
import { AlertDialogDemo } from "@/components/main/AlertDialog";
import AvatarComponent from "@/components/main/Avatar";
import { BreadcrumbWithCustomSeparator } from "@/components/main/Breadcrumb";
import { CalendarForm } from "@/components/main/Calendar";
import { CardDemo } from "@/components/main/Card";
import { ChartComponent } from "@/components/main/Chart";
import { CheckboxWithText } from "@/components/main/CheckBox";
import CollapsibleComponent from "@/components/main/Collapsible";
import { ComboboxDemo } from "@/components/main/ComboBox";
import { CommandDialogDemo } from "@/components/main/Command";
import { DatePickerDemo } from "@/components/main/DatePicker";
import { DialogCloseButton } from "@/components/main/Dialog";
import {ProfileForm} from "@/components/main/Form";
import {InputDemo} from "@/components/main/Input";
import MenuBarComponent from "@/components/main/MenuBar";
import NavigationMenu from "@/components/main/Pagination";
import PopOverComponent from "@/components/main/PopOver";
import ProgressComponent from "@/components/main/Progress";
import ResizableAreaComponent from "@/components/main/ResizableArea";
import { ResizableDemo } from "@/components/main/Resizable";
import SelectComponent from "@/components/main/Select";
import SheetComponent from "@/components/main/Sheet";
import SliderComponent from "@/components/main/SliderComponent";
import { SwitchForm } from "@/components/main/Switch";
import { Toast, ToastProvider } from "@/components/ui/toast";
import { DataTableDemo } from "@/components/main/Table";
import { AreaChartComponent } from "@/components/charts/AreaChart";
import { CircularChart } from "@/components/charts/CircularChart";
import { PieChartComponent } from "@/components/charts/PieChart";
import { HoverCardDemo } from "@/components/main/HoverCardComponent";
import ThreeDCardDemo from "@/components/main/ThreeDCard";
import React from "react";
import { BackgroundBeamsDemo } from "@/components/main/Beam";
import { GlobeDemo } from "@/components/main/Globe";
import { CoverDemo } from "@/components/main/HighLight";
import { ExpandableCardDemo } from "@/components/main/ExpandableCardDemo";
import { MultiStepLoaderDemo } from "@/components/main/MultiStepLoaderDemo";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import {CookiesProvider} from "react-cookie"
import Home from "./home/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body className={"dark w-screen h-screen"}>
        {/* <AlertDialogDemo/>
        <AvatarComponent/>
        <BreadcrumbWithCustomSeparator/>
        <CalendarForm/>
        <CardDemo/>
        <ChartComponent/>
        <CheckboxWithText/>
        <CollapsibleComponent/>
        <ComboboxDemo/>
        <CommandDialogDemo/>
        <ContextMenuComponent/>
        <DatePickerDemo/>
        <DialogCloseButton/>
        <DropDown/>
        <HoverCardDemo/>
        <DrawerDemo/>
        <ProfileForm/>
        <InputDemo/>
        <PopOverComponent/>
        <ProgressComponent/>
        <ResizableAreaComponent/>
        <ResizableDemo/>
        <SelectComponent/>
        <SheetComponent/>
        <SliderComponent/>
        <SwitchForm/>
        <ToastProvider>
          <Toast/>
        </ToastProvider>
        <DataTableDemo/>
        {/* <AreaChartComponent/>
        <CircularChart/>
        <PieChartComponent/> */}
        {/* <ThreeDCardDemo/>
        <BackgroundBeamsDemo/>
        <GlobeDemo/>
        <CoverDemo/>
        <ExpandableCardDemo/>
        <MultiStepLoaderDemo/> */}

        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
