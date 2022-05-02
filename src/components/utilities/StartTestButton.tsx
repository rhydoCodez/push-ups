import Link from "next/link"
import { useRouter } from "next/router"

const StartTestButton = ({ subject }: { subject: string }) => {
  const router = useRouter()

  const handleStartTest = (e: Event) => {
    e.preventDefault()

    router.push("/test/sample-test")
  }
  return (
    <div className="font-poppins flex items-center w-full justify-end mt-3">
      <Link href={`/exam/start-exam/${subject}`}>
        <a
          onClick={(e) => handleStartTest}
          className="text-gray-50 bg-purple-800 py-2 px-3 rounded-md shadow-md"
        >
          Start Test
        </a>
      </Link>
    </div>
  )
}

export default StartTestButton
