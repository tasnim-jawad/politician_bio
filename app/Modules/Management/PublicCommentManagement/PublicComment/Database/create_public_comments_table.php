<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     php artisan migrate --path='/app/Modules/Management/PublicCommentManagement/PublicComment/Database/create_public_comments_table.php'
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('public_comments', function (Blueprint $table) {
            $table->id();
            $table->longtext('comment')->nullable();
            $table->string('name', 50)->nullable();
            $table->string('commenter_image', 100)->nullable();

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
        Schema::dropIfExists('public_comments');
    }
};