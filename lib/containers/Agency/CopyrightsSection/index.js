import CopyrightWrapper from './copyrightSection.style';


const CopyrightSection = ({ model }) => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {model.children &&
          model.children
            .filter(m => m.online)
            .map((profileItem, index) => {
              let profile = profileItem.data.reduce(function(map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              }, {});
              return (
                <li key={`profile_key_${index}`}>
                  <a href={profile.link} target="_blank" rel="noreferrer">
                    {profile.icon ? (
                      <i className={profile.icon} />
                    ) : (
                      <img src={profile.image} />
                    )}
                  </a>
                </li>
              );
            })}
      </ul>
    </CopyrightWrapper>
  );
};

export default CopyrightSection;
