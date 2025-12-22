<?php

namespace App\Http\Controllers;

use App\Http\Requests\Orders\OrderRequestUpdateStatus;
use App\Models\Order;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    protected $orderService;

    public function __construct(OrderService $orderService) {
        $this->orderService = $orderService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = $this->orderService->getAll();
        
        return Inertia::render('admin/orders/index/page', [
            'orders' => $orders
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $order = $this->orderService->getById($id);

        return Inertia::render('admin/orders/show/page', [
            'order' => $order
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $this->orderService->delete($id);

        return to_route('orders.index')->with('success', 'Data pesanan berhasil dihapus');
    }

    public function updateStatus(OrderRequestUpdateStatus $request, int $id)
    {
        $this->orderService->updateStatus($request->validated()['status'], $id);

        return to_route('orders.index')->with('success', 'Status pesanan berhasil diperbarui');
    }
}
