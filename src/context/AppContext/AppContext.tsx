import { ComponentType, PropsWithChildren, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  components: Array<ComponentType<PropsWithChildren<any>>>;
}

export const AppContext = (props: IProps) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};
