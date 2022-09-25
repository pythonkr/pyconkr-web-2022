export const media = {
    mobile: (content: string) => `
        @media (max-width: 768px) {
            ${content}
        }
    `
}
