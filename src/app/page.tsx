"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Container, Button, Typography, Grid, Box } from "@mui/material";
import { ImageWrapper, Highlight, Caption } from "./styled";

type Area = {
  id: string;
  caption: string;
  highlight: string;
  active: string;
};

const areas: Area[] = [
  {
    id: "ruq",
    caption: "Right Upper Quadrant",
    highlight: "ruq-highlight.png",
    active: "ruq-active.png",
  },
  {
    id: "luq",
    caption: "Left Upper Quadrant",
    highlight: "luq-highlight.png",
    active: "luq-active.png",
  },
  {
    id: "rlq",
    caption: "Right Lower Quadrant",
    highlight: "rlq-highlight.png",
    active: "rlq-active.png",
  },
  {
    id: "llq",
    caption: "Left Lower Quadrant",
    highlight: "llq-highlight.png",
    active: "llq-active.png",
  },
  {
    id: "epigastrium",
    caption: "Epigastrium",
    highlight: "epigastrium-highlight.png",
    active: "epigastrium-active.png",
  },
  {
    id: "umbilicus",
    caption: "Umbilicus",
    highlight: "umbilicus-highlight.png",
    active: "umbilicus-active.png",
  },
  {
    id: "suprapubic",
    caption: "Suprapubic",
    highlight: "suprapubic-highlight.png",
    active: "suprapubic-active.png",
  },
];

const imgStyle = {
  position: "relative",
};

export default function Home() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const handleClick = (areaId: string) => {
    setSelectedArea(selectedArea === areaId ? null : areaId);
  };

  return (
    <Container sx={{ width: "100%", height: "100%" }}>
      <Box>
        <Typography variant="h4" align="center" gutterBottom>
          Abdominal Pain Location
        </Typography>
        <ImageWrapper>
          <Image
            src="/pics/default-abs.png"
            alt="Default Abdominal"
            layout="fill"
          />
          {areas.map((area) => (
            <Highlight key={area.id}>
              {selectedArea === area.id && (
                <>
                  <Image
                    src={`/pics/${area.highlight}`}
                    alt={area.caption}
                    layout="fill"
                    objectFit="contain"
                  />
                  <Image
                    src={`/pics/${area.active}`}
                    alt={`alt-${area.caption}`}
                    layout="fill"
                  />
                </>
              )}
            </Highlight>
          ))}
          {selectedArea === "all" && (
            <Image src="/pics/all-over-highlight.png" alt="all" layout="fill" />
          )}
        </ImageWrapper>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {areas.map((area) => (
          <Grid item key={area.id}>
            <Button variant="contained" onClick={() => handleClick(area.id)}>
              {area.caption}
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setSelectedArea("all")}
          >
            Select All
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
