<?php

namespace App\Services;

use App\Models\Cart;

class CartService
{
    public function getAll(int $userId)
    {
        return Cart::with('product')
                ->where('user_id', $userId)
                ->get();
    }

    public function create(int $userId, array $data)
    {
        $cart = Cart::where('user_id', $userId)
                ->where('product_id', $data['product_id'])
                ->first();
        
        if(!$cart) {
            return Cart::create(['user_id' => $userId, ...$data]);
        }

        return $cart->update([
            'quantity' => $cart->quantity + $data['quantity']
        ]);
    }

    public function update(int $userId, array $data)
    {
        return Cart::updateOrCreate(
            [
                'user_id' => $userId,
                'product_id' => $data['product_id']
            ],
            $data
        );
    }

    public function delete(int $userId, int $productId)
    {
        return Cart::where('user_id', $userId)
                ->where('product_id', $productId)
                ->delete();
    }
}