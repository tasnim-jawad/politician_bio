<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     php artisan migrate --path='/app/Modules/Management/ProjectPlaningManagement/ProjectPlaning/Database/create_project_planings_table.php'
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('project_planings', function (Blueprint $table) {
            $table->id();
            $table->json('planing_staps')->nullable();
            $table->json('statistics')->nullable();

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
        Schema::dropIfExists('project_planings');
    }
};