import axios from "axios"
import { accessToken } from "./moocfi"

const BASE_URL = "https://concepts.cs.helsinki.fi"
const PROJECT_ID = "ck1hjptsc03xo0741gkogie4o"
const COURSE_ID = "ck1hmm9kd08e10741wg3ru17y"

export async function fetchConceptsProgress() {
  const res = await axios.get(
    `${BASE_URL}/api/projects/${PROJECT_ID}/courses/${COURSE_ID}/progress`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken()}`,
      },
    },
  )
  return res.data
}
