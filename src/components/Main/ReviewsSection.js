import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

const ReviewsSection = () => {
  return (
    <ReviewsStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra."
            }
          />
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra."
            }
          />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
};

const ReviewsStyled = styled.section`
  .reviews {
    display: flex;
  }
`;
export default ReviewsSection;
