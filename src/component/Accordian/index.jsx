import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import Apple from "../../asset/apple.png";
import And from "../../asset/mobile.png";

export default function SimpleAccordion() {
  return (
    <>
      <div style={{ paddingBottom: "100px" }}>
        <Accordion sx={{ padding: "10px 0" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Q1. Do I have to stop my medication from taking the test?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut.Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut. acus morbi sagittis lacus in. Amet nisl at mauris enim aumel.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ padding: "10px 0" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Q2. Is finger prick a government-approved testing method?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut.Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut. acus morbi sagittis lacus in. Amet nisl at mauris enim aumel.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ padding: "10px 0" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Q3. What will be the fasting time required for a test?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut.Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut. acus morbi sagittis lacus in. Amet nisl at mauris enim aumel.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ padding: "10px 0" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Q4. How long will be the complete process?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut.Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut. acus morbi sagittis lacus in. Amet nisl at mauris enim aumel.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ padding: "10px 0" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Q5. Can get help taking the test?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut.Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut. acus morbi sagittis lacus in. Amet nisl at mauris enim aumel.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ padding: "10px 0" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Q6. What will be the fasting time required for a test?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut.Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut. acus morbi sagittis lacus in. Amet nisl at mauris enim aumel.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ padding: "10px 0" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Q7. How does the Optimists corporate wellness program support the
              business?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut.Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut. acus morbi sagittis lacus in. Amet nisl at mauris enim aumel.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <Grid
        container
        sx={{ background: "#2EB1BE", padding: "50px", borderRadius: "10px" }}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "35px",
              color: "white",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Ready to be an Optimist?
          </Typography>

          <Grid sx={{ paddingTop: "50px" }}>
            <img className="appl" style={{ marginRight: "20px" }} src={Apple} />
            <img src={And} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
