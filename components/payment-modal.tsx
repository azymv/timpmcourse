"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface PaymentMethod {
  id: string
  name: string
  description: string
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "credit-card",
    name: "Credit Card",
    description: "Pay with Visa, Mastercard, or American Express",
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Pay with your PayPal account",
  },
]

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  plan: {
    name: string
    price: number
    period: string
  }
}

export function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("credit-card")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulated payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    onClose()
    // Here you would typically redirect to a success page or show a success message
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-zinc-900 border-zinc-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">Complete your purchase</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-medium text-zinc-400">Selected plan</h3>
              <div className="text-right">
                <div className="text-sm font-medium">{plan.name}</div>
                <div className="text-2xl font-bold">
                  €{plan.price}
                  <span className="text-sm text-zinc-400">/{plan.period}</span>
                </div>
              </div>
            </div>
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="grid gap-4">
              {paymentMethods.map((method) => (
                <Label
                  key={method.id}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 border rounded-lg cursor-pointer transition-colors",
                    selectedMethod === method.id
                      ? "border-blue-600 bg-blue-600/10"
                      : "border-zinc-800 hover:border-zinc-700",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value={method.id} className="border-zinc-700" />
                    <div className="space-y-1">
                      <div className="font-medium">{method.name}</div>
                      <div className="text-sm text-zinc-400">{method.description}</div>
                    </div>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Processing..." : `Pay €${plan.price}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

