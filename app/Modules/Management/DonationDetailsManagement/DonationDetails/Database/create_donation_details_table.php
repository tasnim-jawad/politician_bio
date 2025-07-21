<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     php artisan migrate --path='/app/Modules/Management/DonationDetailsManagement/DonationDetails/Database/create_donation_details_table.php'
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('donation_details', function (Blueprint $table) {
            $table->id();
            $table->string('author', 50)->nullable();
            $table->datetime('date')->nullable();
            $table->string('title', 100)->nullable();
            $table->longtext('content')->nullable();
            $table->string('target', 100)->nullable();
            $table->string('achived', 100)->nullable();
            $table->string('banner_image', 100)->nullable();

            $table->bigInteger('creator')->unsigned()->nullable();
            $table->string('slug', 50)->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donation_details');
    }
};