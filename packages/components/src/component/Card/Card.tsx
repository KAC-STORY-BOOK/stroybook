import React from "react";
import { Button, Image, Typography } from "../../designSystem/index";
import "./Card.css";
export interface CardProps {
  title: string;
  content: string;
  src: string;
  alt: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, onClick, alt, src }) => {
  return (
    <div className="card_wrap" onClick={onClick}>
      <Image
        src={src}
        alt={alt}
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
