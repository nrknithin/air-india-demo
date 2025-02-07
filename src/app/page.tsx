// import Image from "next/image"
import { CalendarIcon, PlayCircle, Users, Plane, CheckCircle, BanknoteIcon, PercentIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-white px-4 py-12 md:px-6 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-navy-900 lg:text-5xl">
                Flight Delayed?
                <br />
                Get What You Deserve!
              </h1>
              <p className="text-lg text-gray-600">Get up to €600 compensation - Quick, Simple, Risk-free</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="space-y-4">
                <div className="relative">
                  <Input placeholder="Flight Number" className="pl-10" />
                  <Plane className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="relative">
                  <Input placeholder="Number of Passengers" className="pl-10" />
                  <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="relative">
                  <Input placeholder="Date" className="pl-10" />
                  <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <Button className="w-full bg-blue-900 text-lg hover:bg-blue-800">Check For Free Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white px-4 py-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="mt-2 text-gray-600">Don&apos;t Miss Out on Compensation! We Get the Maximum for You.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 h-16 w-16">{benefit.icon}</div>
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-blue-900 px-4 py-12 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kZ9CElThwyGGV3HdD75e1OxcvPcbop.png"
                alt="Airplane landing at sunset"
                fill
                className="object-cover"
              /> */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
              >
                <PlayCircle className="h-16 w-16" />
              </Button>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold">
                Here&apos;s How Easy It Is to Get Your <span className="text-red-500">Compensation</span>
              </h2>
              <p className="text-lg">
                Watch our quick explainer video to understand how you can get your money back in just a few simple
                steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-4 py-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">How It Works</h2>
          <p className="mt-2 text-center text-gray-600">Get Your Compensation in Three Simple Steps</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 h-20 w-20">{step.icon}</div>
                <h3 className="mb-2 font-semibold">Step {index + 1}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white px-4 py-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Customer Reviews & Media Coverage</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{review.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const benefits = [
  {
    icon: <BanknoteIcon className="h-full w-full text-blue-900" />,
    title: "Up to €600 per passenger",
    description: "Maximum compensation for your flight delay",
  },
  {
    icon: <PercentIcon className="h-full w-full text-blue-900" />,
    title: "No Win, No Fee",
    description: "You only pay if we succeed",
  },
  {
    icon: <CheckCircle className="h-full w-full text-blue-900" />,
    title: "Legal Expertise",
    description: "Professional legal team at your service",
  },
  {
    icon: <PercentIcon className="h-full w-full text-blue-900" />,
    title: "98% Success Rate",
    description: "Proven track record of success",
  },
]

const steps = [
  {
    icon: <Plane className="h-full w-full text-blue-900" />,
    description: "Enter your flight details",
  },
  {
    icon: <CheckCircle className="h-full w-full text-blue-900" />,
    description: "We check your eligibility",
  },
  {
    icon: <BanknoteIcon className="h-full w-full text-blue-900" />,
    description: "Receive your compensation",
  },
]

const faqs = [
  {
    question: "How long does the process take?",
    answer: "The process typically takes 2-8 weeks, depending on the airline's response time.",
  },
  {
    question: "What documents do I need?",
    answer: "You'll need your booking confirmation and boarding pass. We'll help you with the rest!",
  },
  {
    question: "Which flights are eligible?",
    answer: "Flights within the EU or operated by EU carriers that were delayed by more than 3 hours.",
  },
  {
    question: "How much can I claim?",
    answer: "You can claim up to €600 per passenger, depending on the flight distance.",
  },
]

const reviews = [
  {
    name: "Sarah Johnson",
    date: "2 days ago",
    content: "Great service! Got my compensation within 3 weeks. The process was super smooth.",
  },
  {
    name: "Michael Brown",
    date: "1 week ago",
    content: "Professional team that knows what they're doing. Highly recommended!",
  },
  {
    name: "Emma Wilson",
    date: "2 weeks ago",
    content: "Wasn't expecting much but they got me €400 for my delayed flight!",
  },
]

