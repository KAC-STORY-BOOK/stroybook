import React from "react";
import { Image, Typography } from "../../index";

export interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div>
      <Image
        src="https://cdn.pixabay.com/photo/2024/12/12/18/32/landscape-9263545_1280.jpg"
        alt="이미지"
        width={400}
        height={150}
      />
      <Typography variant="h4">{title}</Typography>
      <Typography variant="p">{content}</Typography>
    </div>
  );
};

export default Card;
