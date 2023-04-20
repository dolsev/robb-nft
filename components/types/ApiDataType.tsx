type ApiDataType = {
    collection_id: number;
    floor_price: number;
    project: {
        display_name: string;
        img_url: string;
        supply: number;
    };
}[];