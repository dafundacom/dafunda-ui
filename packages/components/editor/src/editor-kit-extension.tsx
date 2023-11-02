"use client"

import { Blockquote } from "@tiptap/extension-blockquote"
import { Bold } from "@tiptap/extension-bold"
import { BulletList } from "@tiptap/extension-bullet-list"
import { CharacterCount } from "@tiptap/extension-character-count"
import { Code } from "@tiptap/extension-code"
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight"
import { Document } from "@tiptap/extension-document"
import { Dropcursor } from "@tiptap/extension-dropcursor"
import { Gapcursor } from "@tiptap/extension-gapcursor"
import { HardBreak } from "@tiptap/extension-hard-break"
import { Heading } from "@tiptap/extension-heading"
import { History } from "@tiptap/extension-history"
import { HorizontalRule } from "@tiptap/extension-horizontal-rule"
import { Image } from "@tiptap/extension-image"
import { Italic } from "@tiptap/extension-italic"
import { Link } from "@tiptap/extension-link"
import { ListItem } from "@tiptap/extension-list-item"
import { OrderedList } from "@tiptap/extension-ordered-list"
import { Paragraph } from "@tiptap/extension-paragraph"
import { Placeholder } from "@tiptap/extension-placeholder"
import { Strike } from "@tiptap/extension-strike"
import { Text } from "@tiptap/extension-text"
import { Underline } from "@tiptap/extension-underline"
import { Youtube } from "@tiptap/extension-youtube"
import { common, createLowlight } from "lowlight"
import { CommandMenu } from "./editor-command-menu"

const lowlight = createLowlight(common)

lowlight.highlight("html", "use strict")
lowlight.highlight("css", "use strict")
lowlight.highlight("js", "use strict")
lowlight.highlight("ts", "use strict")
export const EditorKitExtension = [
  Blockquote,
  Bold,
  BulletList,
  CharacterCount,
  Code,
  CodeBlockLowlight.configure({
    lowlight,
  }) as never,
  Document,
  Dropcursor,
  Gapcursor,
  HardBreak,
  Heading,
  History,
  HorizontalRule,
  Image,
  Italic,
  Link,
  ListItem,
  OrderedList,
  Paragraph,
  Placeholder.configure({
    placeholder: "Write Something or write '/' for open menu",
  }) as never,
  Strike,
  Text,
  Underline,
  Youtube,
  CommandMenu,
]
