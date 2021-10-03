import Dropdown from "components/Dropdown";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import Rating from "components/Rating";
import SidebarDropdown from "components/SidebarDropdown";
import Textarea from "components/Textarea";
import { useState } from "react";

export default function SidebarCreateTool({ visible }: { visible: boolean }) {
  const [rating, setRating] = useState(0);
  return visible ? (
    <SidebarDropdown>
      <InputLabel htmlFor="name">Name</InputLabel>
      <Input id="name" />
      <InputLabel htmlFor="description">Description</InputLabel>
      <Textarea id="description" />
      <InputLabel htmlFor="rating">Rating</InputLabel>
      <Rating value={rating} onChange={(rating) => setRating(rating)} />
      <InputLabel htmlFor="categories">Categories</InputLabel>
      <Dropdown
        list={["Hello", "World", "Darkness", "My", "Old"]}
        value="Darkness"
        onChange={(e) => console.log(e.target.value)}
      />
    </SidebarDropdown>
  ) : null;
}
