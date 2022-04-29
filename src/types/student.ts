export interface IStudent {
  department: string
  subjects: string[]
  examType: "UTME" | "POST UTME" | "ACADEMICS"
  surName: string
  emailAddress: string
  testDuration: number
  examDate: Date
  examTime: Date
}

// pick type of test.. jamb or post jamb.
// pick test times: 9am, 11am, 2am, and dates: 12, 15, 19 etc.
// system picks time and date for students randomly.

// transperency for both ends.
