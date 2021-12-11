import { useAppSelector } from "../store/hooks";

export const useCollection = () => {
    const matches = useAppSelector((state) => state.matching.matches);
    const preferences = useAppSelector((state) => state.matching.QuestionsInfo);
    const filterSelections = useAppSelector((state) => state.matching.filterSelections);
    const profile = useAppSelector((state) => state.matching.profile);
    return { matches, preferences, filterSelections, profile };
}