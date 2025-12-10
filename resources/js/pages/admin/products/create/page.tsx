import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { create, index } from '@/routes/products';
import { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeftIcon } from 'lucide-react';
import FormProduct from '../FormProduct';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Produk',
        href: index().url,
    },
    {
        title: 'Tambah',
        href: create().url,
    },
];

function ProductCreatePage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Produk" />
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
                        <CardTitle>Tambah Produk</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <FormProduct />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

export default ProductCreatePage;
