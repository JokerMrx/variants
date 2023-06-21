import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Node } from "reactflow";

import { INode } from "../../models/INode";
import { getCustomNode } from "./func";

const initialState: INode = {
  nodes: [
    {
      id: "1",
      data: {
        label: getCustomNode()
      },
      position: { x: 0, y: 0 },
      type: "input"
    }
  ]
};

export const counterSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    addNodes: (state, action: PayloadAction<Node>) => {
      state.nodes.push(action.payload);
    },
    removeNodes: (state, action: PayloadAction<string>) => {
      state.nodes = state.nodes.filter(({ id }) => id !== action.payload);
    }
  }
});

export const { addNodes, removeNodes } = counterSlice.actions;

export default counterSlice.reducer;
