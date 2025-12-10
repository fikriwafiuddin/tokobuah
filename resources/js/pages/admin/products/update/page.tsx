import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { edit, index } from '@/routes/products';
import { BreadcrumbItem, Product } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeftIcon } from 'lucide-react';
import FormProduct from '../FormProduct';

const breadcrumbs = (id: number): BreadcrumbItem[] => [
    {
        title: 'Produk',
        href: index().url,
    },
    {
        title: 'Update',
        href: edit(id).url,
    },
];

type ProductUpdatePage = {
    product: Product;
};

function ProductUpdatePage({ product }: ProductUpdatePage) {
    return (
        <AppLayout breadcrumbs={breadcrumbs(product.id)}>
            <Head title="Update Produk" />
            <div className="space-y-4 p-4">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                    <h1 className="text-2xl font-bold">Kelola Produk</h1>
                    <Button asChild>
                        <Link href={index()}>
                            <ArrowLeftIcon /> Kembali
                        </Link>
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Update Produk</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <FormProduct product={product} />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

export default ProductUpdatePage;
