import useExamsData from "./useExamsData";

export default function useUpcomingExams() {
    const exams = useExamsData();

    const today = new Date();
    const oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7);

    return exams.filter((exam) => {
        if (exam.status !== "pending") return false;

        const examDate = new Date(exam.date);
        return examDate >= today && examDate <= oneWeekLater;
    });
}
