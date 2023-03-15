export const Textarea = ({
  className,
  type,
  icon,
  iconPosition,
  ...props
}: {
  className?: string;
  type?: string;
  icon?: any;
  iconPosition?: string;
}) => {
  const addAllClasses = ['input_element'];
  const inputType = type ? type : 'text';

  if (className) {
    addAllClasses.push(className);
  }
  if (icon && iconPosition) {
    addAllClasses.push(`icon-${iconPosition}`);
  }

  return (
    <div className={addAllClasses.join(' ')}>
      <textarea {...props} />
      {icon && <span className="input-icon">{icon}</span>}
    </div>
  );
};
