
import app_config from "@config/app_config";
import setup_type from "./setup_type";

const prefix: string = "Course";

const setup: setup_type = {
    prefix,
    permission: ["admin", "super_admin"],

    api_host: app_config.api_host,
    api_version: app_config.api_version,
    api_end_point: "courses",

    module_name: "course",
    store_prefix: "course",
    route_prefix: "Course",
    route_path: "course",

    select_fields: [
        "id",
        "course_category_id",
            "title",
            "image",
            "intro_video",
            "published_at",
            "is_published",
            "what_is_this_course",
            "why_is_this_course",
            "type",
        "status",
        "slug",
        "created_at",
        'deleted_at'
    ],

    sort_by_cols: [
        "id",
        "course_category_id",
            "title",
            "image",
            "intro_video",
            "published_at",
            "is_published",
            "what_is_this_course",
            "why_is_this_course",
            "type",
        "status",
        "created_at",
    ],
    table_header_data: [
        "id",
        "course_category_id",
            "title",
            "image",
            "intro_video",
            "published_at",
            "is_published",
            "what_is_this_course",
            "why_is_this_course",
            "type",
        "status",
        "created_at",
    ],
    table_row_data: [
        "id",
        "course_category_id",
            "title",
            "image",
            "intro_video",
            "published_at",
            "is_published",
            "what_is_this_course",
            "why_is_this_course",
            "type",
        "status",
        "created_at",
    ],
    quick_view_data: [
        "id",
        "course_category_id",
            "title",
            "image",
            "intro_video",
            "published_at",
            "is_published",
            "what_is_this_course",
            "why_is_this_course",
            "type",
        "status",
        "created_at",
    ],

    layout_title: prefix + " Management",
    page_title: `${prefix} Management`,

    all_page_title: "All " + prefix,
    details_page_title: "Details " + prefix,
    create_page_title: "Create " + prefix,
    edit_page_title: "Edit " + prefix,
};

export default setup;
