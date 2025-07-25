<?php
namespace App\Modules\Management\NewsManagement\News\Seeder;

use Illuminate\Database\Seeder as SeederClass;
use Faker\Factory as Faker;

class Seeder extends SeederClass
{
    /**
     * Run the database seeds.
     php artisan db:seed --class="App\Modules\Management\NewsManagement\News\Seeder\Seeder"
     */
    static $model = \App\Modules\Management\NewsManagement\News\Models\Model::class;

    public function run(): void
    {
        $faker = Faker::create();
        self::$model::truncate();

        for ($i = 1; $i <= 100; $i++) {
            self::$model::create([                'banner_image' => null,
                'news_category_id' => null,
                'title' => $faker->text(100),
                'content' => $faker->text,
                'tags' => $faker->text(20),
            ]);
        }
    }
}