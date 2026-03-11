import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/contact-page-content";
import { PreFooterCTA } from "@/components/sections/pre-footer-cta";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with PT Alfa Beauty Cosmetica. Reach out for product inquiries, partnership opportunities, training information, or general support.",
    alternates: { canonical: "/contact" },
};

export default function ContactPage(): React.JSX.Element {
    return (
        <>
            <ContactPageContent />
            <PreFooterCTA />
        </>
    );
}
