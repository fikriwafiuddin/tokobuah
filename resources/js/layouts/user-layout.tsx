import Footer from '@/components/footer';
import Header from '@/components/header';
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
            </div>
        </>
    );
}

export default UserLayout;
