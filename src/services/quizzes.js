import axios from "axios"
import { accessToken } from "./moocfi"
import CourseSettings from "../../course-settings"
import { fetchAbGroup } from "./abstudio"

const id = CourseSettings.default.quizzesId
const language = CourseSettings.default.language

const quizzesLanguage = language === "en" ? "en_US" : "fi_FI"

export async function fetchQuizzesProgress() {
  const response = await axios.get(
    `https://quizzes.mooc.fi/api/v1/courses/${id}/users/current/progress`,
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  let decreaseMaxPoints = 3
  const { group } = await fetchAbGroup("self_evaluation_k19_tikape")
  if (group === 3) {
    decreaseMaxPoints = 2
  }
  console.log("ab group", group)
  let progress = response.data?.points_by_group
  console.log("progress before", progress)

  progress = progress.map(data => {
    data.max_points = data.max_points - decreaseMaxPoints
    return data
  })

  console.log("progress after", progress)

  return progress
}

export async function fetchQuizNames() {
  const response = await axios.get(
    `https://quizzes.mooc.fi/api/v1/quizzes/${id}/titles/${quizzesLanguage}`,
  )
  return response.data
}
