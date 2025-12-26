import { formatCurrency, formatWeight } from '@/lib/utils';
import { store } from '@/routes/cart';
import { Product } from '@/types';
import { useForm } from '@inertiajs/react';
import { EyeIcon, ShoppingCartIcon } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import InputError from './input-error';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Spinner } from './ui/spinner';

type ProductCardProps = {
    product: Product;
};

function ProductCard({ product }: ProductCardProps) {
    const [openFormCart, setOpenFormCart] = useState(false);
    const { submit, errors, processing, data, setData } = useForm({
        product_id: product.id,
        quantity: 1,
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submit(store(), {
            onSuccess: () => {
                toast.success('Produk berhasil masuk ke keranjang');
                setOpenFormCart(false);
            },
            onError: () => {
                toast.success('Error saat menambahkan item ke keranjang');
                setOpenFormCart(false);
            },
        });
    };

    const handleDecrementQuantity = () => {
        if (data.quantity > 1) {
            setData('quantity', data.quantity - 1);
        }
    };

    const handleIncrementQuantity = () => {
        if (data.quantity < product.stock) {
            setData('quantity', data.quantity + 1);
        }
    };

    return (
        <Card className="gap-2 overflow-hidden rounded p-0 pb-2">
            <img
                className="rounded"
                src={`/storage/${product.image}`}
                alt={product.name}
            />
            <CardContent className="space-y-2 px-2">
                <div className="">
                    <h2 className="text-xl font-semibold text-primary">
                        {product.name}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                        {formatCurrency(product.price)} /{' '}
                        {formatWeight(product.weight)}
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="w-full">
                        <EyeIcon />
                    </Button>
                    <Button
                        className="w-full"
                        onClick={() => setOpenFormCart(true)}
                    >
                        <ShoppingCartIcon />
                    </Button>
                </div>
                <Dialog open={openFormCart} onOpenChange={setOpenFormCart}>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <DialogHeader>
                                <DialogTitle>Tambah ke Keranjang</DialogTitle>
                                <DialogDescription>
                                    Menambahkan "{product.name}" ke dalam
                                    keranjang
                                </DialogDescription>
                                <p>
                                    Total:{' '}
                                    {formatCurrency(
                                        (product.price - product.discount) *
                                            data.quantity,
                                    )}
                                </p>
                                <div className="flex gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleDecrementQuantity}
                                    >
                                        -
                                    </Button>
                                    <Input
                                        type="hidden"
                                        name="product_id"
                                        value={data.product_id}
                                    />
                                    <Input
                                        type="number"
                                        name="quantity"
                                        value={data.quantity.toString()}
                                        className="text-center"
                                        onChange={(e) =>
                                            setData(
                                                'quantity',
                                                parseInt(e.target.value),
                                            )
                                        }
                                    />
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleIncrementQuantity}
                                    >
                                        +
                                    </Button>
                                </div>
                                <InputError message={errors.quantity} />
                            </DialogHeader>
                            <DialogFooter className="mt-4">
                                <DialogClose asChild>
                                    <Button variant="outline">Batal</Button>
                                </DialogClose>
                                <Button type="submit" disabled={processing}>
                                    {processing ? <Spinner /> : 'Simpan'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}

export default ProductCard;
