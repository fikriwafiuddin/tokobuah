import CartItem from '@/components/cart-item';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UserLayout from '@/layouts/user-layout';
import { formatCurrency, formatWeight } from '@/lib/utils';
import { Cart } from '@/types';
import { Head } from '@inertiajs/react';

type CartPageProps = {
    cart: Cart[];
};

function CartPage({ cart }: CartPageProps) {
    const totalAmout = cart.reduce(
        (total, item) =>
            total +
            (item.product.price - item.product.discount) * item.quantity,
        0,
    );
    const totalWeight = cart.reduce(
        (total, item) => total + item.product.weight * item.quantity,
        0,
    );
    const totalDiscount = cart.reduce(
        (total, item) => total + item.product.discount * item.quantity,
        0,
    );
    const isOutOfStockExists = cart.find(
        (item) => item.quantity > item.product.stock,
    );
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <Head title="Cart">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <UserLayout>
                <section className="min-h-screen space-y-8 px-4 py-8">
                    {cart.length > 0 ? (
                        <>
                            <h2 className="text-center text-2xl font-bold">
                                Keranjang
                            </h2>

                            <div className="flex flex-col items-start gap-4 lg:flex-row">
                                <div className="grid w-full grid-cols-1 gap-2">
                                    {cart.map((item) => (
                                        <CartItem
                                            item={item}
                                            key={item.product_id}
                                        />
                                    ))}
                                </div>
                                <Card className="w-full lg:max-w-72">
                                    <CardHeader>
                                        <CardTitle className="text-center">
                                            Ringkasan
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-[86px_1fr] text-sm font-medium text-muted-foreground">
                                            <span>Total Bobot</span>
                                            <span>
                                                : {formatWeight(totalWeight)}
                                            </span>
                                            <span>Total Diskon</span>
                                            <span>
                                                :{' '}
                                                {formatCurrency(totalDiscount)}
                                            </span>
                                            <span>Total item</span>
                                            <span>: {totalItems}</span>
                                        </div>
                                        <div>
                                            <p className="font-bold">
                                                Total Harga:{' '}
                                                {formatCurrency(totalAmout)}
                                            </p>
                                            <Button
                                                className="w-full"
                                                disabled={!!isOutOfStockExists}
                                            >
                                                Chekcout
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </>
                    ) : (
                        <h2 className="mt-8 text-center text-4xl font-bold text-muted">
                            Keranjang Kosong
                        </h2>
                    )}
                </section>
            </UserLayout>
        </>
    );
}

export default CartPage;
