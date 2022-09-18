export interface ITalkItem {
    user_name: string
    title: string
    brief: string
    desc: string
    difficulty: string
    duration: string
    language: string
    video_url?: string,
    slide_url?: string,
    video_open_at?: string,
    track_num?: number,
    introduction: string,
    category: string,
    speaker_profile_img?: string
}

export interface ITalkList {
    list: ITalkItem[]
}