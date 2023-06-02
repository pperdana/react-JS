import Color from "./Color";
import { nanoid } from "nanoid";

const ColorList = ({ colorValues, copyToClipboard }) => {
  return (
    <div className="color-box">
      {colorValues.map((item) => {
        return (
          <Color key={nanoid()} item={item} copyToClipboard={copyToClipboard} />
        );
      })}
    </div>
  );
};

export default ColorList;
