<?php

namespace App\Services;

use App\Models\Order;

class OrderService
{
    public function getAll()
    {
        return Order::query()->paginate(10);
    }

    public function getById(int $id)
    {
        return Order::query()->with('orderItems')->findOrFail($id);
    }

    public function update(array $data, int $id)
    {
        $order = $this->getById($id);

        return $order->update($data);
    }

    public function updateStatus(string $status, int $id)
    {
        $order = $this->getById($id);

        $order->status = $status;
        return $order->save();
    }

    public function delete(int $id)
    {
        $order = $this->getById($id);

        return $order->delete();
    }
}