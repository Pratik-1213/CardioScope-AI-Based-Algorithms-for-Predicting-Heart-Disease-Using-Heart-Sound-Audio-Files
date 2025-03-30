
import * as React from "react"

import { cn } from "@/lib/utils"
import { CustomInputProps } from "@/types/inputTypes"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, CustomInputProps {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center", prefix && "gap-2")}>
        {prefix && <div className="flex items-center">{prefix}</div>}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }