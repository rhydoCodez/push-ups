interface IExamCard {
  examType: string
  numberOfExamsTaken: number
}

const ExamCard = ({ examType, numberOfExamsTaken }: IExamCard) => {
  return (
    <div>
      <div className="shadow-xl w-[250px] font-poppins rounded-lg border-2 border-gray-300 px-5 py-3 text-center h-[130px]">
        <div className="flex flex-col">
          <div className="w-full flex items-center justify-center">
            <h3 className="text-sm max-w-[80px]  text-center">{examType}</h3>
          </div>
          <h4 className="text-genius-blue text-6xl font-bold place-items-end">
            {numberOfExamsTaken}
          </h4>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="rounded-full border-2 border-genius-darkBlue px-10 py-2 my-5 max-w-fit">
          View More Details
        </button>
      </div>
    </div>
  )
}

export default ExamCard
