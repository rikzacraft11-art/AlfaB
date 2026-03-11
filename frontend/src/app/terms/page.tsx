import type { Metadata } from "next";
import { TermsPageContent } from "@/components/legal/terms-page-content";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description:
        "Terms and Conditions for PT Alfa Beauty Cosmetica's website and services.",
    alternates: { canonical: "/terms" },
};

export default function TermsPage(): React.JSX.Element {
    return (
        <>
            <TermsPageContent />
        </>
    );
}