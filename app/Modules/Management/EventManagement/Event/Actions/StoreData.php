<?php

namespace App\Modules\Management\EventManagement\Event\Actions;

class StoreData
{
    static $model = \App\Modules\Management\EventManagement\Event\Models\Model::class;

    public static function execute($request)
    {
        try {
            $requestData = $request->validated();

            // Process file uploads for specific fields
            if ($request->hasFile('banner_image')) {
                $file = $request->file('banner_image');
                $requestData['banner_image'] = uploader($file, 'uploads/EventManagement/Event');
            }

            if ($data = self::$model::query()->create($requestData)) {
                return messageResponse('Item added successfully', $data, 201);
            }
        } catch (\Exception $e) {
            return messageResponse($e->getMessage(),[], 500, 'server_error');
        }
    }
}