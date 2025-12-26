<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [ClientController::class, 'home'])->name('home');
Route::get('/products', [ClientController::class, 'products'])->name('user.products');

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::resource('cart', CartController::class);
});

Route::middleware(['auth', 'verified', 'role:admin'])->prefix('admin')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('products', ProductController::class);

    Route::resource('orders', OrderController::class);
    Route::patch('/orders/updateStatus/{id}', [OrderController::class, 'updateStatus'])
        ->name('orders.updateStatus');
});

require __DIR__.'/settings.php';
