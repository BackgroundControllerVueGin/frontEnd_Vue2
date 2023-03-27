//接口
import request from "../utils/request";

export function deletStudent(studentID) {
  return request.post("/student_delete", studentID);
}
