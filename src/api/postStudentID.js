//接口
import request from "../utils/request";

export function postStudentID(studentID) {
  return request.post("/student_searchID", studentID);
}
