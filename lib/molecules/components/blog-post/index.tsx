interface BlogPostProps {
  className?: string;
  thumbUrl?: string;
  title?: string;
  excerpt?: string;
  link?: React.ReactElement;
}

export const BlogPost = ({
  className,
  thumbUrl,
  title,
  excerpt,
  link,
}: BlogPostProps) => {
  // Add all classs to an array
  const addAllClasses = ['blog_post'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <div className={addAllClasses.join(' ')}>
      <div className="thumbnail">
        <img src={thumbUrl} alt={title} />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="excerpt">{excerpt}</p>
        {link && <div className="learn_more">{link}</div>}
      </div>
    </div>
  );
};
