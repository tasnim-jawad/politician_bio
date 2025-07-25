<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     php artisan migrate --path='/app/Modules/Management/MediaCoverageManagement/MediaCoverage/Database/create_media_coverages_table.php'
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('media_coverages', function (Blueprint $table) {
            $table->id();
            $table->string('video_url', 250)->nullable();
            $table->string('thumbnail_image', 100)->nullable();
            $table->string('title', 30)->nullable();
            $table->date('date')->nullable();
            $table->string('tag', 150)->nullable();

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
        Schema::dropIfExists('media_coverages');
    }
};