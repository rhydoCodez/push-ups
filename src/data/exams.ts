interface IExamCard {
  examType: string
  numberOfExamsTaken: number
  
}

const exams: IExamCard[] = [
  {
    examType: "JAMB/UTME",
    numberOfExamsTaken: 38,
   
  },
  {
    examType: "POST JAMB/UTME",
    numberOfExamsTaken: 56,
   
  },
  {
    examType: "ACADEMICS",
    numberOfExamsTaken: 12,
  },
]

export default exams
