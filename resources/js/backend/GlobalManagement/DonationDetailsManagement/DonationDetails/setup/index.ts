
import app_config from "@config/app_config";
import setup_type from "./setup_type";

const prefix: string = "DonationDetails";

const setup: setup_type = {
    prefix,
    permission: ["admin", "super_admin"],

    api_host: app_config.api_host,
    api_version: app_config.api_version,
    api_end_point: "donation-details",

    module_name: "donation-details",
    store_prefix: "donation_details",
    route_prefix: "DonationDetails",
    route_path: "donation-details",

    select_fields: [
        "id",
        "author",
            "date",
            "title",
            "content",
            "target",
            "achived",
            "banner_image",
        "status",
        "slug",
        "created_at",
        'deleted_at'
    ],

    sort_by_cols: [
        "id",
        "author",
            "date",
            "title",
            "content",
            "target",
            "achived",
            "banner_image",
        "status",
        "created_at",
    ],
    table_header_data: [
        "id",
        "author",
            "date",
            "title",
            "content",
            "target",
            "achived",
            "banner_image",
        "status",
        "created_at",
    ],
    table_row_data: [
        "id",
        "author",
            "date",
            "title",
            "content",
            "target",
            "achived",
            "banner_image",
        "status",
        "created_at",
    ],
    quick_view_data: [
        "id",
        "author",
            "date",
            "title",
            "content",
            "target",
            "achived",
            "banner_image",
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
