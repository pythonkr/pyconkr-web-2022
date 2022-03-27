export const media = {
    mobile: (content: string) => `
        @media (max-width: 1080px) {
            ${content}
        }
    `
}
