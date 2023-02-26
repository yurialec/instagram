<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('username')->after('id');
            $table->string('image')->after('username');
            $table->string('bio')->after('image');
            $table->string('website')->after('bio');
            $table->string('phone')->after('website');
            $table->string('password')->after('phone');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('username');
            $table->dropColumn('image');
            $table->dropColumn('bio');
            $table->dropColumn('website');
            $table->dropColumn('phone');
            $table->dropColumn('password');
        });
    }
};
