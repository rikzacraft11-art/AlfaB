"use client";

import Link from "next/link";
import { ArrowRight, Handshake, Store, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
    megaMenuCardStagger,
    megaMenuCardBgReveal,
    megaMenuCardTextStagger,
    megaMenuCardTextLine,
    megaMenuCardBorderGrow,
    megaMenuCardLinkSlide,
    megaMenuItemReveal,
} from "@/lib/motion";

const PARTNERSHIP_ITEMS = [
    {
        title: "Salon Partnership",
        description: "Exclusive pricing, priority access to new products, and dedicated support for your salon.",
        href: "/partnership",
        icon: Store,
    },
    {
        title: "Distribution",
        description: "Become an authorized distributor in your region. Nationwide opportunities available.",
        href: "/partnership",
        icon: Handshake,
    },
    {
        title: "Education Partner",
        description: "Collaborate with Alfa Beauty Academy to host workshops and training programs.",
        href: "/partnership",
        icon: GraduationCap,
    },
];

export function PartnershipPanel({ contentEntrance }: { contentEntrance: string }) {
    return (
        <motion.div
            variants={megaMenuCardStagger}
            initial="hidden"
            animate="visible"
            className={cn("mx-auto grid max-w-[1400px] grid-cols-[1fr_1fr_1fr_220px] gap-px bg-border-warm/20 px-8 py-10 lg:px-12", contentEntrance)}
        >
            {PARTNERSHIP_ITEMS.map((item) => (
                <motion.div key={item.title} variants={megaMenuCardBgReveal} className="mega-card-5phase">
                    <NavigationMenuLink asChild>
                        <Link
                            href={item.href}
                            className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden bg-background p-7 transition-colors duration-[600ms] ease-[var(--ease)] hover:bg-muted/40"
                        >
                            <motion.div variants={megaMenuCardTextStagger}>
                                <motion.div variants={megaMenuCardTextLine} className="flex h-11 w-11 items-center justify-center bg-muted transition-all duration-[600ms] ease-[var(--ease)] group-hover:bg-brand-crimson/10 group-hover:scale-105">
                                    <item.icon className="h-5 w-5 text-muted-foreground transition-colors duration-[600ms] ease-[var(--ease)] group-hover:text-brand-crimson" />
                                </motion.div>
                                <motion.h4 variants={megaMenuCardTextLine} className="mt-5 text-[14px] font-bold leading-snug">{item.title}</motion.h4>
                                <motion.p variants={megaMenuCardTextLine} className="mt-2 text-[12px] leading-relaxed text-muted-foreground/60 transition-colors duration-[600ms] ease-[var(--ease)] group-hover:text-muted-foreground">
                                    {item.description}
                                </motion.p>
                            </motion.div>

                            <div className="mt-5">
                                {/* Phase 4: Border grow */}
                                <motion.div variants={megaMenuCardBorderGrow} className="mb-3 h-px bg-border-warm/40 origin-left" />
                                {/* Phase 5: Link slide */}
                                <motion.span
                                    variants={megaMenuCardLinkSlide}
                                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-foreground/50 transition-all duration-[600ms] ease-[var(--ease)] group-hover:text-foreground group-hover:translate-x-0.5"
                                >
                                    Learn More
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[600ms] ease-[var(--ease)] group-hover:translate-x-0.5" />
                                </motion.span>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-crimson transition-all duration-[800ms] ease-[var(--ease)] group-hover:w-full" />
                        </Link>
                    </NavigationMenuLink>
                </motion.div>
            ))}

            {/* GAP-HDR-03: CTA card embedded in mega-menu */}
            <motion.div variants={megaMenuItemReveal} className="flex flex-col justify-between bg-background p-7">
                <motion.div variants={megaMenuCardTextStagger}>
                    <motion.p variants={megaMenuCardTextLine} className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted/50">
                        Ready to Partner?
                    </motion.p>
                    <motion.h4 variants={megaMenuCardTextLine} className="mt-2 text-[15px] font-bold leading-snug">
                        Get Started Today
                    </motion.h4>
                    <motion.p variants={megaMenuCardTextLine} className="mt-2 text-[12px] leading-relaxed text-text-muted/60">
                        Contact our partnership team to discuss the best option for your business.
                    </motion.p>
                </motion.div>

                <div className="mt-6">
                    <motion.div variants={megaMenuCardBorderGrow} className="mb-4 h-px bg-border-warm/40 origin-left" />
                    <motion.div variants={megaMenuCardLinkSlide}>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60 transition-colors duration-[600ms] hover:text-foreground"
                            >
                                Contact Us
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </NavigationMenuLink>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
