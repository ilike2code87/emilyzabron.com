import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
    title: "Emily Zabron",
    description: "Software Engineer Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}