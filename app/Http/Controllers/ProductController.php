<?php

namespace App\Http\Controllers;

use App\Http\Requests\Products\ProductRequestCreate;
use App\Http\Requests\Products\ProductRequestUpdate;
use App\Models\Product;
use App\Services\ProductService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService) {
        $this->productService = $productService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = $this->productService->getAll();

        return Inertia::render('admin/products/index/page', [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/products/create/page');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequestCreate $request)
    {
        $this->productService->create($request->validated());

        return to_route('products.index')->with('success', 'Data produk berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $product = $this->productService->getById($id);

        return Inertia::render('admin/products/show/page', [
            'product' => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(int $id)
    {
        $product = $this->productService->getById($id);

        return Inertia::render('admin/products/update/page', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequestUpdate $request, int $id)
    {
        $this->productService->update($request->validated(), $id);

        return to_route('products.index')->with('success', 'Data produk berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $this->productService->delete($id);

        return to_route('products.index')->with('success', 'Data produk berhasil dihapus');
    }
}
