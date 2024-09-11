import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Application Name",
    description: "Audi Ignite Wallet",
  },
  {
    title: "Short Description",
    description: "Audi Ignite Wallet",
  },
  {
    title: "Long Description",
    description: "Audi Ignite Wallet",
  }

]

type CardProps = React.ComponentProps<typeof Card>

export function Description({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Descriptions</CardTitle>
        <CardDescription>You have 3s.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
  
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
 
    </Card>
  )
}



export default Description