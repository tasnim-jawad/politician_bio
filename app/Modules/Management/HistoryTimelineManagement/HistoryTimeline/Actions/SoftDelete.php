<?php

namespace App\Modules\Management\HistoryTimelineManagement\HistoryTimeline\Actions;

class SoftDelete
{
    static $model = \App\Modules\Management\HistoryTimelineManagement\HistoryTimeline\Models\Model::class;

    public static function execute()
    {
        try {
            if (!$data = self::$model::where('slug', request()->slug)->first()) {
                return messageResponse('Data not found...', $data, 404, 'error');
            }

            $data->delete();
            return messageResponse('Item Successfully soft deleted', [], 200, 'success');
        } catch (\Exception $e) {
            return messageResponse($e->getMessage(),[], 500, 'server_error');
        }
    }
}