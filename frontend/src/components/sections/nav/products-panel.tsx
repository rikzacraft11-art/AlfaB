"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "@/lib/config";
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

const CATEGORY_IMAGES: Record<string, string> = {
    "Hair Colour": "/images/brands/alfaparf-milano.webp",
    "Hair Care": "/images/products/montibello-hop/ULTRA REPAIR SHAMPOO/hero.webp",
    "Styling": "/images/products/montibello-hop/FULL VOLUME DRY SHAMPOO/hero.webp",
    "Treatments": "/images/products/montibello-hop/PURIFYING BALANCE SCALP TREATMENT/hero.webp",
    "Tools & Equipment": "/images/products/gamma-plus/XCELL CLIPPER/hero.webp",
    "Barber Essentials": "/images/products/gamma-plus/ABSOLUTE HITTER TRIMMER/hero.webp",
};

const DEFAULT_IMAGE = "/images/products/gamma-plus/XCELL CLIPPER/hero.webp";

export function ProductsPanel({ contentEntrance }: { contentEntrance: string }) {
    const [hoveredImage, setHoveredImage] = React.useState(DEFAULT_IMAGE);

    return (
        <motion.div
            variants={megaMenuCardStagger}
            initial="hidden"
            animate="visible"
            className={cn("mx-auto grid max-w-[1400px] grid-cols-[1.1fr_1fr] gap-0 px-8 py-10 lg:px-12", contentEntrance)}
        >
            {/* Left: Featured product showcase — 5-phase orchestrated + GAP-HDR-02 hover-reactive image */}
            <motion.div variants={megaMenuCardBgReveal} className="relative flex flex-col justify-between overflow-hidden bg-charcoal pr-10 p-8 will-change-clip">
                {/* Phase 2: Media scale-in — image swaps on category hover */}
                <motion.div variants={megaMenuCardMediaScale} className="absolute inset-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={hoveredImage}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 0.2, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={hoveredImage}
                                alt=""
                                fill
                                sizes="50vw"
                                className="object-cover"
                                aria-hidden="true"
                            />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Phase 3: Text stagger */}
                <motion.div variants={megaMenuCardTextStagger} className="relative z-10">
                    <motion.p variants={megaMenuCardTextLine} className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Professional Range
                    </motion.p>
                    <motion.h3 variants={megaMenuCardTextLine} className="mt-2 text-[1.6rem] font-bold leading-tight text-white">
                        Explore Our<br />Product Collection
                    </motion.h3>
                    <motion.p variants={megaMenuCardTextLine} className="mt-3 max-w-[320px] text-[13px] leading-relaxed text-white/50">
                        Curated professional-grade products from the world&apos;s most trusted salon brands.
                    </motion.p>
                </motion.div>

                {/* Phase 4: Border grow */}
                <motion.div variants={megaMenuCardBorderGrow} className="relative z-10 mt-6 h-px bg-white/15 origin-left" />

                {/* Phase 5: Link slide */}
                <motion.div variants={megaMenuCardLinkSlide} className="relative z-10 mt-4">
                    <NavigationMenuLink asChild>
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 transition-colors duration-[600ms] hover:text-white"
                        >
                            View All Products
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                    </NavigationMenuLink>
                </motion.div>
            </motion.div>

            {/* Right: Category grid — staggered item reveals + hover swaps featured image */}
            <div className="grid grid-cols-2 gap-px bg-border-warm/20">
                {PRODUCT_CATEGORIES.map((cat) => (
                    <motion.div key={cat} variants={megaMenuItemReveal}>
                        <NavigationMenuLink asChild>
                            <Link
                                href={`/products?category=${cat.toLowerCase().replace(/\s+&?\s*/g, "-")}`}
                                className="group relative flex min-h-[120px] flex-col justify-end overflow-hidden bg-background p-5 transition-colors duration-[600ms] ease-[var(--ease)] hover:bg-muted/50 menu-img-zoom"
                                onMouseEnter={() => setHoveredImage(CATEGORY_IMAGES[cat] ?? DEFAULT_IMAGE)}
                                onMouseLeave={() => setHoveredImage(DEFAULT_IMAGE)}
                            >
                                {/* Category product image */}
                                <Image
                                    src={CATEGORY_IMAGES[cat] ?? "/images/brands/alfaparf-milano.webp"}
                                    alt=""
                                    width={64}
                                    height={64}
                                    className="absolute right-3 top-3 h-14 w-14 rounded-sm object-cover opacity-15 transition-all duration-[800ms] ease-[var(--ease)] group-hover:opacity-30 group-hover:scale-110"
                                    aria-hidden="true"
                                />

                                <h4 className="text-[13px] font-bold leading-snug">{cat}</h4>
                                <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] text-muted-foreground/60 transition-all duration-[600ms] ease-[var(--ease)] group-hover:text-foreground group-hover:translate-x-0.5">
                                    Browse
                                    <ArrowRight className="h-3 w-3 transition-transform duration-[600ms] ease-[var(--ease)] group-hover:translate-x-0.5" />
                                </span>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-crimson transition-all duration-[800ms] ease-[var(--ease)] group-hover:w-full" />
                            </Link>
                        </NavigationMenuLink>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
