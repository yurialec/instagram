<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Post extends Model
{
    use HasFactory;

    protected $filable = [
        'user_id',
        'caption',
        'image'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
