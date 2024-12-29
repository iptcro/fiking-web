import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  return (
    <ImageList sx={{ width: "100%" }} variant="quilted" cols={7}>
      {itemData.map((item) => (
        <ImageListItem
          key={"/media/gallery/" + item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset("/media/gallery/" + item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "2022-1.JPG",
    title: "2022-1",
    cols: 2,
  },
  {
    img: "2025-4.jpeg",
    title: "Bike",
  },
  {
    img: "2022-2.JPG",
    title: "Burger",
    cols: 2,
  },

  {
    img: "2023-1.jpg",
    title: "Camera",
    cols: 2,
  },
  {
    img: "2023-3.jpg",
    title: "Hats",
    rows: 2,
    cols: 4,
  },
  {
    img: "2025-3.jpeg",
    title: "Bike",
  },

  {
    img: "2024-1.jpeg",
    title: "Honey",
    author: "@arwinneil",
    cols: 2,
  },
  {
    img: "2025-1.jpg",
    title: "Sea star",
    cols: 3,
    rows: 2,
  },
  {
    img: "2025-5.jpeg",
    title: "Bike",
    rows: 2,
    cols: 2,
  },
  {
    img: "2024-2.jpeg",
    title: "Basketball",
    cols: 2,
  },
  {
    img: "2024-3.jpeg",
    title: "Fern",
  },
  {
    img: "2024-4.jpeg",
    title: "Mushrooms",
    cols: 2,
  },

  {
    img: "2025-2.jpeg",
    title: "Bike",
    cols: 2,
  },
];
