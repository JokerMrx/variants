import { Node, NodeProps } from "reactflow";

type NodeData = {
  value: number;
};

type CustomNode = Node<NodeData>;

// function CustomNode({ data }: NodeProps<NodeData>) {
function CustomNode() {
  return (
    <div>
      <select>
        <option value="" disabled selected hidden>Select value</option>
        <option value="1">Variant 1</option>
        <option value="2">Variant 2</option>
        <option value="3">Variant 3</option>
        <option value="4">Variant 4</option>
        <option value="5">Variant 5</option>
        <option value="6">Variant 6</option>
      </select>
    </div>
  );
}

export default CustomNode;
