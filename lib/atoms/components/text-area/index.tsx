export const Textarea = ({
  className,
  placeholder,
  type,
  value,
  icon,
  iconPosition,
  onChange,
  ...props
}: {
  className?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  icon?: any;
  iconPosition?: string;
  onChange: (e: any) => void;
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
