import { formatCurrency, formatWeight } from '@/lib/utils';
import { Product } from '@/types';
import { EyeIcon, ShoppingCartIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

type ProductCardProps = {
    product: Product;
};

function ProductCard({ product }: ProductCardProps) {
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
                    <Button className="w-full">
                        <ShoppingCartIcon />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductCard;
