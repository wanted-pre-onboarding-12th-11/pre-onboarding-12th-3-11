import LoadingSpinner from 'components/LoadingSpinner';
import RecsSearch from 'components/RecsSearch';
import SearchIcon from 'components/icons/searchIcon';
import {EXPIRE_TIME, INPUT_DEBOUNCE_TIME} from 'constants/constants';
import useDebounce from 'hooks/useDebounce';
import useKeyboard from 'hooks/useKeyboard';
import useRecsSearch from 'hooks/useRecsSearch';
import {useState} from 'react';
import styled from 'styled-components';
import {replaceValidKeyword} from 'utils/regex';

const SearchContainer = () => {
    const [value, setValue] = useState('');
    const debounce = useDebounce();
    const {state, getRecsSearch, initSearchState} = useRecsSearch();
    const {data, isLoading, error} = state;
    const {onKeydownFocusing, keyBoardFocusingIdx, initFocusingIdx} = useKeyboard(data.length);
    const searchKeyword =
        data.length && keyBoardFocusingIdx !== null ? data[keyBoardFocusingIdx].sickNm : value;
    const handleInputValue = (value: string) => {
        setValue(value);
        initFocusingIdx();

        if (value.length) {
            debounce(() => {
                getRecsSearch(replaceValidKeyword(value), EXPIRE_TIME);
            }, INPUT_DEBOUNCE_TIME);
        } else {
            initSearchState();
        }
    };
    const handleInputKeydown = (e: React.KeyboardEvent) => {
        onKeydownFocusing(e);
    };
    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setValue('');
        alert(`검색결과: ${searchKeyword}`);
        initSearchState();
        initFocusingIdx();
    };

    return (
        <HomeContainer>
            <HomeHeader>
                국내 모든 임상실험 검색하고 <br /> 온라인으로 참여하기
            </HomeHeader>
            <SearchSection>
                <SearchBarContainer onSubmit={handleOnSubmit}>
                    <SearchIcon size={16} />
                    <input
                        value={value}
                        type='text'
                        onChange={event => handleInputValue(event.target.value)}
                        onKeyDown={event => handleInputKeydown(event)}
                        placeholder='질환명을 입력해 주세요.'
                    />
                    <button type='submit'>
                        <SearchIcon size={21} />
                    </button>
                </SearchBarContainer>
                <RecommendContainer>
                    <RecsSearch title={value} />
                    <SectionTitle>추천 검색어</SectionTitle>
                    {isLoading && <LoadingSpinner />}

                    {data.length !== 0 && !isLoading && value ? (
                        data.map((item, index) => {
                            return (
                                <RecsSearch
                                    title={item.sickNm}
                                    key={item.sickCd}
                                    selected={keyBoardFocusingIdx === index}
                                    searchValue={value}
                                />
                            );
                        })
                    ) : (
                        <>
                            {error ? (
                                <div className='noRecommend'>데이터를 가져오는데 실패했습니다.</div>
                            ) : (
                                <div className='noRecommend'>추천 검색어가 없습니다.</div>
                            )}
                        </>
                    )}
                </RecommendContainer>
            </SearchSection>
        </HomeContainer>
    );
};

export default SearchContainer;

const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;
const HomeHeader = styled.h1`
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    line-height: 1.6;
    margin-bottom: 20px;
`;
const SearchSection = styled.section`
    &:has(input:focus) {
        & > div {
            display: block;
        }
    }
`;
const SearchBarContainer = styled.form`
    width: 490px;
    height: 75px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 10px 25px;
    border-radius: 50px;
    border: none;
    box-sizing: border-box;

    & > svg {
        color: gray;
        flex: none;
    }

    input {
        width: 100%;
        border: none;
        margin-left: 10px;
        font-size: 17px;
        outline: none;
    }
    button {
        color: #ffffff;
        background-color: #007be9;
        border: 0;
        cursor: pointer;
        border-radius: 100%;
        width: 55px;
        height: 48px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
`;

const RecommendContainer = styled.div`
    display: none;
    padding: 20px 0;
    margin-top: 5px;
    width: 490px;
    border-radius: 15px;
    background-color: #ffffff;
    .noRecommend {
        text-align: center;
        color: #a7afb7;
    }
`;

const SectionTitle = styled.div`
    padding: 0 20px;
    margin: 6px 0;
    font-size: 14px;
    font-weight: 700;
    color: #53585d;
`;
