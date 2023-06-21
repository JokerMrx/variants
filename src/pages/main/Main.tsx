import { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  FitViewOptions,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  NodeTypes
  //   NodeChange,
  //   EdgeChange,
  //   Connection,
} from "reactflow";
import "reactflow/dist/style.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import CustomNode from "../../components/node/CustomNode";

const initialEdges: Edge[] = [
  { id: "1-2", source: "1", target: "2", type: "smoothstep" }
];

const fitViewOptions: FitViewOptions = {
  padding: 0.2
};

const nodeTypes: NodeTypes = {
  custom: CustomNode
};

const Main = () => {
  const nodesStore = useAppSelector(state => state.nodes.nodes);
  const dispatch = useAppSelector(state => state.nodes);

  const [nodes, setNodes] = useState<Node[]>(nodesStore);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  console.log({nodes});

  //   const { getNodes, getEdges } = useReactFlow<NodeData, EdgeData>();

  const onNodesChange: OnNodesChange = useCallback(
    changes => setNodes(nds => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    changes => setEdges(eds => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect: OnConnect = useCallback(
    connection => setEdges(eds => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ReactFlow
        nodes={nodesStore}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={fitViewOptions}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Main;
