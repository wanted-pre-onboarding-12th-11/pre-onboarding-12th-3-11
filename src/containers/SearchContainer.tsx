import RecsSearch from 'components/RecsSearch';
import SearchIcon from 'components/icons/searchIcon';
import {EXPIRE_TIME, INPUT_DEBOUNCE_TIME} from 'constants/constants';
import useDebounce from 'hooks/useDebounce';
import useRecsSearch from 'hooks/useRecsSearch';
import {useState} from 'react';
import styled from 'styled-components';
import {isValidKeyword} from 'utils/regex';

const SearchContainer = () => {
    const [value, setValue] = useState('');
    const debounce = useDebounce();
    const {state, getRecsSearch} = useRecsSearch();
    const {data, isLoading, error} = state;

    const handleInputValue = (value: string) => {
        setValue(value);
        if (value.length) {
            debounce(() => {
                isValidKeyword(value) && getRecsSearch(value, EXPIRE_TIME);
            }, INPUT_DEBOUNCE_TIME);
        }
    };
    return (
        <>
            <HomeContainer>
                <HomeHeader>
                    국내 모든 임상실험 검색하고 <br /> 온라인으로 참여하기
                </HomeHeader>
                <SearchSection>
                    <SearchBarContainer>
                        <SearchIcon size={21} />
                        <input
                            value={value}
                            type='text'
                            onChange={event => handleInputValue(event.target.value)}
                            placeholder='질환명을 입력해 주세요.'
                        />
                        <button>
                            <SearchIcon size={16} />
                        </button>
                    </SearchBarContainer>
                    <RecommendContainer>
                        <SectionTitle>추천 검색어</SectionTitle>
                        {data.length !== 0 ? (
                            data.map(item => {
                                return <RecsSearch title={item.sickNm} key={item.sickCd} />;
                            })
                        ) : (
                            <div className='noRecommend'>추천 검색어가 없습니다.</div>
                        )}
                    </RecommendContainer>
                </SearchSection>
            </HomeContainer>
        </>
    );
};

export default SearchContainer;

const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
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
    height: 50px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 10px 10px 10px 25px;
    border-radius: 50px;
    border: none;
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
        width: 48px;
        height: 48px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
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
