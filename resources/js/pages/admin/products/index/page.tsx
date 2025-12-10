import { DataTable } from '@/components/data-table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { create, index } from '@/routes/products';
import { BreadcrumbItem, Product } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { CheckCircleIcon } from 'lucide-react';
import columns from './columns';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Produk',
        href: index().url,
    },
];

type ProductIndexPageProps = {
    products: Product[];
};

function ProductIndexPage({ products }: ProductIndexPageProps) {
    const { flash } = usePage<{ flash: { success: string } }>().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Produk" />
            <div className="space-y-4 p-4">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                    <h1 className="text-2xl font-bold">Kelola Produk</h1>
                    <Button asChild>
                        <Link href={create()}>Tambah produk +</Link>
                    </Button>
                </div>

                {flash.success && (
                    <Alert>
                        <CheckCircleIcon />
                        <AlertTitle>Success</AlertTitle>
                        <AlertDescription>{flash.success}</AlertDescription>
                    </Alert>
                )}

                <Card>
                    <CardHeader>
                        <CardTitle>List Produk</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={products} />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

export default ProductIndexPage;
