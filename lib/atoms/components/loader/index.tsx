import LoaderStyle from './loader.style';

/* eslint-disable-next-line */
export interface LoaderProps {
    /** ClassName of the Loader */
    className?: string;
    /** Set loader width in number || string */
    width?: string | number;
    /** Set loader height in number || string */
    height?: string | number;
    /** Set color for loader */
    loaderColor?: string;
}

export const Loader = ({ loaderColor, className, ...props }: LoaderProps) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__loader'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }
  return (
    <LoaderStyle
      className={addAllClasses.join(' ')}
      loaderColor={loaderColor}
      {...props}
    />
  );
};
