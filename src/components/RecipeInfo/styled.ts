import styled from 'styled-components';
import { COLORS } from '@constants';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 1440px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    width: 40%;
    background-color: ${({ theme }) => theme.recipeBackground};
    margin-top: 100px;
    padding: 75px 35px 75px 95px;
    flex-direction: column;
    border-radius: 28px;

    @media (max-width: 1440px) {
        width: 60%;
        margin-top: 30px;
    }

    @media (max-width: 860px) {
        padding: 35px 20px 35px 20px;
    }
`;

export const MealType = styled.div`
    color: ${({ theme }) => theme.type};
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2.21px;
`;

export const Label = styled.div`
    font-family: 'Playfair Display';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${({ theme }) => theme.title};

    @media (max-width: 1024px) {
        font-size: 30px;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${COLORS.white};
`;

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    margin-top: 40px;

    @media (max-width: 860px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Info = styled.div`
    color: ${({ theme }) => theme.title};
    font-family: Poppins;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const IngredientContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.ingredientBackground};
    margin-top: 50px;
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0);
`;

export const Ingredients = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 25px;
`;

export const Circle = styled.div`
    border: 2px solid ${({ theme }) => theme.ingredientColor};
    border-radius: 50%;
    min-width: 20px;
    height: 20px;
`;

export const Ingredient = styled.div`
    color: ${({ theme }) => theme.ingredientColor};
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    gap: 30px;
`;

export const Title = styled.div`
    font-family: 'Playfair Display';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    color: ${({ theme }) => theme.title};
`;

export const ProductContainer = styled.div`
    width: 100%;
    margin-top: 25px;
`;

export const Products = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
    gap: 40px;
    margin-top: 30px;
`;

export const ProductImage = styled.img`
    border-radius: 20px;
    width: 163px;
    height: 163px;
`;

export const LinkContainer = styled.div`
    width: 100%;
    margin-top: 100px;
`;

export const ShadowLink = styled.a`
    font-family: 'Playfair Display';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    color: ${({ theme }) => theme.title};
    transition:
        color 0.3s ease,
        text-shadow 0.3s ease;

    &:hover {
        color: #357ab8;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
`;

export const RecipeImage = styled.img`
    width: 30%;
    border-radius: 20px;

    @media (max-width: 1440px) {
        margin-top: 70px;
        width: 30%;
    }

    @media (max-width: 1024px) {
        margin-top: 70px;
        width: 40%;
    }

    @media (max-width: 580px) {
        margin-top: 70px;
        width: 60%;
    }
`;

export const IngredientInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
