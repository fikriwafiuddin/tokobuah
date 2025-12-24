import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import { store, update } from '@/routes/products';
import { Product } from '@/types';
import { useForm } from '@inertiajs/react';
import { ChangeEvent, FormEvent, useState } from 'react';

type FormProductProps = {
    product?: Product;
};

function FormProduct({ product }: FormProductProps) {
    const { data, setData, submit, processing, errors, isDirty } = useForm<{
        name: string;
        price: string;
        stock: string;
        discount: string;
        weight: string;
        description: string;
        image: null | File;
    }>({
        name: product?.name || '',
        price: product?.price.toString() || '',
        stock: product?.stock.toString() || '',
        discount: product?.discount.toString() || '',
        weight: product?.weight.toString() || '',
        description: product?.description || '',
        image: null,
    });
    const [prevImg, setPrevImg] = useState<null | string>(null);

    const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setData('image', file);
        if (file) {
            setPrevImg(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (product) {
            const formData = new FormData();

            formData.append('_method', 'PUT');
            formData.append('name', data.name);
            formData.append('price', data.price);
            formData.append('discount', data.discount);
            formData.append('stock', data.stock);
            formData.append('weight', data.weight);
            formData.append('description', data.description);
            formData.append('image', data.image as File);

            submit(update(product.id), {
                forceFormData: true,
            });
        } else {
            submit(store());
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <Label htmlFor="name">Nama</Label>
                        <Input
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div>
                        <Label htmlFor="price">Harga</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                        />
                        <InputError message={errors.price} />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <Label htmlFor="stock">Stok</Label>
                        <Input
                            name="stock"
                            id="stock"
                            type="number"
                            value={data.stock}
                            onChange={(e) => setData('stock', e.target.value)}
                        />
                        <InputError message={errors.stock} />
                    </div>
                    <div>
                        <Label htmlFor="discount">Diskon</Label>
                        <Input
                            id="discount"
                            name="discount"
                            type="number"
                            value={data.discount}
                            onChange={(e) =>
                                setData('discount', e.target.value)
                            }
                        />
                        <InputError message={errors.discount} />
                    </div>
                </div>

                <div>
                    <Label htmlFor="weight">Bobot/Unit (gram)</Label>
                    <Input
                        type="number"
                        id="weight"
                        name="weight"
                        value={data.weight}
                        onChange={(e) => setData('weight', e.target.value)}
                    />
                    <InputError message={errors.weight} />
                </div>

                <div>
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                    />
                    <InputError message={errors.description} />
                </div>

                <div>
                    <Label htmlFor="image">Gambar</Label>
                    <Input
                        id="image"
                        name="image"
                        type="file"
                        onChange={handleSelectImage}
                    />
                    <InputError message={errors.image} />
                    {prevImg && (
                        <img
                            src={prevImg}
                            alt="gambar"
                            className="mt-4 size-36 rounded-sm"
                        />
                    )}
                    {product?.image && !prevImg && (
                        <img
                            src={`/storage/${product.image}`}
                            alt="gambar"
                            className="mt-4 size-36 rounded-sm"
                        />
                    )}
                </div>

                <Button disabled={processing || !isDirty}>
                    {processing ? <Spinner /> : 'Simpan'}
                </Button>
            </div>
        </form>
    );
}

export default FormProduct;
