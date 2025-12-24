import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { formatCurrency } from '@/lib/utils';
import { edit, index, show } from '@/routes/products';
import { BreadcrumbItem, Product } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeftIcon, EditIcon } from 'lucide-react';
import DeleteProduct from '../DeleteProduct';

const breadcrumbs = (id: number): BreadcrumbItem[] => [
    {
        title: 'Produk',
        href: index().url,
    },
    {
        title: 'Detail',
        href: show(id).url,
    },
];

type ProductShowPageProps = {
    product: Product;
};

function ProductShowPage({ product }: ProductShowPageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs(product.id)}>
            <Head title="Detail Produk" />
            <div className="space-y-4 p-4">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                    <h2 className="text-2xl font-bold">Kelola Produk</h2>
                    <Button asChild>
                        <Link href={index()}>
                            <ArrowLeftIcon /> Kembali
                        </Link>
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Detail Produk</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <div className="place-items-center">
                                <img
                                    src={`/storage/${product.image}`}
                                    className="size-64 rounded-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        {product.name}
                                    </h2>
                                    <p className="font-semibold text-muted-foreground">
                                        {formatCurrency(product.price)}
                                    </p>
                                </div>
                                <div className="grid max-w-40 grid-cols-2 text-sm text-muted-foreground">
                                    <span className="font-medium">Stok</span>
                                    <span>: {product.stock}</span>
                                    <span className="font-medium">Diskon</span>
                                    <span>: {product.discount}</span>
                                    <span className="font-medium">
                                        Bobot/Unit
                                    </span>
                                    <span>: {product.weight}</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    <span className="font-medium">
                                        Deskripsi:
                                    </span>
                                    <p>{product.description || '-'}</p>
                                </div>
                                <div className="flex justify-end gap-2">
                                    <Button asChild>
                                        <Link href={edit(product.id)}>
                                            <EditIcon />
                                        </Link>
                                    </Button>
                                    <DeleteProduct id={product.id} />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

export default ProductShowPage;
