export class CreateApiLogDto {
    user_id: number;
    api: string;
    method: string;
    request_body: string;
    request_query: string;
    response_body: string;
    spend_time: number;
}
