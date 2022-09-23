export interface IApiTalkItem {
    id: number
    user_name: string
    title: string
    brief: string
    desc: string
    difficulty: string
    duration: string
    language: string
    video_url: string | null
    slide_url: string | null
    video_open_at: string | null
    track_num: number | null
    introduction: string
    category: string
    speaker_profile_img: string
}
