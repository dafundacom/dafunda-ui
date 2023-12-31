import * as React from "react"
import { cn } from "@dafunda-ui/react-classname-utils"

export const Skeleton = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props

  return (
    <div
      className={cn("bg-muted animate-pulse rounded-md", className)}
      {...rest}
    />
  )
}
