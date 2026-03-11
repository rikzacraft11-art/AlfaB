import type { Metadata } from "next";
import { EducationPageContent } from "@/components/education/education-page-content";
import { PreFooterCTA } from "@/components/sections/pre-footer-cta";

export const metadata: Metadata = {
    title: "Education & Events",
    description:
        "Technical trainings, workshops, and masterclasses for salon and barber professionals. Supported by Alfaparf Milano, Farmavita, Montibello, and Gamma+ Professional.",
    alternates: { canonical: "/education" },
};

export default function EducationPage(): React.JSX.Element {
    return (
        <>
            <EducationPageContent />
            <PreFooterCTA />
        </>
    );
}
