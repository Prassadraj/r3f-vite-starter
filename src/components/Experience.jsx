import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { BoxGeometry } from "three";


export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typin", "Falling", "Standing"],
    },
  });
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows />
        <Avatar animation={animation} />
      </group>
    </>
  );
};
