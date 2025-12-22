import { DataTable } from '@/components/data-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { index } from '@/routes/orders';
import { BreadcrumbItem, Order } from '@/types';
import { Head } from '@inertiajs/react';
import columns from './columns';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pesanan',
        href: index().url,
    },
];

type OrderIndexPageProps = {
    orders: {
        links: {
            url: string;
            page: number;
            active: boolean;
        }[];
        data: Order[];
        current_page: number;
    };
};

function OrderIndexPage({ orders }: OrderIndexPageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pesanan" />
            <div className="space-y-4 p-4">
                <h2 className="text-2xl font-bold">Kelola Pesanan</h2>

                <Card>
                    <CardHeader>
                        <CardTitle>List Pesanan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={orders.data} />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

export default OrderIndexPage;
