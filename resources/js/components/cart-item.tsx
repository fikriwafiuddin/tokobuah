import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import useDebounce from '@/hooks/use-debounce';
import { formatCurrency, formatWeight } from '@/lib/utils';
import { destroy, update } from '@/routes/cart';
import { Cart } from '@/types';
import { router, useForm } from '@inertiajs/react';
import { XIcon } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Spinner } from './ui/spinner';

type CartItem = {
    item: Cart;
};

function CartItem({ item }: CartItem) {
    const { submit, processing } = useForm();
    const [quantity, setQuantity] = useState<number>(item.quantity);
    const debouncedQuantity = useDebounce(quantity);

    useEffect(() => {
        if (debouncedQuantity !== quantity) {
            router.post(
                update(item.product_id),
                {
                    _method: 'PATCH',
                    product_id: item.product_id,
                    quantity,
                },
                {
                    preserveScroll: true,
                },
            );
        }
    }, [debouncedQuantity, quantity, item.product_id]);

    const handleDelete = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        submit(destroy(item.product.id), {
            onSuccess: () =>
                toast.success('Item berhasil dihapus dari keranjang'),
            onError: () => toast.error('Error ketika hapus item keranjang'),
        });
    };

    const handleDecrementQuantity = () => {
        if (quantity > 0) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleIncrementQuantity = () => {
        if (quantity < item.product.stock) {
            setQuantity((prev) => prev + 1);
        }
    };

    return (
        <Card className="relative p-0">
            <form onSubmit={handleDelete} className="absolute right-0">
                <Button
                    type="submit"
                    disabled={processing}
                    variant="ghost"
                    size="sm"
                >
                    {processing ? <Spinner /> : <XIcon />}
                </Button>
            </form>

            <CardContent className="flex items-center gap-4 p-2">
                <img
                    className="size-24 rounded"
                    src={`/storage/${item.product.image}`}
                    alt={item.product.name}
                />
                <div className="flex flex-1 flex-col justify-between sm:flex-row">
                    <div className="">
                        <h2 className="font-semibold">{item.product.name}</h2>
                        <p className="text-sm text-muted-foreground">
                            {formatCurrency(item.product.price)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Bobot: {formatWeight(item.product.weight)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Stok: {item.product.stock.toLocaleString()}
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                        <p className="font-medium">
                            Subtotal:{' '}
                            {formatCurrency(
                                (item.product.price - item.product.discount) *
                                    quantity,
                            )}
                        </p>
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleDecrementQuantity}
                                disabled={quantity <= 1}
                            >
                                -
                            </Button>
                            <span>{quantity}</span>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleIncrementQuantity}
                                disabled={quantity >= item.product.stock}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>

            {quantity > item.product.stock && (
                <p className="absolute right-3 bottom-0 text-sm text-destructive">
                    Melebihi stok
                </p>
            )}
        </Card>
    );
}

export default CartItem;
