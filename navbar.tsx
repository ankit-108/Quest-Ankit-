"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Calendar, Users, LineChart, Monitor, CreditCard, LayoutGrid } from 'lucide-react'

const features = [
  {
    title: "Scheduling",
    description: "Efficient appointment booking and scheduling",
    icon: Calendar,
  },
  {
    title: "Client Management",
    description: "Comprehensive client profiles and tracking",
    icon: Users,
  },
  {
    title: "Analytics",
    description: "Data-driven insights and reporting",
    icon: LineChart,
  },
  {
    title: "Marketing Tools",
    description: "Grow your business with integrated marketing",
    icon: Monitor,
  },
  {
    title: "Payments",
    description: "Secure and flexible payment processing",
    icon: CreditCard,
  },
  {
    title: "Multi-Location",
    description: "Manage multiple business locations",
    icon: LayoutGrid,
  },
]

export function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-red-500">RMax</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-6 w-[600px]">
                    {features.map((feature) => (
                      <Link
                        key={feature.title}
                        href="#"
                        className="flex items-start space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <feature.icon className="h-5 w-5 text-red-500 mt-1" />
                        <div>
                          <div className="font-medium mb-1">{feature.title}</div>
                          <p className="text-sm text-gray-500 leading-tight">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <Link
                        href="#"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-500/50 to-red-500 p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">
                          Industry Solutions
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Discover how RMax can help your specific industry
                        </p>
                      </Link>
                    </li>
                    <ListItem href="#" title="Healthcare">
                      Solutions for healthcare providers
                    </ListItem>
                    <ListItem href="#" title="Sports & Fitness">
                      Tools for trainers and coaches
                    </ListItem>
                    <ListItem href="#" title="Education">
                      Resources for learning institutions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/login" className="text-sm font-medium">
            Login
          </Link>
          <Button className="bg-red-500 hover:bg-red-600">Try For Free</Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = ({ className, title, children, ...props }: React.ComponentPropsWithoutRef<"a"> & { title: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

