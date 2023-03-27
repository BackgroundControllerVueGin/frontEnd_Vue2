var isAuthenticated = false;
export function changeAuthentcated() {
  if (isAuthenticated === false) isAuthenticated = true;
  else isAuthenticated = true;
}
export function status() {
  return isAuthenticated;
}
