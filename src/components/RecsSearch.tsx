import styled from 'styled-components';
import SearchIcon from './icons/searchIcon';
import React from 'react';

interface RecsSearchTypes {
    title: string;
    selected?: boolean;
    searchValue?: string;
}

const RecsSearch = ({title, selected = false, searchValue}: RecsSearchTypes) => {
    return (
        <RecommendItem className={selected ? 'selected' : ''}>
            <SearchIcon size={16} />
            <span>
                {searchValue ? (
                    title.split(searchValue).map((char, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <span className='bold'>{searchValue}</span>}
                            {char}
                        </React.Fragment>
                    ))
                ) : (
                    <>{title}</>
                )}
            </span>
        </RecommendItem>
    );
};

export default RecsSearch;

const RecommendItem = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover,
    &.selected {
        background-color: rgba(128, 128, 128, 0.1);
    }
    & > span {
        margin-left: 20px;
    }
    .bold {
        font-weight: 800;
    }
`;
