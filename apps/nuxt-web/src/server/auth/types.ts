import type { JWT } from "next-auth/jwt"

export type UserRole = "admin" | string
export type PermissionsType = "" | string

export type ErrorType = "RefreshAccessTokenError"

export type RefreshTokenFunc = (token: JWT) => Promise<JWT>
