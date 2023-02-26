<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserFollower extends Model
{
    use HasFactory;

    protected $filable = [
        'user_id',
        'follower_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
