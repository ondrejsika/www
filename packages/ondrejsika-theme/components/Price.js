import styled from "styled-components";
import default_colors from "@app/ondrejsika-theme/config/colors";

const PriceCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid ${default_colors.LIGHT_GREY};
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  margin-bottom: 2rem;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;

const PriceHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${default_colors.BLUE};
`;

const PriceContent = styled.div`
  padding: 2rem;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 0.75rem;
  }
`;

const Price = (props) => (
  <PriceCard>
    <PriceContent>
      <PriceHeader>{props.PriceHeader}</PriceHeader>
      {props.children}
    </PriceContent>
  </PriceCard>
);

export default Price;
