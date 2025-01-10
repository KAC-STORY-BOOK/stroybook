import React from "react";
import { Button, Image, Typography } from "../../designSystem/index";
import "./Card.css";
export interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card_wrap">
      <Image
        src="https://velog.velcdn.com/images/jeromecheon/post/6d52fa92-63f6-4991-a612-ccd6d74a27dc/1111.png"
        alt="이미지"
        width={400}
        height={250}
        borderRadius={"10px 10px 0 0"}
      />
      <div className="bottom_contents">
        <Typography variant="h3" bold>
          {title}
        </Typography>
        <Typography variant="p">{content}</Typography>
        <div className="card_btn">
          <Button>등록하기</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
