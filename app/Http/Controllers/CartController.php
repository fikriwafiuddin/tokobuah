<?php

namespace App\Http\Controllers;

use App\Http\Requests\Carts\CartRequest;
use App\Models\Cart;
use App\Services\CartService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    private CartService $cartService;

    public function __construct(CartService $cartService) {
        $this->cartService = $cartService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = Auth::user()->id;
        $cart = $this->cartService->getAll($userId);

        return Inertia::render('user/cart', [
            'cart' => $cart
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CartRequest $request)
    {
        $userId = Auth::user()->id;
        $this->cartService->create($userId, $request->validated());

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CartRequest $request, int $id)
    {
        $userId = Auth::user()->id;
        $this->cartService->update($userId, $request->validated());

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $productId)
    {
        $userId = Auth::user()->id;
        $this->cartService->delete($userId, $productId);

        return back();
    }
}
