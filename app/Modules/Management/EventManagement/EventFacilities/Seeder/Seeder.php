<?php
namespace App\Modules\Management\EventManagement\EventFacilities\Seeder;

use Illuminate\Database\Seeder as SeederClass;
use Faker\Factory as Faker;

class Seeder extends SeederClass
{
    /**
     * Run the database seeds.
     php artisan db:seed --class="App\Modules\Management\EventManagement\EventFacilities\Seeder\Seeder"
     */
    static $model = \App\Modules\Management\EventManagement\EventFacilities\Models\Model::class;

    public function run(): void
    {
        $faker = Faker::create();
        self::$model::truncate();

        for ($i = 1; $i <= 100; $i++) {
            self::$model::create([                'event_id' => null,
                'video_url' => $faker->text(250),
                'facility' => json_encode([$faker->word, $faker->word]),
            ]);
        }
    }
}