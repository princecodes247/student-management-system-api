import { UserType, UserTypeWithAdmin } from "../user/type/user.type";

function generateMatricNumber(
  userType: UserTypeWithAdmin | UserType,
  session: number,
  studentCount: number | null // Allow studentCount to be nullable
): string {
  // Function to generate a random four-digit number
  function generateRandomFourDigits() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  // Validate the input arguments
  if (!["UG", "PG"].includes(userType) || isNaN(session)) {
    throw new Error("Invalid userType or session format");
  }

  // Get the current year to determine the session range
  const currentYear = new Date().getFullYear();
  const currentSession = currentYear % 100; // e.g., 2023 % 100 = 23

  // Check if the session is within a valid range (currentSession - 1) to (currentSession + 1)
  if (session < currentSession - 1 || session > currentSession + 1) {
    throw new Error(
      "Invalid session. It should be the current year or the two previous/following years."
    );
  }

  // Determine the year part of the matric number
  const yearPart = currentYear - session + 1;

  // Generate a four-digit number using studentCount + 1 or fallback to generateRandomFourDigits()
  const uniqueNumber =
    studentCount != null
      ? (studentCount + 1).toString().padStart(4, "0")
      : generateRandomFourDigits();

  // Combine the parts to form the matric number
  const matricNumber = `${userType}/${yearPart}/${uniqueNumber}`;

  return matricNumber;
}

export default generateMatricNumber;
