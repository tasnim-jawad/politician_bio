<?php

namespace App\Modules\Management\ContributeManagement\Contribute\Actions;

class DestroyData
{
    static $model = \App\Modules\Management\ContributeManagement\Contribute\Models\Model::class;

    public static function execute($slug)
    {
        try {

            if (!$data = self::$model::where('slug', $slug)->first()) {
                return messageResponse('Data not found...', $data, 404, 'error');
            }
            $data->forceDelete();
            return messageResponse('Item Successfully deleted', [], 200, 'success');
        } catch (\Exception $e) {
            return messageResponse($e->getMessage(), [], 500, 'server_error');
        }
    }
}