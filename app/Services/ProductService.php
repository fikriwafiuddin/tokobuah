<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ProductService
{
    public function getAll()
    {
        return Product::all();
    }

    public function getById(int $id)
    {
        return Product::findOrFail($id);
    }

    public function create(array $data)
    {
        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            $data['image'] = $this->uploadImage($data['image']);
        }

        return Product::create($data);
    }

    public function delete(int $id)
    {
        $product = $this->getById($id);
        $this->deleteImage($product->image);

        return $product->delete();
    }

    public function update(array $data, int $id)
    {
        $product = $this->getById($id);
        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            $this->deleteImage($product->image);
            
            $data['image'] = $this->uploadImage($data['image']);
        } else {
            $data['image'] = $product->image;
        }

        return $product->update($data);
    }

    private function uploadImage(UploadedFile $image)
    {
        return $image->store('products', 'public');
    }

    private function deleteImage(string $imagePath)
    {
        $relativePath = 'products/' . basename($imagePath);
        if (Storage::disk('public')->exists($relativePath)) {
            Storage::disk('public')->delete($relativePath);
        }
    }
}