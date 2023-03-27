//接口
import request from "../utils/request";

export function addStudent(studentData) {
  return request.post("/student_add", studentData);
}
