"user client";
import { Button } from "react-day-picker"
import { useToast } from "../ui/use-toast"

export const ToastDemo = () => {
    const { toast } = useToast()
    return (
        <Button
            onClick={() => {
            toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
            })
            }}
        >
            Show Toast
        </Button>
    )
}