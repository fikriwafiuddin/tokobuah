<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\OrderItem;

class Order extends Model
{
    protected $fillable = ['customer_name', 'whatsapp_number', 'address', 'notes', 'total_amount', 'status'];

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
