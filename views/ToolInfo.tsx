import Dropdown from "components/Dropdown";
import InputLabel from "components/InputLabel";
import Pane from "components/Pane";
import Rating from "components/Rating";
import Row from "components/Row";
import Scroll from "components/Scroll";
import Pile from "components/Pile";
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
            Tool
          </span>
          /Svelte
        </Text>
        <Row
          style={{ alignItems: "center", cursor: "pointer" }}
          onClick={goBack}
        >
          <MdArrowBack style={{ fontSize: "1.5rem" }} /> Back
        </Row>
      </Row>
      <Scroll offset={6}>
        <Pile>
          <Text variant="h3">Svelte</Text>
          <Text>
            Id exercitation officia est esse et nulla nostrud et dolor fugiat
            exercitation aute anim. Reprehenderit minim Lorem ea velit nisi
            culpa nulla occaecat adipisicing ipsum. Deserunt sint aliqua culpa
            pariatur. Sit proident aliquip nisi minim et commodo ut elit. Non
            voluptate est ex deserunt. Commodo minim ipsum laborum pariatur.
            Quis fugiat ea laborum cupidatat in qui.
          </Text>
          <Row>
            <InputLabel>Rating: </InputLabel>{" "}
            <Rating value={5} onChange={() => ""} />
          </Row>
          <Row>
            <InputLabel htmlFor="stack">Stack: </InputLabel>{" "}
            <Dropdown
              id="stack"
              list={["Hello", "World"]}
              value="World"
              onChange={(value) => console.log(value)}
            />
          </Row>
        </Pile>
      </Scroll>
    </Pane>
  );
}
