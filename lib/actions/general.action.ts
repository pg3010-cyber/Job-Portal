import { dummyInterviews } from "@/constants";

export async function getInterviewsByUserId(userId: string) {
  return dummyInterviews.filter(
    (interview) => interview.userId === userId
  );
}

export async function getLatestInterviews({ userId }: { userId: string }) {
  return dummyInterviews.filter(
    (interview) => interview.userId !== userId
  );
}

export async function getFeedbackByInterviewId({
  interviewId,
  userId,
}: {
  interviewId: string;
  userId: string;
}) {
  return null;
}
