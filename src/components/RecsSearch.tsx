import styled from 'styled-components';
import SearchIcon from './icons/searchIcon';

interface RecsSearchTypes {
    title: string;
    selected?: boolean;
}

const RecsSearch = ({title, selected = false}: RecsSearchTypes) => {
    return (
        <RecommendItem className={selected ? 'selected' : ''}>
            <SearchIcon size={16} />
            <span>{title}</span>
        </RecommendItem>
    );
};

export default RecsSearch;

const RecommendItem = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    &:hover,
    &.selected {
        background-color: rgba(128, 128, 128, 0.1);
    }
    span {
        margin-left: 20px;
    }
`;
