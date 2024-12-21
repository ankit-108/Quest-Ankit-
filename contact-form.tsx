'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [countryCode, setCountryCode] = useState("+91")
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="businessName">
          Business Name<span className="text-red-500">*</span>
        </Label>
        <Input
          id="businessName"
          placeholder="Search for your business listing"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">
          Your Name<span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">
          Phone Number<span className="text-red-500">*</span>
        </Label>
        <div className="flex gap-2">
          <Select value={countryCode} onValueChange={setCountryCode}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Code" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+91">+91</SelectItem>
              <SelectItem value="+1">+1</SelectItem>
              <SelectItem value="+44">+44</SelectItem>
              <SelectItem value="+81">+81</SelectItem>
            </SelectContent>
          </Select>
          <Input
            id="phone"
            type="tel"
            placeholder="98765 43210"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="e.g xyz@gmail.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message<span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Write here your message..."
          className="min-h-[150px]"
          required
        />
      </div>

      <Button type="submit" className="bg-red-500 hover:bg-red-600 w-full sm:w-auto">
        Leave us a Message
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  )
}

