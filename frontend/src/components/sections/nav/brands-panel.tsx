"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BRANDS } from "@/lib/config";
import {
    megaMenuCardStagger,
    megaMenuCardBgReveal,
    megaMenuCardMediaScale,
    megaMenuCardTextStagger,
    megaMenuCardTextLine,
    megaMenuCardBorderGrow,
    megaMenuCardLinkSlide,
    megaMenuItemReveal,
} from "@/lib/motion";

export function BrandsPanel({ contentEntrance }: { contentEntrance: string }) {
    return (
        <motion.div
            variants={megaMenuCardStagger}
            initial="hidden"
            animate="visible"
            className={cn("mx-auto grid max-w-[1400px] grid-cols-[1fr_1fr_1fr_1fr_220px] gap-4 px-8 py-10 lg:px-12", contentEntrance)}
        >
            {BRANDS.map((brand) => (
                <motion.div key={brand.name} variants={megaMenuCardBgReveal} className="mega-card-5phase">
                    <NavigationMenuLink asChild>
                        <Link
                            href={`/products?brand=${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-charcoal text-white transition-shadow duration-[600ms] ease-[var(--ease)] hover:shadow-warm-xl menu-img-zoom"
                        >
                            {/* Phase 2: Background brand image with ambient zoom + scale-in */}
                            <motion.div variants={megaMenuCardMediaScale} className="absolute inset-0">
                                <Image
                                    src={brand.logo}
                                    alt=""
                                    fill
                                    sizes="(max-width: 1400px) 25vw, 350px"
                                    className="object-cover opacity-15 transition-all duration-[1200ms] ease-[var(--ease)] group-hover:opacity-20"
                                    aria-hidden="true"
                                />
                            </motion.div>

                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 transition-opacity duration-[600ms] ease-[var(--ease)] group-hover:from-black/50 group-hover:via-black/55 group-hover:to-black/75" />

                            {/* Phase 3: Text content with stagger */}
                            <motion.div variants={megaMenuCardTextStagger} className="relative z-10 p-7">
                                {/* Brand logo mark */}
                                <motion.div variants={megaMenuCardTextLine} className="mb-4 flex h-10 items-center">
                                    <Image
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        width={120}
                                        height={36}
                                        className="h-8 w-auto object-contain brightness-200 invert opacity-70 transition-opacity duration-[600ms] ease-[var(--ease)] group-hover:opacity-100"
                                    />
                                </motion.div>

                                <motion.p variants={megaMenuCardTextLine} className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors duration-[600ms] ease-[var(--ease)] group-hover:text-white/60">
                                    {brand.origin} {brand.flag}
                                </motion.p>
                                <motion.h4 variants={megaMenuCardTextLine} className="mt-1.5 text-[1rem] font-bold leading-snug">
                                    {brand.name}
                                </motion.h4>
                                <motion.p variants={megaMenuCardTextLine} className="mt-2 text-[12px] leading-relaxed text-white/45 transition-colors duration-[600ms] ease-[var(--ease)] group-hover:text-white/60">
                                    {brand.category}
                                </motion.p>
                            </motion.div>

                            <div className="relative z-10 p-7 pt-0">
                                {/* Phase 4: Border grow */}
                                <motion.div
                                    variants={megaMenuCardBorderGrow}
                                    className="mb-4 h-px bg-white/15 origin-left"
                                />
                                {/* Phase 5: Link slide */}
                                <motion.span
                                    variants={megaMenuCardLinkSlide}
                                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white/50 transition-all duration-[600ms] ease-[var(--ease)] group-hover:text-white group-hover:translate-x-0.5"
                                >
                                    Explore Brand
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
            <motion.div variants={megaMenuItemReveal} className="flex flex-col justify-between border-l border-border-warm/30 pl-4">
                <motion.div variants={megaMenuCardTextStagger}>
                    <motion.p variants={megaMenuCardTextLine} className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted/50">
                        Looking for Something?
                    </motion.p>
                    <motion.h4 variants={megaMenuCardTextLine} className="mt-2 text-[15px] font-bold leading-snug">
                        Need Help Choosing?
                    </motion.h4>
                    <motion.p variants={megaMenuCardTextLine} className="mt-2 text-[12px] leading-relaxed text-text-muted/60">
                        Our team can help you find the right brand and products for your salon.
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
