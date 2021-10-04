import Button from "components/Button";
import Divider from "components/Divider";
import Dropdown from "components/Dropdown";
import InputLabel from "components/InputLabel";
import Note from "components/Note";
import Pane from "components/Pane";
import Row from "components/Row";
import Scroll from "components/Scroll";
import Stack from "components/Stack";
import Text from "components/Text";
import React from "react";
import { MdArrowBack } from "react-icons/md";

export default function ProjectInfo({ goBack }: { goBack: () => void }) {
  const list: number[] = [];
  for (let i = 0; i < 20; i++) {
    list.push(i);
  }
  const notes: number[] = [];
  for (let i = 0; i < 5; i++) {
    notes.push(i);
  }
  return (
    <Pane style={{ flex: 1, padding: "0.2rem", height: "calc(100vh - 8rem)" }}>
      <Row style={{ justifyContent: "space-between" }}>
        <Text>
          <span onClick={goBack} style={{ cursor: "pointer" }}>
            Projects
          </span>
          /Vue-js
        </Text>
        <Row
          style={{ alignItems: "center", cursor: "pointer" }}
          onClick={goBack}
        >
          <MdArrowBack style={{ fontSize: "1.5rem" }} /> Back
        </Row>
      </Row>
      <Scroll offset={6}>
        <Stack>
          <Text variant="h3">Vue js</Text>
          <Text>
            Id exercitation officia est esse et nulla nostrud et dolor fugiat
            exercitation aute anim. Reprehenderit minim Lorem ea velit nisi
            culpa nulla occaecat adipisicing ipsum. Deserunt sint aliqua culpa
            pariatur. Sit proident aliquip nisi minim et commodo ut elit. Non
            voluptate est ex deserunt. Commodo minim ipsum laborum pariatur.
            Quis fugiat ea laborum cupidatat in qui.
          </Text>
          <Divider size={0} style={{ marginBottom: "1rem" }} />
          <InputLabel style={{ fontWeight: "bold" }}>Status</InputLabel>
          <Dropdown list={["Completed", "Ongoing"]} value="Complete" />
          <Text variant="h4">Tools</Text>
          <Row style={{ flexWrap: "wrap" }}>
            {list.map((item) => (
              <Text key={item} style={{ marginRight: "0.4rem" }}>
                -Tool{item}
              </Text>
            ))}
          </Row>
          <Stack style={{ alignItems: "center", marginTop: "0.4rem" }}>
            <Button style={{ marginBottom: "0.2rem" }}>Add Note</Button>
            <Row
              style={{
                flexWrap: "wrap",
                flex: 1,
                justifyContent: "space-evenly",
              }}
            >
              {notes.map((item) => (
                <Note key={item} />
              ))}
            </Row>
          </Stack>
        </Stack>
      </Scroll>
    </Pane>
  );
}
