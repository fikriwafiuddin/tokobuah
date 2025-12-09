<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimony extends Model
{
    protected $fillable = ['customer_name', 'customer_status', 'rating', 'review'];
}
