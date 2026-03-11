import type { Metadata } from "next";
import { PartnershipPageContent } from "@/components/partnership/partnership-page-content";
import { FAQSection } from "@/components/sections/faq-section";
import { PreFooterCTA } from "@/components/sections/pre-footer-cta";

export const metadata: Metadata = {
    title: "Become a Partner",
    description:
        "Partner with PT Alfa Beauty Cosmetica. Access trusted global professional haircare brands, technical education, and nationwide distribution support for your salon or barbershop.",
    alternates: { canonical: "/partnership" },
};

export default function PartnershipPage(): React.JSX.Element {
    return (
        <>
            <PartnershipPageContent />
            <FAQSection />
            <PreFooterCTA />
        </>
    );
}
