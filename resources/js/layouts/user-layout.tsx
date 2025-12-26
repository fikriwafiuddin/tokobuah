import Footer from '@/components/footer';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import { ReactNode } from 'react';

type UserLayoutProps = {
    children: ReactNode;
};

function UserLayout({ children }: UserLayoutProps) {
    return (
        <>
            <Header />
            <div>
                {children}
                <Footer />
                <Toaster position="top-center" />
            </div>
        </>
    );
}

export default UserLayout;
