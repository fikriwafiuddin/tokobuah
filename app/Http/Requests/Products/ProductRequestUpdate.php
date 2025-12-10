<?php

namespace App\Http\Requests\Products;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequestUpdate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3|max:25|unique:products,name,' . $this->route('product'),
            'price' => 'required|numeric|min:1',
            'discount' => 'numeric|min:0',
            'stock' => 'integer|min:0',
            'unit' => 'required|string|min:1|max:10',
            'description' => 'string',
            'image' => 'file|mimes:png,jpg,png,webp,jpeg|max:2048|nullable'
        ];
    }
}
