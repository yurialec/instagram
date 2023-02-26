<?php

namespace Database\Seeders;

use App\Models\UserFollower;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserFollowerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserFollower::factory()
            ->count(500)
            ->create();
    }
}
