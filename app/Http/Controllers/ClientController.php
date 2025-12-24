<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService) {
        $this->productService = $productService;
    }

    public function home()
    {
        return Inertia::render('user/home');
    }

    public function products()
    {
        $products = $this->productService->getAll();

        return Inertia::render('user/products', [
            'products' => $products
        ]);
    }
}
