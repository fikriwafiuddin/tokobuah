import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import UserLayout from '@/layouts/user-layout';
import { Head } from '@inertiajs/react';
import {
    ArrowRightIcon,
    CreditCardIcon,
    EyeIcon,
    GlobeIcon,
    LeafIcon,
    ShoppingCartIcon,
    TruckIcon,
} from 'lucide-react';

export default function Home() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <UserLayout>
                <section className="grid grid-cols-1 gap-4 bg-muted p-10 lg:max-h-[400px] lg:grid-cols-2">
                    <div className="relative z-10 order-2 container mx-auto space-y-2 lg:order-1 lg:space-y-4 lg:px-4">
                        <h2 className="text-center font-bold text-primary sm:text-start sm:text-2xl lg:text-4xl">
                            Buah Segar Langsung dari Kebun
                        </h2>
                        <p className="text-center text-xs text-foreground sm:text-start lg:text-start lg:text-base">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eaque itaque numquam ipsa velit voluptates
                            suscipit error voluptatibus corrupti quibusdam aut
                            amet minima distinctio, dolor libero autem laborum,
                            laboriosam sit deleniti.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <Button>
                                <ShoppingCartIcon /> Belanja sekarang
                            </Button>
                        </div>
                    </div>

                    <img
                        src="./hero.jpeg"
                        alt="hero"
                        className="order-1 rounded lg:order-2"
                    />
                </section>

                <section className="p-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Pengiriman Cepat */}
                        <Card className="text-purple-500">
                            <CardContent>
                                <div className="mx-auto w-max rounded-full bg-purple-100 p-2 text-purple-600">
                                    <TruckIcon />
                                </div>
                                <p className="text-center font-medium">
                                    Pengiriman cepat
                                </p>
                            </CardContent>
                        </Card>

                        {/* Banyak Metode Pembayaran */}
                        <Card className="text-yellow-500">
                            <CardContent>
                                <div className="mx-auto w-max rounded-full bg-yellow-100 p-2 text-yellow-600">
                                    <CreditCardIcon />
                                </div>
                                <p className="text-center font-medium">
                                    Pembayaran berbagai bank
                                </p>
                            </CardContent>
                        </Card>

                        {/* Buah Fresh */}
                        <Card className="text-green-500">
                            <CardContent>
                                <div className="mx-auto w-max rounded-full bg-green-100 p-2 text-green-600">
                                    <LeafIcon />
                                </div>
                                <p className="text-center font-medium">
                                    Kualitas buah terbaik
                                </p>
                            </CardContent>
                        </Card>

                        {/* Pengiriman Seluruh Indonesia */}
                        <Card className="text-blue-500">
                            <CardContent>
                                <div className="mx-auto w-max rounded-full bg-blue-100 p-2 text-blue-600">
                                    <GlobeIcon />
                                </div>
                                <p className="text-center font-medium">
                                    Pengiriman seluruh Indonesia
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="space-y-8 bg-muted px-4 py-8">
                    <h2 className="text-center text-2xl font-bold">
                        Produk Terlaris
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Card className="gap-2 overflow-hidden rounded p-0 pb-2">
                            <img
                                className="rounded"
                                src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                            <CardContent className="space-y-2 px-2">
                                <div className="">
                                    <h2 className="text-xl font-semibold text-primary">
                                        Pisang
                                    </h2>
                                    <p className="text-xs text-muted-foreground">
                                        Rp 100.000 / 1kg
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        <EyeIcon />
                                    </Button>
                                    <Button className="w-full">
                                        <ShoppingCartIcon />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="gap-2 overflow-hidden rounded p-0 pb-2">
                            <img
                                className="rounded"
                                src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                            <CardContent className="space-y-2 px-2">
                                <div className="">
                                    <h2 className="text-xl font-semibold text-primary">
                                        Pisang
                                    </h2>
                                    <p className="text-xs text-muted-foreground">
                                        Rp 100.000 / 1kg
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        <EyeIcon />
                                    </Button>
                                    <Button className="w-full">
                                        <ShoppingCartIcon />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="gap-2 overflow-hidden rounded p-0 pb-2">
                            <img
                                className="rounded"
                                src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                            <CardContent className="space-y-2 px-2">
                                <div className="">
                                    <h2 className="text-xl font-semibold text-primary">
                                        Pisang
                                    </h2>
                                    <p className="text-xs text-muted-foreground">
                                        Rp 100.000 / 1kg
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        <EyeIcon />
                                    </Button>
                                    <Button className="w-full">
                                        <ShoppingCartIcon />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="gap-2 overflow-hidden rounded p-0 pb-2">
                            <img
                                className="rounded"
                                src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                            <CardContent className="space-y-2 px-2">
                                <div className="">
                                    <h2 className="text-xl font-semibold text-primary">
                                        Pisang
                                    </h2>
                                    <p className="text-xs text-muted-foreground">
                                        Rp 100.000 / 1kg
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        <EyeIcon />
                                    </Button>
                                    <Button className="w-full">
                                        <ShoppingCartIcon />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-center">
                        <Button variant="outline">
                            Lihat Semua <ArrowRightIcon />
                        </Button>
                    </div>
                </section>

                <section className="space-y-8 px-4 py-8">
                    <h2 className="text-center text-2xl font-bold">
                        Testimoni
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardContent className="space-y-2">
                                <p className="text-xs italic">
                                    "Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Officiis, enim nemo magni
                                    vel autem, aut quas possimus deserunt nam
                                    blanditiis nisi adipisci ipsa officia est,
                                    fugiat sint aperiam! Sequi, veritatis!"
                                </p>
                                <div className="">
                                    <h2 className="font-semibold">Sumanto</h2>
                                    <p className="text-xs">Pegawai</p>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-6 text-primary"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="space-y-2">
                                <p className="text-xs italic">
                                    "Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Officiis, enim nemo magni
                                    vel autem, aut quas possimus deserunt nam
                                    blanditiis nisi adipisci ipsa officia est,
                                    fugiat sint aperiam! Sequi, veritatis!"
                                </p>
                                <div className="">
                                    <h2 className="font-semibold">Sumanto</h2>
                                    <p className="text-xs">Pegawai</p>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-6 text-primary"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="space-y-2">
                                <p className="text-xs italic">
                                    "Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Officiis, enim nemo magni
                                    vel autem, aut quas possimus deserunt nam
                                    blanditiis nisi adipisci ipsa officia est,
                                    fugiat sint aperiam! Sequi, veritatis!"
                                </p>
                                <div className="">
                                    <h2 className="font-semibold">Sumanto</h2>
                                    <p className="text-xs">Pegawai</p>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-6 text-primary"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="space-y-2">
                                <p className="text-xs italic">
                                    "Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Officiis, enim nemo magni
                                    vel autem, aut quas possimus deserunt nam
                                    blanditiis nisi adipisci ipsa officia est,
                                    fugiat sint aperiam! Sequi, veritatis!"
                                </p>
                                <div className="">
                                    <h2 className="font-semibold">Sumanto</h2>
                                    <p className="text-xs">Pegawai</p>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-6 text-primary"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-center">
                        <Button variant="outline">
                            Lihat Semua <ArrowRightIcon />
                        </Button>
                    </div>
                </section>
            </UserLayout>
        </>
    );
}
