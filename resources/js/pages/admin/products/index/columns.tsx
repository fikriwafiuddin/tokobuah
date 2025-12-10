import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { edit, show } from '@/routes/products';
import { Product } from '@/types';
import { Link } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { EditIcon, EyeIcon } from 'lucide-react';
import DeleteProduct from '../DeleteProduct';

const columns: ColumnDef<Product>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Gambar',
        accessorKey: 'image',
        cell: ({ row }) => (
            <img
                src={`/storage/${row.original.image}`}
                alt={row.original.name}
                className="size-8 rounded-sm"
            />
        ),
    },
    {
        header: 'Nama',
        accessorKey: 'name',
    },
    {
        header: 'Harga',
        accessorKey: 'price',
        cell: ({ row }) => formatCurrency(row.original.price),
    },
    {
        accessorKey: 'unit',
        header: 'Unit',
    },
    {
        header: 'Diskon',
        accessorKey: 'discount',
        cell: ({ row }) => formatCurrency(row.original.discount),
    },
    {
        header: 'Stok',
        accessorKey: 'stock',
        cell: ({ row }) => {
            const stock = row.original.stock;
            return stock > 0 ? (
                <Badge>{stock}</Badge>
            ) : (
                <Badge variant="destructive">{stock}</Badge>
            );
        },
    },
    {
        header: 'Aksi',
        cell: ({ row }) => {
            const id = row.original.id;
            return (
                <div className="flex gap-2">
                    <Button variant="outline" asChild>
                        <Link href={show(id)}>
                            <EyeIcon />
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href={edit(id)}>
                            <EditIcon />
                        </Link>
                    </Button>
                    <DeleteProduct id={id} />
                </div>
            );
        },
    },
];

export default columns;
