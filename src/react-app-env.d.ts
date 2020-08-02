declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_URL?: string
    }
  }
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}
