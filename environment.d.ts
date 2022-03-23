declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SENDINBLUE_USERNAME: string
      SENDINBLUE_PASSWORD: string
      SENDINBLUE_SEND_TO: string
    }
  }
}

export {}
