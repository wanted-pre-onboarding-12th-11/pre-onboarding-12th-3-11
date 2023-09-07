import styled from 'styled-components';

const SearchContainer = () => {
    return (
        <>
            <HomeContainer>
                <HomeHeader>
                    국내 모든 임상실험 검색하고 <br /> 온라인으로 참여하기
                </HomeHeader>
                <SearchSection>
                    <SearchBarContainer>
                        <input />
                        <button>버튼</button>
                    </SearchBarContainer>
                    <RecommendContainer>
                        <SectionTitle>추천 검색어</SectionTitle>
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
        border: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        background-color: #007be9;
        cursor: pointer;
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
