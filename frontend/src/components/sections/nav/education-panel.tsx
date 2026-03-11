"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
    megaMenuCardStagger,
    megaMenuCardTextStagger,
    megaMenuCardTextLine,
    megaMenuCardBorderGrow,
    megaMenuCardLinkSlide,
    megaMenuItemReveal,
} from "@/lib/motion";

const EDUCATION_ITEMS = [
    {
        title: "Technical Training",
        description: "Hands-on workshops with industry professionals covering cutting, colouring, and styling techniques.",
        href: "/education",
        icon: BookOpen,
    },
    {
        title: "Product Knowledge",
        description: "Deep-dive sessions on product formulations, application methods, and salon consultation skills.",
        href: "/education",
        icon: BookOpen,
    },
    {
        title: "Business Development",
        description: "Strategic workshops on salon management, marketing, and client retention strategies.",
        href: "/education",
        icon: BookOpen,
    },
    {
        title: "Events & Seminars",
        description: "Industry events, brand launches, and networking opportunities for beauty professionals.",
        href: "/education/events",
        icon: Calendar,
    },
];

export function EducationPanel({ contentEntrance }: { contentEntrance: string }) {
    return (
        <motion.div
            variants={megaMenuCardStagger}
            initial="hidden"
            animate="visible"
            className={cn("mx-auto grid max-w-[1400px] grid-cols-[1fr_auto] gap-10 px-8 py-10 lg:px-12", contentEntrance)}
        >
            {/* Left: Education items — staggered entrance */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {EDUCATION_ITEMS.map((item) => (
                    <motion.div key={item.title} variants={megaMenuItemReveal}>
                        <NavigationMenuLink asChild>
                            <Link
                                href={item.href}
                                className="group flex gap-4 rounded-none p-3 transition-colors duration-[600ms] ease-[var(--ease)] hover:bg-muted/50"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-muted transition-all duration-[600ms] ease-[var(--ease)] group-hover:bg-brand-crimson/10 group-hover:scale-105">
                                    <item.icon className="h-4.5 w-4.5 text-muted-foreground transition-colors duration-[600ms] ease-[var(--ease)] group-hover:text-brand-crimson" />
                                </div>
                                <div>
                                    <h4 className="text-[13px] font-bold leading-snug">{item.title}</h4>
                                    <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground/70 transition-colors duration-[600ms] ease-[var(--ease)] group-hover:text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </motion.div>
                ))}
            </div>

            {/* Right: CTA column — orchestrated entrance */}
            <motion.div
                variants={megaMenuItemReveal}
                className="flex w-[220px] flex-col justify-between border-l border-border-warm/30 pl-8"
            >
                <motion.div variants={megaMenuCardTextStagger}>
                    <motion.p variants={megaMenuCardTextLine} className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                        Alfa Beauty Academy
                    </motion.p>
                    <motion.h4 variants={megaMenuCardTextLine} className="mt-2 text-[15px] font-bold leading-snug">
                        Elevate Your Craft
                    </motion.h4>
                    <motion.p variants={megaMenuCardTextLine} className="mt-2 text-[12px] leading-relaxed text-muted-foreground/60">
                        Professional education programs designed for growth.
                    </motion.p>
                </motion.div>

                {/* Border + Link phases */}
                <div className="mt-6">
                    <motion.div variants={megaMenuCardBorderGrow} className="mb-4 h-px bg-border-warm/40 origin-left" />
                    <motion.div variants={megaMenuCardLinkSlide}>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/education"
                                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60 transition-colors duration-[600ms] hover:text-foreground"
                            >
                                Explore Programs
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 hover:translate-x-0.5" />
                            </Link>
                        </NavigationMenuLink>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
