





import { HiInformationCircle } from "react-icons/hi";

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card"
import { Switch } from "@/components/ui/switch"
import { BellRing } from "lucide-react"

function Licensing() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>mkl,</CardTitle>
        <CardDescription>.</CardDescription>
      </CardHeader>
      <CardContent>

      <div className=" flex items-center space-x-4 rounded-md border p-4">
<HiInformationCircle />
          
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
            </p>
            <p className="text-sm text-muted-foreground">
            </p>
          </div>
          <Switch />
        </div>

        <div className=" flex items-center space-x-4 rounded-md border p-4">
<HiInformationCircle />
          
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
            </p>
            <p className="text-sm text-muted-foreground">
            </p>
          </div>
          <Switch />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
  
      </CardFooter>
    </Card>
  )
}


export default Licensing