import ProviderComponent from '@/components/layouts/provider-component';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/tailwind.css';
import { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import "slick-carousel/slick/slick.css"; // slick base CSS
import "slick-carousel/slick/slick-theme.css"; // slick theme CSS
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800'],
});
export const metadata: Metadata = {
    title: {
        template: '%s | VRISTO - Multipurpose Tailwind Dashboard Template',
        default: 'Vcon',
    },
};


export default function RootLayout({
    children,
    modal, 
  }: {
    children: React.ReactNode;
    modal: React.ReactNode;
  }) {
    return (
        <html lang="en" className={cairo.className}>
            <body className="min-h-screen flex flex-col">
               <ProviderComponent>
                {children}
                {modal}
                </ProviderComponent>
            </body>
        </html>
    );
}
