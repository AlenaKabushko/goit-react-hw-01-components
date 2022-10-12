import Box from 'components/Box';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import {
  ProfileInfo,
  MainInfo,
  Foto,
  MainDescr,
  Name,
  StatsList,
  StatsItem,
  StatsTitle,
  StatsValue,
} from './Profile.styled';

function Profile(props) {
  const { username, tag, location, avatar, stats } = props;
  const { followers, views, likes } = stats;

  const theme = useTheme();
  return (
    <Box
      as="section"
      p={theme.spase[2]}
      bg={theme.color.bgSection}
      fontSize={theme.fontSizes.m}
      flexDirection="column"
    >
      <ProfileInfo>
        <MainInfo>
          <Foto src={avatar} alt="User avatar" />
          <Name>{username}</Name>
          <MainDescr>@{tag}</MainDescr>
          <MainDescr>{location}</MainDescr>
        </MainInfo>
        <StatsList>
          <StatsItem>
            <StatsTitle>Followers</StatsTitle>
            <StatsValue>{followers}</StatsValue>
          </StatsItem>
          <StatsItem>
            <StatsTitle>Views</StatsTitle>
            <StatsValue>{views}</StatsValue>
          </StatsItem>
          <StatsItem>
            <StatsTitle>Likes</StatsTitle>
            <StatsValue>{likes}</StatsValue>
          </StatsItem>
        </StatsList>
      </ProfileInfo>
    </Box>
  );
}

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
