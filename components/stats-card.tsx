import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

type StatsCardProps = {
  icon: ReactNode
  title: string
  value: string
  description: string
}

const StatsCard = ({ icon, title, value, description }: StatsCardProps) => {
  return (
    <Card className="bg-slate-800/50 border-purple-500/20 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="mr-4">{icon}</div>
          <div>
            <h3 className="font-medium text-gray-400">{title}</h3>
            <p className="text-3xl font-bold mt-1">{value}</p>
            <p className="text-sm text-gray-400 mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default StatsCard

