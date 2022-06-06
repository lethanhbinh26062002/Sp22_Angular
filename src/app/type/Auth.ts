export type TypeLoginRequest = {
    email: string,
    password: string
}
export type TypeLoginResponse = {
    assetToken: string,
    user: {
        _id: string,
        email: string
    }
}