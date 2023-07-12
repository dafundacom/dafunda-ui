"use client"

import * as React from "react"
import { Button } from "@dafunda-ui/react-button"
import { Icon } from "@dafunda-ui/react-icon"
import { Textarea } from "@dafunda-ui/react-textarea"

interface EditableParagraphProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  text: string
  onSave: (arg: { id: string; text: string }) => void
  onCancel?: () => void
  isEditing?: boolean
}

export const EditableParagraph = React.forwardRef<
  HTMLDivElement,
  EditableParagraphProps
>((props, ref) => {
  const {
    id,
    text: initialText,
    onSave,
    onCancel,
    isEditing: isEditingProp = false,
  } = props

  const [isEditing, setIsEditing] = React.useState(isEditingProp)
  const [text, setText] = React.useState(initialText)
  const [currentRows, setCurrentRows] = React.useState(1)
  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    setCurrentRows(text.split("\n").length || 1)
  }, [text])

  React.useEffect(() => {
    setIsEditing(isEditingProp)
  }, [isEditingProp])

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleSave = () => {
    setIsEditing(false)
    onSave({
      id,
      text,
    })
  }

  React.useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [isEditing])

  return (
    <div ref={ref} className="flex space-x-1">
      {isEditing ? (
        <Textarea
          rows={currentRows < 1 ? 1 : currentRows > 3 ? 3 : currentRows}
          value={text}
          onChange={handleChange}
          ref={inputRef}
          placeholder="Write text …"
          variant="solid"
        />
      ) : (
        <p
          className="whitespace-pre-line break-all"
          onDoubleClick={handleDoubleClick}
        >
          {text}
        </p>
      )}
      {isEditing && (
        <div className="flex space-x-1">
          <Button
            aria-label="Edit"
            type="button"
            className="flex aspect-square h-10 w-10 items-center justify-center px-1"
            onClick={() => {
              setIsEditing(false)
              if (onCancel) onCancel()
            }}
          >
            <Icon.AccessTime aria-label="Edit" />
          </Button>
          <Button
            aria-label="Save"
            type="button"
            className="flex aspect-square h-10 w-10 items-center justify-center px-1"
            onClick={handleSave}
          >
            <Icon.Save aria-label="Save" />
          </Button>
        </div>
      )}
    </div>
  )
})
