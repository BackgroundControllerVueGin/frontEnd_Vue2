//接口
import request from "../utils/request";

export function getStudentData() {
  return request.get("/student_show");
}
