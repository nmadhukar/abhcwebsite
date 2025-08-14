"use client"

import type React from "react"

import { useState, useEffect, useRef, type FC } from "react"
import { MessageSquare, X, Send, User, Bot } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatbotProps {
  apiUrl: string
  botName?: string
  theme?: "blue" | "green" | "red" | "gray"
  position?: "bottom-right" | "bottom-left"
  welcomeMessage?: string
  placeholder?: string
  width?: string
  height?: string
  autoOpen?: boolean
  showBranding?: boolean
  primaryColor?: string
  isEnabled?: boolean
}

interface Message {
  text: string
  sender: "user" | "bot"
}

export const AutumnChatbot: FC<ChatbotProps> = ({
  apiUrl,
  botName = "Chatbot",
  theme = "blue",
  position = "bottom-right",
  welcomeMessage = "Hello! How can I help you today?",
  placeholder = "Type your message...",
  width = "320px",
  height = "450px",
  autoOpen = false,
  showBranding = true,
  primaryColor = "#2c5aa0",
  isEnabled = true,
}) => {
  const [isOpen, setIsOpen] = useState(autoOpen)
  const [messages, setMessages] = useState<Message[]>([{ text: welcomeMessage, sender: "bot" }])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const themeClasses = {
    blue: "bg-blue-600 text-white",
    green: "bg-green-600 text-white",
    red: "bg-red-600 text-white",
    gray: "bg-gray-800 text-white",
  }

  const selectedTheme = themeClasses[theme]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const messageToSend = inputValue.trim()
    if (!messageToSend || isLoading || !apiUrl) return

    const userMessage: Message = { text: messageToSend, sender: "user" }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000) // 15-second timeout

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`)
      }

      const data = await response.json()
      const botMessage: Message = { text: data.reply || "I'm not sure how to respond to that.", sender: "bot" }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      clearTimeout(timeoutId)
      let errorMessageText = "Sorry, I am having trouble connecting. Please try again later."
      if (error instanceof Error && error.name === "AbortError") {
        errorMessageText = "Sorry, the request timed out. Please try again."
      }
      console.error("Chatbot API error:", error)
      const errorMessage: Message = {
        text: errorMessageText,
        sender: "bot",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isEnabled) {
    return null
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className={cn(
            "fixed z-50 flex flex-col bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300",
            position === "bottom-right" ? "bottom-5 right-5" : "bottom-5 left-5",
          )}
          style={{ width, height }}
        >
          {/* Header */}
          <header
            className={cn("flex items-center justify-between p-4 rounded-t-lg", selectedTheme)}
            style={{ backgroundColor: primaryColor }}
          >
            <h3 className="font-bold text-lg">{botName}</h3>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-75">
              <X size={20} />
            </button>
          </header>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn("flex items-start gap-3 my-3", msg.sender === "user" ? "justify-end" : "")}
              >
                {msg.sender === "bot" && (
                  <div className="p-2 bg-gray-200 rounded-full">
                    <Bot size={16} className="text-gray-600" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg",
                    msg.sender === "user" ? selectedTheme : "bg-white border border-gray-200",
                  )}
                  style={{ backgroundColor: msg.sender === "user" ? primaryColor : undefined }}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
                {msg.sender === "user" && (
                  <div className="p-2 bg-gray-200 rounded-full">
                    <User size={16} className="text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 my-3">
                <div className="p-2 bg-gray-200 rounded-full">
                  <Bot size={16} className="text-gray-600" />
                </div>
                <div className="p-3 rounded-lg bg-white border border-gray-200">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
                className="w-full pr-12 pl-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": primaryColor } as React.CSSProperties}
              />
              <button
                type="submit"
                className={cn(
                  "absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full hover:opacity-80 disabled:opacity-50",
                  selectedTheme,
                )}
                style={{ backgroundColor: primaryColor }}
                disabled={isLoading || !inputValue.trim()}
              >
                <Send size={18} />
              </button>
            </div>
            {showBranding && <p className="text-xs text-center text-gray-400 mt-2">Powered by Autumn AI</p>}
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed z-50 p-4 rounded-full shadow-lg text-white hover:opacity-90 transition-transform duration-200",
          selectedTheme,
          position === "bottom-right" ? "bottom-5 right-5" : "bottom-5 left-5",
          isOpen ? "scale-0" : "scale-100",
        )}
        style={{ backgroundColor: primaryColor }}
        aria-label="Toggle Chatbot"
      >
        <MessageSquare size={28} />
      </button>
    </>
  )
}
