import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { destroy } from '@/routes/products';
import { useForm } from '@inertiajs/react';
import { TrashIcon } from 'lucide-react';
import { FormEvent, useState } from 'react';

type DeleteProductProps = {
    id: number;
};

function DeleteProduct({ id }: DeleteProductProps) {
    const { processing, submit } = useForm();
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        submit(destroy(id));
    };

    return (
        <>
            <Button variant="destructive" onClick={() => setIsOpen(true)}>
                <TrashIcon />
            </Button>
            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Hapus Data Produk</AlertDialogTitle>
                        <AlertDialogDescription>
                            Apakah anda yakin untuk menghapus data produk ini?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <form onSubmit={handleSubmit}>
                            <Button
                                type="submit"
                                disabled={processing}
                                variant="destructive"
                            >
                                {processing ? <Spinner /> : 'Hapus'}
                            </Button>
                        </form>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default DeleteProduct;
