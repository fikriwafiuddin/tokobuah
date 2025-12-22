import { formatCurrency, formatDate } from '@/lib/utils';
import { Order } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

const columns: ColumnDef<Order>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'customer_name',
        header: 'Nama Pelanggan',
    },
    {
        accessorKey: 'total_amount',
        header: 'Total',
        cell: ({ row }) => formatCurrency(row.original.total_amount),
    },
    {
        accessorKey: 'created_at',
        header: 'Dibuat',
        cell: ({ row }) => formatDate(row.original.created_at),
    },
];

export default columns;
