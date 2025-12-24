import ProductCard from '@/components/product-card';
import { Input } from '@/components/ui/input';
import UserLayout from '@/layouts/user-layout';
import { Product } from '@/types';
import { Head } from '@inertiajs/react';
import { SearchIcon } from 'lucide-react';

type ProductsPageProps = {
    products: Product[];
};

function ProductsPage({ products }: ProductsPageProps) {
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
                <section className="mb-40 space-y-8 px-4 py-8">
                    <h1 className="text-center text-2xl font-bold">
                        Produk Kami
                    </h1>

                    <div className="relative h-max">
                        <Input placeholder="Cari" className="pl-10" />
                        <SearchIcon className="absolute top-1.5 left-2 size-6 text-muted-foreground" />
                    </div>

                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {products.map((product) => (
                                <ProductCard
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </div>
                    ) : (
                        <h2 className="text-center text-2xl text-muted">
                            Produk Kosong
                        </h2>
                    )}
                </section>
            </UserLayout>
        </>
    );
}

export default ProductsPage;
