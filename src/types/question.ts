export interface IQuestion {
  examType: "UTME" | "POST UTME" | "ACADEMICS"
  subject: string
  question: string
  options: {
    a: string
    b: string
    c: string
    d: string
  }
  answer: string
  solution?: string
  image?: unknown
}
