"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, Dog, Dribbble, Flag, ThumbsUp, Vote } from "lucide-react";
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const tools = [
    {
        label: "GOP Primary 2024",
        icon: Vote,
        color: "text-red-800",
        bgColor: "bg-red-500/10",
        href: "/gop2024"
    },
    {
        label: "Biden Approval Rating",
        icon: ThumbsUp,
        color: "text-blue-700",
        bgColor: "bg-blue-700/10",
        href: "/biden"
    },
    {
        label: "Cats vs Dogs",
        icon: Dog,
        color: "text-brown-700",
        bgColor: "bg-green-700/10",
        href: "/catdog"
    },
    {
        label: "NBA Finals 2024",
        icon: Dribbble,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        href: "/nba2024"
    },
    {
        label: "Favorite Country",
        icon: Flag,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: "/country"
    },

]
const DashboardPage = () => {

    const router = useRouter()

    return (
        <div>
        <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mt-5">
                Welcome to Polls Now
            </h2>
            <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                Become a part of the POLLS NOW.
            </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
            {tools.map((tool) => (
                <Card
                onClick={() => router.push(tool.href)}
                key={tool.href}
                className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                >
                <div className="flex items-center gap-x-4">
                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                        <tool.icon className={cn("w-8 h-8", tool.color)} />
                    </div>
                    <div className="font-semibold">
                        {tool.label}
                    </div>
                </div>
                <ArrowRight className="w-5 h-5"/>
                </Card>
            ))}
        </div>
        </div>
    )
}

export default DashboardPage;
