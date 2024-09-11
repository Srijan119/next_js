







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



const descriptionInfo = [
  {
    title: "Package Name",
    description: "com.erudite.translator",
  },
  {
    title: "Version Name",
    description: "10.2.34",
  },
  {
    title: "Size",
    description: "12.57 MB",
  },
]

 function Apk() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>APK </CardTitle>
        <CardDescription>Apk ion</CardDescription>
      </CardHeader>
      <CardContent>
      <div>
          {descriptionInfo.map((description, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {description.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {description.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button> */}
      </CardFooter>
    </Card>
  )
}


export default Apk