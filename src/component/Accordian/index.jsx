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
              Q1.How do I purchase a test kit?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can purchase an Optimists test kit via our website. Simply add
              your test to the cart and checkout.
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
              Q2. Do I have to stop my medication from taking the test?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, we suggest you not discontinue any of your medications or
              supplements. Instead, please mention your medication history to
              the doctor who prescribes the test. For clarifying doubts with
              doctors, we provide you with Free Online Certified Doctor
              Consultation. For further queries or to book a free online doctor
              consultation, WhatsApp us at +91 93429 78509; our dedicated team
              will guide you.
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
              Q3. Is finger prick a government-approved testing method?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, the finger prick is a government-approved testing method, and
              Optimists works with 150+ NABL-accredited labs to provide you with
              accurate results so that you can track your health from the
              privacy of your home. Each test is verified by a qualified doctor
              before you receive your results.
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
              Q4. What will be the fasting time required for a test?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Each test has different requirements. Click on a test to learn
              more about what you need to do before taking the test.
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
              Q5. How long will be the complete process?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It will take approximately 24 hours to get your results and doctor
              note in your personalised dashboard.
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
              Q6. Can I get help taking the test?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, if you would like assistance, select this option on the
              checkout page.
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
              Q7. What do I do after I collect my sample?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Log in to your dashboard and let us know when you want us to
              collect your test kit. Our drivers will collect your sample and
              deliver it to our nearest lab.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* <Grid
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

          <Grid className="Optimistss" sx={{ paddingTop: "50px" }}>
            <img className="appl" style={{ marginRight: "20px" }} src={Apple} />
            <img src={And} />
          </Grid>
        </Grid>
      </Grid> */}
    </>
  );
}
