"use client"

import * as React from "react"
import { cn } from "@dafunda-ui/react-classname-utils"
import { Icon } from "@dafunda-ui/react-icon"

export interface DropZoneProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  description?: string
}

export const DropZone = React.forwardRef<HTMLDivElement, DropZoneProps>(
  (props, ref) => {
    const {
      className,
      placeholder = "Click to upload or drag and drop",
      description = "JPG, JPEG, PNG or WEBP (MAX. 1280x720px)",
      ...rest
    } = props

    const [isDragging, setIsDragging] = React.useState<boolean>(false)

    const handleDragEnter = (event: React.DragEvent<HTMLLabelElement>) => {
      event.preventDefault()
      setIsDragging(true)
    }

    const handleDragLeave = () => {
      setIsDragging(false)
    }

    const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
      event.preventDefault()
    }

    const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
      event.preventDefault()
      setIsDragging(false)

      const files = event.dataTransfer.files

      const inputElement = document.getElementById(
        "dropzone-file",
      ) as HTMLInputElement
      if (inputElement) {
        inputElement.files = files
      }

      event.dataTransfer.clearData()
    }

    return (
      <div
        ref={ref}
        className={cn("flex w-full items-center justify-center", className)}
      >
        <label
          htmlFor="dropzone-file"
          className={`border-border/30 bg-background/5 hover:bg-background/10 flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed ${
            isDragging ? "border-primary" : ""
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <Icon.UploadFile className="text-foreground/40 mb-3 h-10 w-10" />
            <p className="text-foreground/50 mb-2 text-sm">
              <span className="font-semibold">{placeholder}</span>
            </p>
            <p className="text-foreground/50 text-xs">{description}</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple={true}
            {...rest}
          />
        </label>
      </div>
    )
  },
)
