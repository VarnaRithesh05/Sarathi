'use client'

import { chatbotSupport } from '@/ai/flows/chatbot-support'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { Bot, Send, User, Loader2 } from 'lucide-react'
import { useState, useRef, useEffect, type FormEvent } from 'react'

type Message = {
  id: string
  text: string
  sender: 'user' | 'bot'
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I am the Unity support bot. How can I assist you today? You can ask me questions in your regional language.",
      sender: 'bot',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleSend = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const result = await chatbotSupport({
        query: input,
        language: 'english',
      })
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: result.response,
        sender: 'bot',
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Chatbot error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I couldn't process your request right now. Please try again later.",
        sender: 'bot',
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
      }
    }, 100)
  }, [messages])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-100"
          size="icon"
          aria-label="Open Chatbot"
        >
          <Bot className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-headline">AI Support Chatbot</SheetTitle>
          <SheetDescription>
            Get instant help and information. Supports multiple languages.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="-mx-6 flex-1 px-6">
            <div className="space-y-6 py-6">
            {messages.map((msg) => (
                <div
                key={msg.id}
                className={cn(
                    'flex items-start gap-3',
                    msg.sender === 'user' && 'flex-row-reverse'
                )}
                >
                <Avatar className="h-8 w-8">
                    <AvatarFallback>
                    {msg.sender === 'user' ? <User /> : <Bot />}
                    </AvatarFallback>
                </Avatar>
                <div
                    className={cn(
                    'max-w-[80%] rounded-lg p-3 text-sm',
                    msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                >
                    {msg.text}
                </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback>
                            <Bot />
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center space-x-2 rounded-lg bg-muted p-3">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm text-muted-foreground">Thinking...</span>
                    </div>
                </div>
            )}
            </div>
          <div ref={scrollAreaRef} />
        </ScrollArea>
        <form onSubmit={handleSend} className="flex gap-2 border-t pt-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
            autoFocus
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}
