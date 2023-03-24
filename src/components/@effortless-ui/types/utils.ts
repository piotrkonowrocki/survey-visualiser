export type Assign<T, U> = {
  [P in keyof (T & U)]: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never
}
