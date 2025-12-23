import { resolveUrl } from '@/lib/utils';
import { dashboard, home, login, logout } from '@/routes';
import { NavItem, SharedData } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import {
    MenuIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    XIcon,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

const navItems: NavItem[] = [
    {
        href: home().url,
        title: 'Beranda',
    },
    {
        href: '#',
        title: 'Produk',
    },
    {
        href: '#',
        title: 'Testimoni',
    },
    {
        href: '#',
        title: 'Kontak',
    },
];

function Header() {
    const { auth } = usePage<SharedData>().props;
    const page = usePage();
    const [openSidebarMobile, setOpenSidebarMobile] = useState(false);

    const handleLogout = () => {
        router.flushAll();
        setOpenSidebarMobile(false);
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <nav className="flex items-center justify-between p-4">
                    <h1 className="flex items-center gap-1 text-2xl font-bold text-primary">
                        TokoBuah
                    </h1>
                    <ul className="hidden gap-4 text-sm font-medium lg:flex">
                        {navItems.map((item) => (
                            <li
                                key={item.title}
                                className={`${page.url.startsWith(resolveUrl(item.href)) ? 'text-primary' : ''}`}
                            >
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-4">
                        {auth.user ? (
                            auth.user.role == 'admin' ? (
                                <Button asChild>
                                    <Link href={dashboard()}>Dashboard</Link>
                                </Button>
                            ) : (
                                <>
                                    <ShoppingCartIcon className="size-5" />
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="hidden lg:block">
                                            <UserCircleIcon className="size-5" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    Riwayat transaksi
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={handleLogout}
                                                    className="text-destructive"
                                                    asChild
                                                >
                                                    <Link
                                                        href={logout()}
                                                        className="w-full"
                                                    >
                                                        Logout
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </>
                            )
                        ) : (
                            <Button asChild>
                                <Link href={login()}>Masuk</Link>
                            </Button>
                        )}

                        <MenuIcon
                            className="size-5 lg:hidden"
                            onClick={() => setOpenSidebarMobile(true)}
                        />
                    </div>
                </nav>
            </header>

            <div
                className={`${openSidebarMobile ? 'block lg:hidden' : 'hidden'} fixed top-0 right-0 bottom-0 left-0 z-50 bg-foreground/50`}
            >
                <div className="ml-auto h-full w-1/2 max-w-2xl bg-background">
                    <div className="flex justify-end">
                        <Button
                            variant="ghost"
                            onClick={() => setOpenSidebarMobile(false)}
                        >
                            <XIcon />
                        </Button>
                    </div>
                    <nav className="border-b-2 border-primary pb-4">
                        <ul className="space-y-2 px-4 text-sm font-medium">
                            {navItems.map((item) => (
                                <li
                                    key={item.title}
                                    className={`${page.url.startsWith(resolveUrl(item.href)) ? 'text-primary' : ''}`}
                                >
                                    <Link href={item.href}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {auth.user && auth.user.role == 'user' && (
                        <div className="mt-4 space-y-2 px-2">
                            <Button className="w-full">
                                Riwayat transaksi
                            </Button>
                            <Button
                                onClick={handleLogout}
                                variant="destructive"
                                className="w-full"
                                asChild
                            >
                                <Link href={logout()}>Logout</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Header;
